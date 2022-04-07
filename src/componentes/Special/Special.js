import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Special = ( ) => {
          // const [ring ]=useContext(RingContext)
          const [house,setHouse]=useContext(RingContext)
          return (
                    <div>
                         <p>Special:{house}</p> 
                         <button onClick={()=>setHouse(house + 1)}>Context Button</button>    
                    </div>
          );
};

export default Special;