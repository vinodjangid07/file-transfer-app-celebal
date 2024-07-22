import React, { useContext } from 'react'
import { AppContext } from '../context'

const Recive = () => {
  
  const { handleConnect, onchange } = useContext(AppContext);
  
  return (
     <div className="rec-co">
      <h2>Share Your Files Securely</h2>
       <input type="text" onChange={onchange} className='receive-input' placeholder='Enter room id'/>
       <button className="re-btn" onClick={handleConnect}>Connect</button>
     </div>
  )
}

export default Recive;
