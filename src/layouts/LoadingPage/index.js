import { Oval } from 'react-loader-spinner'

const LoadingPage = () => {
    return (
        <div className='flex flex-col flex-1 justify-center items-center h-screen'>
            <Oval
                color='black'
                secondaryColor='blue'
            />
            <p className='text-xl mt-2'>Please Wait ...</p>
        </div>
    )
}

export default LoadingPage