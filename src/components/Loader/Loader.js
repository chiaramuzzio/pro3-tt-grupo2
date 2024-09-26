import React from 'react'
import './Loader.css'

const Loader = () =>{
    return(
        <div className='Loader'>
            <img src='https://i.pinimg.com/originals/60/e7/20/60e72028b41866ae64c5bd4711f81474.gif' className= "gifLoader"></img>
            <p>Cargando...</p>
        </div>
    )
}

export default Loader