import React, { useContext } from 'react';
import { RingContext } from '../GrandPa/GrandPa';

const Unty = ( ) => {
      const [house,setHouse]=useContext(RingContext);
      const UntyAddHouse=()=>{

            const newHouse = house +1;
            setHouse(newHouse)

      }


          return (
                    <div>
                          <h3>Unty</h3>  
                           
                          <p>House{house}</p>
                          <button onClick={UntyAddHouse}> Unty context</button>
                    </div>
          );
};

export default Unty;