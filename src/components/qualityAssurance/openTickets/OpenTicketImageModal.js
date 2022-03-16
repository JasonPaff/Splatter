import {Dialog, Transition} from "@headlessui/react";
import {Fragment, useState} from "react";

export default function OpenTicketImageModal(props) {
    const [open, setOpen] = useState(true)

    const imageSrc = `data:${props.imageType};base64, ${props.imageData}`;
    return (
        <>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
                    <div
                        className="mt-4 sm:mt-0 items-end justify-center min-h-screen px-4 pb-20 text-center block sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                        >
                            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                        </Transition.Child>

                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <div
                                className="relative inline-block align-bottom bg-white rounded-lg px-4 pb-4 pt-4
                                        text-left overflow-hidden shadow-xl transform transition-all sm:my-8
                                        align-middle w-4/5 sm:p-6">
                                <div>
                                    <img
                                        className="w-full h-auto"
                                        src={imageSrc}
                                        alt="screenshot"/>
                                </div>
                                <div className="mt-5 sm:mt-6">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center w-full rounded-md border
                                                border-transparent shadow-sm px-4 py-2 bg-sky-600 text-base
                                                font-medium text-white hover:bg-sky-700 focus:outline-none
                                                focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:text-sm"
                                        onClick={() => setOpen(false)}
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    )
}