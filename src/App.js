import React from 'react';
import './App.css';
import { useSelector,useDispatch} from 'react-redux';
import {incNumber,decNumber} from './actions/index';
//In redux useSlector is used and myState obj is used useselector()

const App =()=> {
  const myState = useSelector((state)=>state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
    <div className='container'>
      <h1>Incerment/Decrement counter</h1>
      <h4>Using React and Redux</h4>
      <div className='quantity'>
      <a className='quantity_minus' title="Decrement" onClick={() =>dispatch(decNumber())}><span>-</span></a>
      <input className='quantity_input' type="text" name='quantity' value={myState}/>
      <a className='quantity_plus' title="Increment" onClick={() => dispatch(incNumber())}><span>+</span></a>

      </div>
    </div>

    </>
    
  );
}

export default App;
//in onclick(),dispatch is used usedispatch()for using action ex: incerementor decrement