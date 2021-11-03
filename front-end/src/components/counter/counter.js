
import './counter.css';
import {FaPlus, FaMinus} from "react-icons/fa"
import React, { useState } from "react";

let count = false;
const Counter = (props) => {

    const [counter, setCounter] = useState(0)


    const handleClick1 = () => {
<<<<<<< HEAD
      if (counter < 5) {
        setCounter(counter + 1);
      
        count+=1;
      }

=======
      setCounter(counter + 1);
      count+=1;
>>>>>>> 7b09cf6a097a83016481dd741e557f6feff2d92d
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
<<<<<<< HEAD
            <div className="buttons">
              <button onClick={handleClick2} className='btn'><FaMinus/></button>
              <span className = 'counter'> 
                {counter}
              </span>
              <button onClick={handleClick1} className='btn'><FaPlus/></button>
            </div>
            <div className="max">
              Max: 5 
            </div>
=======
          <div className = 'counter'> 
            {counter}
          </div>
          <div className="buttons">
            <button onClick={handleClick2} className='btn'><FaMinus/></button>
            <button onClick={handleClick1} className='btn'><FaPlus/></button>
>>>>>>> 7b09cf6a097a83016481dd741e557f6feff2d92d
          </div>
        </div>
        )
}
      
 
export default Counter;
export{count};
