import React from 'react';
import './button.css';

let Button = (props) => {
  return (
    <div >
      <input type="button" value={props.value} onClick={props.function} disabled={props.disabled} />
    </div>
  );
}

export default Button;