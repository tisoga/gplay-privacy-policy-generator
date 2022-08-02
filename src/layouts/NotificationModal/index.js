import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../../App";

const NotificationModal = () => {
    const wrapperRef = useRef(null);
    const { modalNotification, setModalNotification } = useContext(DataContext)
    const bgColor = {
        success: 'bg-green-600',
        error: 'bg-red-600',
        information: 'bg-blue-600'
    }

    function useOutsideAlerter(ref) {
        useEffect(() => {
            /**
             * Alert if clicked on outside of element
             */
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setModalNotification({
                        ...modalNotification, isOpen: false
                    })
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

    useOutsideAlerter(wrapperRef);
    return (
        <>
            {modalNotification.isOpen &&
                <div
                    className="min-h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-75 p-4">
                    <div
                        ref={wrapperRef}
                        className={`flex flex-col mx-2 lg:mx-96 rounded-lg ${bgColor[modalNotification.type]}`}>
                        <div className="w-full border-white border-b-2">
                            <p className="text-white text-center font-bold my-5 px-2 text-2xl">{modalNotification.title}</p>
                        </div>
                        <div className="flex px-2 h-20 justify-center">
                            <p className="text-white text-2xl text-center self-center">{modalNotification.text}</p>
                        </div>
                    </div >
                </div>
            }
        </>
    )
}

export default NotificationModal