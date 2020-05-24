import React from 'react';
import './counterBlock.css';
import Button from './button/button';

let CounterBlock = (props) => {

  let classNameNum = (props.state.classValue) ? 'active' : 'showNumber';
 
  return (
    <div className="counterBlock">
      <div className={classNameNum}> 
        {props.state.value}
      </div>
      <div className='buttons'>
        < Button value={'inc'} function={props.increase} disabled={props.state.incBut} />
        < Button value={'reset'} function={props.resetNumber} disabled={props.state.resetBut} />
      </div>
    </div>
  );
}

export default CounterBlock;