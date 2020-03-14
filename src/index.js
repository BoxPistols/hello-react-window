import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

// const title = "Hello"
// const body = "body"

// const returnString = () => {
//  return "文字列"
// }

// const el = (
//  <div>
//    <h2>{ title }</h2>
//    <p>{ body }</p>
//    <p>{ returnString() }</p>
//  </div>
// )

// const returnReactElement = (val) => <h2>{val}</h2>
const returnReactElement = (no, name) => {
 const newString = `${no}番目は${name}さん` 
 return <h2>{newString}</h2>
}

ReactDOM.render(returnReactElement(1, "おれ"), document.getElementById('root'));

serviceWorker.unregister();