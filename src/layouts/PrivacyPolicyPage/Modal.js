import { useEffect, useRef, useState } from "react";

const Modal = ({ isOpen, setModal, onClick }) => {
    const wrapperRef = useRef(null);
    const secretCode = 'asgtwea214'
    const [error, setError] = useState(false)
    const [inputCode, setCode] = useState('')
    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setModal(false)
                    setError(false)
                    setCode('')
                    // console.log('Oustide')
                }
            }

            // Bind the event listener
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                // Unbind the event listener on clean up
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    const onClickCheckSecretCode = () => {
        if (secretCode === inputCode) {
            console.log('sama')
            onClick()
        }
        else {
            setError(true)
        }
    }

    useOutsideAlerter(wrapperRef);
    return (
        <>
            {isOpen &&
                <div
                    className="min-h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
                    <div
                        ref={wrapperRef}
                        className="flex flex-col mx-2 lg:mx-96 rounded-lg bg-green-600">
                        <div className="w-full border-white border-b-2">
                            <p className="text-white text-center font-bold my-5 px-2 text-2xl">Please Input Secret Code to Hosting this Privacy of Policy to this site.</p>
                        </div>
                        <div className="flex flex-col py-2 px-5">
                            <label className="text-white font-bold">Secret Code </label>
                            <input className={'p-2 rounded focus:outline-blue-600 ' + (error && 'outline outline-red-600')}
                                onChange={(e) => setCode(e.target.value)}
                                value={inputCode} />
                            {error &&
                                <label className="bg-black text-red-600 font-bold text-center mt-2">Secret Code Invalid.</label>
                            }
                            <button className="border border-black my-3 bg-blue-800 p-2 rounded text-white font-semibold mb-2 hover:bg-green-400 hover:text-black"
                                onClick={onClickCheckSecretCode}>Confirm</button>
                        </div>
                    </div >
                </div>
            }
        </>
    )
}

export default Modal