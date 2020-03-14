import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'

// const returnReactElement = (val) => <h2>{val}</h2>
const ReturnReactElement = ({ name, group }) => {
  return (
    <h2>
      {name} / {group}
    </h2>
  )
}
ReactDOM.render(
  <ReturnReactElement name='おれ' group='Aチーム' />,
  document.getElementById('root')
)

serviceWorker.unregister()
