import ReactDOM from "react-dom";
import React from 'react';
import Icon from './icon'

const fn: React.MouseEventHandler = () => {
  console.log('hi')
};

const onMouseEnter: React.MouseEventHandler = () => {
  console.log('onMouseEnter');
};


ReactDOM.render(<Icon className={'newClass'} name={'spotify'} onClick={fn} onMouseEnter={onMouseEnter}/>, document.querySelector('#root'));