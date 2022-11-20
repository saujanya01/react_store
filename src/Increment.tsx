import React from 'react';
import { useNumberDispatch, useNumberState } from './store/Context';
import { increment } from './store/Action';

const Increment: React.FC = () => {
  const dispatch = useNumberDispatch();
  const state = useNumberState();

  console.log(state);

  return (
    <>
        <div>
          {JSON.stringify(state)}
        </div>
        <div>
            hello
        </div>
        <button onClick={()=>{increment(dispatch)}}>Increment</button>
    </>
    
  )
}

export default Increment;