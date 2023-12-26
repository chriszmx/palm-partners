import React from "react";

const Modal = ({ isOpen, closeModal, content }) => {
    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-50 overflow-auto bg-black bg-opacity-50 flex justify-center items-center"
            onClick={closeModal}
        >
            <div
                className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex rounded-lg shadow-xl"
                onClick={(e) => e.stopPropagation()} // Prevent click from closing the modal
                style={{
                    transition: 'transform .2s ease-out',
                    transform: isOpen ? 'translateY(0)' : 'translateY(-100vh)',
                }}
            >
                <span
                    className="absolute top-0 right-0 p-4 cursor-pointer text-gray-700 hover:text-gray-900"
                    onClick={closeModal}
                >
                    &times;
                </span>
                <div className="mt-4">{content}</div>
            </div>
        </div>
    );
};

export default Modal;
