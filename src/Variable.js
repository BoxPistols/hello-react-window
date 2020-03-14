import React from 'react'

export const stringVal = 'stringVal!'

export const myVal = () => {
  console.log('moge')
}

export const ReactEl = () => <h2>React Comp</h2>

class ClassComponent extends React.Component {
  render() {
    return <div>ClassComponent</div>
  }
}

export default ClassComponent
