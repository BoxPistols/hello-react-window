import React, { Component } from 'react'
// if use Component
import Greet from './greet'
class Comp1 extends Component {
  render() {
    return (
      <>
        <div>
          Hello <Greet />
        </div>
      </>
    )
  }
}

/* this is function
function Comp1() {
  return (
    <>
      <h1>Hello</h1>
    </>
  )
}
*/
export default Comp1
