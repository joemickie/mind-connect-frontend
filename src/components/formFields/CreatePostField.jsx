import React, { useState } from 'react';
import Modal from 'react-modal';
import { AiTwotonePicture } from "react-icons/ai";
import { GoDeviceCameraVideo } from "react-icons/go";
import { GrAttachment } from "react-icons/gr";
import { GoSmiley } from "react-icons/go";
import { IoIosClose } from "react-icons/io";


function CreatePostField({
    value,
    onValueChanged = (e) => { }, onClick,
    placeHolder = 'What do you want to share?'

}) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const modalStyles = {
        content: {
            width: '30em',
            height: '300px',
            margin: 'auto',
            borderRadius: '10px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        },
    };

    return (
        <div>
            <input
                onClick={openModal}
                placeholder={"What's on your mind?"}

                style={{
                    padding: '10px',
                    fontSize: '16px',
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    background: '#fff',
                    cursor: 'pointer',
                    width: '500px'
                }}
                value={value}
                readOnly
            />

            <Modal
                isOpen={isModalOpen}
                onRequestClose={closeModal}
                contentLabel="Create Post Modal"
                style={modalStyles}
            >
                <div className="relative flex flex-col max-md:ml-0 max-md:w-full">
                    <div className="flex justify-end">
                        <button onClick={closeModal} className="p-2 text-gray-500" style={{ fontSize: '30px' }}>
                            <IoIosClose />
                        </button>
                    </div>
                    <textarea
                        value={value}
                        onChange={e => {
                            onValueChanged(e.target.value)
                        }}
                        className="px-4 pt-7 bg-white border border-solid border-[color:var(--Grey-300,#D0D5DD)];"
                        style={{ height: '200px' }}
                        placeholder={placeHolder}

                    />
                    <div className="absolute bottom-2 left-2 pt-20">
                        <div className="flex gap-2">
                            <AiTwotonePicture />
                            <GoDeviceCameraVideo />
                            <GrAttachment />
                            <GoSmiley />
                        </div>
                    </div>
                    <button onClick={onClick} className="absolute bottom-2 right-2 bg-blue-500 text-white py-2 px-4 rounded mb-5">Post</button>

                </div>

            </Modal>
        </div>
    );
};

export default CreatePostField;
