import React, { useState } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faImages, faEnvelope, faInfoCircle, faBars } from '@fortawesome/free-solid-svg-icons';








export default function Nav() {
    const [open , setOpen] = useState(false)

    const toggle = () =>{
        setOpen(!open)
    }

  return (
    <div className='navbar'>
        <ul className='tgclass' >
        <li>
          <FontAwesomeIcon icon={faHome} />  <span>Home</span>
        </li>
        <li className={`${open ? "small" : ""}`}>
          <FontAwesomeIcon icon={faImages} /> Gallery
        </li>
        <li className={`${open ? "small" : ""}`}>
          <FontAwesomeIcon icon={faEnvelope} /> Contact
        </li>
        <li className={`${open ? "small" : ""}`}>
          <FontAwesomeIcon icon={faInfoCircle} /> About
        </li>
      </ul>
     
      <ul style={{ listStyleType: 'none', gap: '20px', padding: '0', margin: '0',display:'inline-block',color:'black'}} >
      <li style={{color:'white',float:'right'}} className='last' onClick={toggle}>
        <FontAwesomeIcon icon={faBars} />
      </li >
      
      </ul>
      
      </div>
   
  )
}
