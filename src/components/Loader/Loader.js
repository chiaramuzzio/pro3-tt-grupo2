import React from 'react'
import './Loader.css'

const Loader = () =>{
    return(
        <div className='Loader'>
            <img src='https://cdn.dribbble.com/users/479985/screenshots/10777708/media/af7ad2e66c16511f21b3f42718f211d2.gif' className= "gifLoader"></img>
            <p>Cargando...</p>
        </div>
    )
}

export default Loader