
import './counter.css';
import {FaPlus, FaMinus} from "react-icons/fa"
import React, { useState } from "react";

let count = false;
const Counter = (props) => {

    const [counter, setCounter] = useState(0)


    const handleClick1 = () => {

      setCounter(counter + 1);
      
      count+=1;

      if (props.counterUpdate){
        props.counterUpdate(1);
      }

    }
    const handleClick2 = () => {
        {  

          if(counter>0){
              setCounter(counter - 1)
              count-=1;

              if (props.counterUpdate){
                props.counterUpdate(-1);
              }
              
          }
        }
    }
    return (
        <div>
            <div className = 'counter'> 
              {counter}
            </div>
            <div className="buttons">
              <button onClick={handleClick2} className='btn'><FaMinus/></button>
              <button onClick={handleClick1} className='btn'><FaPlus/></button>
            </div>
          </div>
        )
}
      
 
export default Counter;
export{count};
