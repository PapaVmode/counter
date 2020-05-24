import React from 'react';
import './valuesBlock.css';
import Button from './button/button';

let ValuesBlock = (props) => {

  let onChangeValues = (e) => {
    let max;
    let start;
    if (e.currentTarget.className === 'a_MaxClass' || e.currentTarget.className === 'b_MaxClass') {
      max = +e.currentTarget.value;
    } else {
      start = +e.currentTarget.value;
    }
    props.settingValues(max, start);
  }

  let setValues = () => {
    // let a = +startValue.current.value;
    props.setValues();
  }

  let inputMaxClass = (props.state.inputMaxClass) ? 'a_MaxClass' : 'b_MaxClass';
  let inputStartClass = (props.state.inputStartClass) ? 'a_StartClass' : 'b_StartClass';



  return (
    <div className="counterBlock">
      <div className='showNumber'>
        <div>Max values:<input className={inputMaxClass} type="number" onChange={onChangeValues} value={props.state.maxValue} /></div>
        <div>Start values:<input className={inputStartClass} type="number" onChange={onChangeValues} value={props.state.startValue} /></div>
      </div>
      <div className='buttons'>
        < Button value={'set'} function={setValues} disabled={props.state.setBut} />
      </div>
    </div>
  );
}

export default ValuesBlock;