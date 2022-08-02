import { useContext, useEffect, useState } from "react"
import InformationSection from "./InformationSection"
import { DataContext } from "../../App"
import { ErrorPage, LoadingPage } from ".."
import { setDoc, doc, getFirestore, getDoc } from "firebase/firestore"
import convertToSlug from "../../functions/convertToSlug"
import { RandomNumber } from "../../functions"
import { useNavigate, useParams, useSearchParams } from "react-router-dom"
import Modal from "./Modal"

const PrivacyPolicy = () => {
    const { data, setData, modalNotification, setModalNotification } = useContext(DataContext)
    const [loading, setLoading] = useState(false)
    const [isModalOpen, setModal] = useState(false)
    let [searchParams ] = useSearchParams();
    const { id } = useParams();
    const db = getFirestore()
    let navigate = useNavigate()

    useEffect(() => {
        const fetchData = async () => {
            const docRef = doc(db, 'app', id);
            const docSnap = await getDoc(docRef)
            if (docSnap.exists()) {
                const res = docSnap.data()
                const informationApp = {
                    userInformation: res.userInformation,
                    automaticInformation: res.automaticInformation,
                    appGetLocation: res.appGetLocation
                }
                res.informationApp = informationApp
                delete res.userInformation
                delete res.automaticInformation
                delete res.appGetLocation
                // console.log(res)
                // console.log(informationApp)
                setData(res)
                setLoading(false)
            }
            else {
                setLoading(false)
                // console.log('Error')
            }
        }
        if (searchParams.get('generated') === 'true') {
            setModalNotification({
                ...modalNotification,
                isOpen: true,
                title: 'Success',
                text: 'The Privacy Policy has been successfully generated.',
                type: 'success'
            })
        }
        else if (searchParams.get('hosting') === 'true') {
            setModalNotification({
                ...modalNotification,
                isOpen: true,
                title: 'Success',
                text: 'The Privacy Policy has been successfully upload in this website.',
                type: 'success'
            })
        }
        if (id) {
            setLoading(true)
            fetchData()
        }
    }, [id]) // eslint-disable-line react-hooks/exhaustive-deps

    const checkDocExist = async (checkID) => {
        const docRef = doc(db, 'app', checkID)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            return true
        }
        else {
            return false
        }
    }

    const onClickHostingIt = async () => {
        const informationApp = data.informationApp
        let slug = convertToSlug(data.appName)
        const dataHosting = { ...data, ...informationApp }
        delete dataHosting.informationApp
        if (await checkDocExist(slug)) {
            slug = `${slug}-${RandomNumber()}`
        }
        // console.log(dataHosting)
        try {
            const docRef = await setDoc(doc(db, 'app', slug), dataHosting)
            navigate(`/privacy/${slug}?hosting=true`)
            // console.log('Success')
            setModal(false)
        }
        catch (err) {
            console.log(err)
        }
    }

    if (loading) {
        return (
            <LoadingPage />
        )
    }

    if (!data.developerName) {
        return (
            <ErrorPage errorMsg={'Something Wrong!'} />
        )
    }

    return (
        <div className="App flex flex-col h-screen">
            <div className='flex justify-center cursor-default'>
                <p className='text-4xl py-3 text-white bg-black px-10 rounded hover:bg-blue-500 hover:text-black'>{data.developerName}</p>
            </div>
            <div className='bg-white flex-1 mx-8 md:mx-32'>
                <div className='px-12 my-2 text-justify'>
                    <h1 className="text-3xl text-center underline mb-3">PRIVACY POLICY FOR MOBILE APPLICATION "{data.appName}"</h1>
                    <p className="mb-2 font-bold">Last Updated : {data.lastUpdateDate}</p>
                    <p className="text-normal">This privacy policy governs your use of the software application “{data.appName}” (later referred as the/this “Application”) for Android™ mobile devices that was created by {data.developerName} This Application is a mobile Android application for {data.shortDesc}</p>
                </div>
                <div className='px-12 py-2 text-justify'>
                    <h1 className="text-2xl mt-4 mb-3 font-bold text-left">What information does the Application obtain and how is it used?</h1>
                    <InformationSection data={data} />
                    <p className="italic mt-5">The "Android" name, the Android logo, the "Google Play" brand, and other Google trademarks, are property of Google LLC and not part of the assets available through the Android Open Source Project. </p>
                </div>
                {!id &&
                    <button className="border border-black bg-emerald-600 p-2 rounded text-white font-semibold mb-2 hover:bg-green-400 hover:text-black" onClick={() => setModal(true)}>Hosting it.</button>
                }
            </div>
            <Modal
                isOpen={isModalOpen}
                setModal={setModal}
                onClick={onClickHostingIt}
            />
        </div>
    )
}

export default PrivacyPolicy