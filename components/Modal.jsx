"use client"

import React, {Fragment, useState, useRef} from "react";
import {Dialog, Transition} from "@headlessui/react"
import {CameraIcon} from "@heroicons/react/16/solid";

function Modal({ open, onClose }) {
    const [selectedFile, setSelectedFile] = useState(null);
    const filePickerRef = useRef(null);
    const captionRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const uploadPost = async () => {
        if (loading) return;
        setLoading(true);


        // onClose();
        // setLoading(false);
        // setSelectedFile(null);
    };

    const addImageToPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0]);
        }

        reader.onload = (readerEvent) => {
            setSelectedFile(readerEvent.target.result);
        };
    };

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-50" onClose={() => onClose(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div>
                                        {selectedFile ? (
                                            <img
                                                src={selectedFile}
                                                onClick={() => setSelectedFile(null)}
                                                alt=""
                                                className="w-full object-contain cursor-pointer"
                                            />
                                        ) : (
                                            <div
                                                onClick={() => filePickerRef.current.click()}
                                                className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100 cursor-pointer"
                                            >
                                                <CameraIcon
                                                    className="h-6 w-6 text-red-600"
                                                    aira-hidden="true"
                                                />
                                            </div>
                                        )}
                                        <div>
                                            <div className="mt-3 text-center sm:mt-5">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                >
                                                    Upload a photo
                                                </Dialog.Title>
                                                <div>
                                                    <input
                                                        type="file"
                                                        ref={filePickerRef}
                                                        hidden
                                                        onChange={addImageToPost}
                                                    />
                                                </div>
                                                <div className="mt-2">
                                                    <input
                                                        type="text"
                                                        className="border-none focus:ring-0 w-full text-center"
                                                        ref={captionRef}
                                                        placeholder="Please enter a caption..."
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mt-5 sm:mt-6">
                                            <button
                                                onClick={uploadPost}
                                                type="button"
                                                disabled={!selectedFile}
                                                className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm disabled:bg-gray-300 disabled:cursor-not-allowed hover:disabled:bg-gray-300"
                                            >
                                                {loading ? "Uploading..." : "Upload Post"}
                                            </button>
                                        </div>
                                    </div>                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>        </>
    )
}

export default Modal