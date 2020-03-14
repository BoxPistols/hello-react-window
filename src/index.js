import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'

import { stringVal, myVal, ReactEl } from './Variable'

console.log(stringVal)
myVal()

// const returnReactElement = (val) => <h2>{val}</h2>
const ReturnReactElement = ({ name, group }) => {
  return (
    <h2>
      <ReactEl />
      {name} / {group}
    </h2>
  )
}
ReactDOM.render(
  <ReturnReactElement name="おれ" group="Aチーム" />,
  document.getElementById('root')
)

serviceWorker.unregister()
