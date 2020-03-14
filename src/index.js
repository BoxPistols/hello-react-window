import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
// import App from './App';
import * as serviceWorker from './serviceWorker'

import { stringVal, myVal, ReactEl } from './Variable'
import ClassComponent from './Variable'

console.log(stringVal)
myVal()

class Human {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

const myProfile = new Human('ore', 42)
console.log(`name:${myProfile.name} age:${myProfile.age}`)

const tanakaProfile = new Human('tanaka', 22)
console.log(`name:${tanakaProfile.name} age:${tanakaProfile.age}`)

// const returnReactElement = (val) => <h2>{val}</h2>
const ReturnReactElement = ({ name, group }) => {
  return (
    <h2>
      <ClassComponent />
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
