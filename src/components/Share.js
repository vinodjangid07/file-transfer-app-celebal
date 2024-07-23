import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

const Share = () => {
    const { roomId, handleCreateRoom, handleFileUpload, uploadStatus } = useContext(AppContext);
    const [roomCreated, setRoomCreated] = useState(false);

    const handleCreateRoomClick = () => {
        handleCreateRoom();
        setRoomCreated(true);  // Mark the room as created
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            handleFileUpload(file);
        }
    };

    return (
        <>
            <div className="share-co">
                <h2>Create Room ID</h2>
                <button onClick={handleCreateRoomClick}>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="none" d="M0 0h24v24H0z"></path>
                            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
                        </svg> Create
                    </span>
                </button>
                {roomCreated && !roomId && <p>Room creation failed. Please try again.</p>}
                {roomId && (
                    <div>
                        <span>Room ID: {roomId}</span>
                        <p>Please upload files after a successful connection with the receiver.</p>
                        <input type="file" onChange={handleFileChange} className="upload-input" />
                        {uploadStatus && <p className="upload-status">{uploadStatus}</p>}
                    </div>
                )}
            </div>

            <style jsx>{`
                .upload-input {
                    margin-top: 10px;
                    padding: 5px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                }
                .upload-status {
                    margin-top: 10px;
                    color: green;
                    font-weight: bold;
                }
            `}</style>
        </>
    );
}

export default Share;
