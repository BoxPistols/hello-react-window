import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'

// const returnReactElement = (val) => <h2>{val}</h2>
const ReturnReactElement = props => {
  return (
    <h2>
      {props.name} / {props.music}{' '}
    </h2>
  )
}
ReactDOM.render(
  <ReturnReactElement name='おれ' music='jazz' />,
  document.getElementById('root')
)

serviceWorker.unregister()
