import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { DataContext } from "../../App"
import { GeneratedLink } from "../../routeLink"
import FormCheckBox from "./FormCheckBox"
import FormInput from "./FormInput"
import FormRadio from "./FormRadio"
import { GetLastUpdate } from '../../functions'


const InputPage = () => {
    const { setData } = useContext(DataContext)
    let navigate = useNavigate()
    const [isUseInformation, setUseInformation] = useState(false)
    const [inputData, setinputData] = useState({
        developerName: '',
        developerEmail: '',
        appName: '',
        yourWeb: '',
        shortDesc: '',
        lastUpdateDate: GetLastUpdate(),
        informationApp:
        {
            userInformation: [],
            automaticInformation: false,
            appGetLocation: false,
        }
    })

    // console.log(searchParams.get('test'))

    const onHandlerChange = (e, type) => {
        // console.log(e.target.value)
        setinputData({
            ...inputData, [type]: e.target.value
        })
    }

    const onHandlerChangeInformationApp = (e, type) => {
        // console.log(e)
        setinputData({
            ...inputData, informationApp: {
                ...inputData.informationApp, [type]: e.target.value === 'true'
            }
        })
    }

    const onHandlerCheckbox = (e) => {
        const checboxList = inputData.informationApp.userInformation
        if (e.target.checked) {
            checboxList.push(e.target.value)
            setinputData({
                ...inputData, informationApp: {
                    ...inputData.informationApp, userInformation: checboxList
                }
            })
        }
        else {
            const newList = checboxList.filter((list) => list !== e.target.value)
            setinputData({
                ...inputData, informationApp: {
                    ...inputData.informationApp, userInformation: newList
                }
            })
        }
    }

    const onSubmit = (e) => {
        e.preventDefault()
        if (isUseInformation && inputData.informationApp.userInformation.length === 0) {
            alert('Please Select atleast one of information user need to provide')
            return
        }
        setData(inputData)
        navigate(`${GeneratedLink}?generated=true `)
    }

    useEffect(() => {
        document.title = 'Generate Your Privacy Policy for Android App'
        setinputData({
            ...inputData, informationApp: {
                ...inputData.informationApp, userInformation: []
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isUseInformation])

    // console.log()

    return (
        <div className="flex flex-col h-screen">
            <div className='flex justify-center cursor-default'>
                <p className='text-2xl py-3 text-white text-center bg-black px-10 rounded hover:bg-blue-500 hover:text-black'>Generate Privacy Policy for Mobile App</p>
            </div>
            <div className="flex flex-col bg-emerald-600 lg:bg-white flex-1 lg:mx-[30%]">
                <p className="text-xl font-bold my-3 text-center underline text-white lg:text-black">Fill This Form</p>
                <div className="flex flex-col px-2">
                    <form onSubmit={onSubmit}>
                        <p className="text-center text-xl text-white lg:text-black">Basic Information</p>
                        <FormInput
                            label={'Your Name / Your Developer Team Name'}
                            onHandlerChange={onHandlerChange}
                            name={'developerName'}
                            type={'text'}
                            value={inputData.developerName}
                        />
                        <FormInput
                            label={'Your Email / Your Developer Team Email'}
                            onHandlerChange={onHandlerChange}
                            name={'developerEmail'}
                            type={'email'}
                            value={inputData.developerEmail}
                        />
                        <FormInput
                            label={'Your App Name'}
                            onHandlerChange={onHandlerChange}
                            name={'appName'}
                            type={'text'}
                            value={inputData.appName}
                        />
                        <FormInput
                            label={'Your Web'}
                            onHandlerChange={onHandlerChange}
                            name={'yourWeb'}
                            type={'text'}
                            value={inputData.yourWeb}
                        />
                        <FormInput
                            label={'Short Description about your app'}
                            onHandlerChange={onHandlerChange}
                            name={'shortDesc'}
                            type={'text'}
                            value={inputData.shortDesc}
                        />
                        <p className="text-center text-xl text-white lg:text-black">App Information</p>
                        <div className="flex flex-col lg:flex-row items-center my-1">
                            <p className="w-80 text-xs lg:text-base text-center lg:text-left text-white lg:text-black">Does User need to provide any information ?</p>
                            <div className="mx-2">
                                <input id={'radioInformation1'}
                                    type={"radio"}
                                    className="mx-1 accent-red-500"
                                    name="radioInformation"
                                    checked={isUseInformation}
                                    onChange={() => setUseInformation(true)}
                                    value={true}
                                />
                                <label className="text-white lg:text-black" htmlFor="radioInformation1">Yes</label>
                            </div>
                            <div className="mx-2">
                                <input id={'radioInformation2'}
                                    type={"radio"}
                                    className="mx-1 accent-red-500"
                                    name="radioInformation"
                                    checked={!isUseInformation}
                                    onChange={() => setUseInformation(false)}
                                    value={false}
                                />
                                <label className="text-white lg:text-black" htmlFor="radioInformation2">No</label>
                            </div>
                        </div>
                        {isUseInformation &&
                            <div className="flex flex-col my-1">
                                <p className="text-sm text-center lg:text-base lg:text-left text-white lg:text-black">What kind Information do user need to provide in your app ?</p>
                                <div className="flex flex-col flex-wrap border border-black h-36 rounded shadow-2xl bg-emerald-500 py-1">
                                    <FormCheckBox
                                        label={'Name'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Email Address'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Personal Identifiers'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Address'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Phone Number'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Race and ethnicity'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Political or religious beliefs'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Gender'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                    <FormCheckBox
                                        label={'Other personal info'}
                                        onHandlerChange={onHandlerCheckbox}
                                    />
                                </div>
                            </div>
                        }
                        <FormRadio
                            label={'Does This App Automatically Collect User Information ?'}
                            name={'automaticInformation'}
                            val={inputData.informationApp.automaticInformation}
                            onHandlerChange={onHandlerChangeInformationApp}
                        />
                        <FormRadio
                            label={'Does This App collect precise real time location information of the devices ?'}
                            name={'appGetLocation'}
                            val={inputData.informationApp.appGetLocation}
                            onHandlerChange={onHandlerChangeInformationApp}
                        />
                        <input
                            className="py-2 border border-black mb-3 bg-emerald-500 rounded hover:bg-blue-700 hover:text-white font-bold w-full cursor-pointer"
                            type="submit" value={'Generate'} />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default InputPage