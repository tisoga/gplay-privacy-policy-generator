import { useNavigate } from "react-router-dom"
import { MainPageLink } from "../../routeLink"

const NotFound = ({ errorMsg }) => {
    let navigate = useNavigate()
    const onClickHandler = () => {
        navigate(MainPageLink)
    }
    return (
        <div className="flex flex-col h-screen justify-center">
            <div className="flex flex-col bg-white px-2 items-center mx-2 lg:mx-96 h-40 rounded-lg">
                <h1 className="text-2xl font-bold my-5 underline">Error</h1>
                <p className="text-xl text-center">{errorMsg} <button onClick={onClickHandler} className="text-blue-800 hover:text-black">Click here to return to main page!</button></p>
            </div>
        </div>
    )
}

export default NotFound