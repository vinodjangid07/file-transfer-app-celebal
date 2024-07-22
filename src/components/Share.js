import React, { useContext } from 'react';
import { AppContext } from '../context';

const Share = () => {
  const { roomId, handleonClick, handleFileUpload, isConnected } = useContext(AppContext);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      handleFileUpload(file);
    }
  };

  return (
    <div className="share-co">  
      <h2>Create Room Id</h2>
      <button onClick={handleonClick}>
        <span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path>
          </svg> Create
        </span>
      </button>
      <span>{roomId}</span>

      {isConnected && (
        <div className="file-upload">
          <h3>Connected! Ready to send files</h3>
          <input type="file" onChange={handleFileChange} />
        </div>
      )}
    </div>
  );
};

export default Share;
