import React from 'react';
import Peli from '../Peli/Peli';

const PeliGrid2 = ({datos}) => {
   return (
       <>
       <section>
           {datos.map((pelicula, idx)=> <Peli pelicula = {pelicula} key = {idx}/>)}
       </section>
       </>
   );
}

export default PeliGrid2