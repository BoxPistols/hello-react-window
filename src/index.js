import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';

const title = "Hello"
const body = "body"

const returnString = () => {
 return "文字列"
}

const el = (
 <div>
   <h2>{ title }</h2>
   <p>{ body }</p>
   <p>{ returnString() }</p>
 </div>
)

ReactDOM.render(el, document.getElementById('root'));

serviceWorker.unregister();