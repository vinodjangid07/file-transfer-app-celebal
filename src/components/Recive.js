import React, { useContext, useState } from 'react';
import { AppContext } from '../context';

const Receive = () => {
    const { handleEnterRoomId, enteredRoomId, handleConnect, receivedFiles } = useContext(AppContext);
    const [connected, setConnected] = useState(false);

    const handleClick = () => {
        handleConnect();
        setConnected(true);  // Set connected to true when the button is clicked
    };

    return (
        <div className="rec-co">
            <h2>Share Your Files Securely</h2>
            <input 
                type="text" 
                onChange={handleEnterRoomId} 
                className='receive-input' 
                placeholder='Enter room id' 
                value={enteredRoomId} 
            />
            <button className="re-btn" onClick={handleClick}>Connect</button>
            {connected && <p>Connected</p>}  {/* Display the message if connected */}
            <div>
                <h3>Received Files:</h3>
                <ul>
                    {receivedFiles.map((file, index) => (
                        <li key={index}>
                            <a href={file.file} download={file.fileName}>{file.fileName}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Receive;
