import React from 'react'
import { useNavigate } from 'react-router-dom'


const DashBoard = () => {

    const navigate = useNavigate();
  
    const handleShare = () =>{
       navigate('/share');
    }

    const handleRecive = () =>{
        navigate('/recive');
    }

  return (
   <>
    
    <div className="container">
        <h1>File Share</h1>

        <div className="con">
            <div className="share" onClick={handleShare}>
            <svg viewBox="0 0 512 512" fill='white' className="dashboard-icon">
    <path
      d="M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"
    ></path>
  </svg>
            <span>Share</span>
            </div>

            <div className="recive" onClick={handleRecive}>
            <svg className='dashboard-icon'
    viewBox="0 0 256 256"
  >
    <path
      d="M74.34 85.66a8 8 0 0 1 11.32-11.32L120 108.69V24a8 8 0 0 1 16 0v84.69l34.34-34.35a8 8 0 0 1 11.32 11.32l-48 48a8 8 0 0 1-11.32 0ZM240 136v64a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-64a16 16 0 0 1 16-16h52.4a4 4 0 0 1 2.83 1.17L111 145a24 24 0 0 0 34 0l23.8-23.8a4 4 0 0 1 2.8-1.2H224a16 16 0 0 1 16 16m-40 32a12 12 0 1 0-12 12a12 12 0 0 0 12-12"
      fill="currentColor"
    ></path></svg
>
            <span>Recive</span>
            </div>
        </div>
    </div>
   </>
  )
}

export default DashBoard
