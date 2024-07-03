import React from 'react'
import AppleCounter from './components/AppleCounter';
import Counter from './components/Counter';

const hello = () =>{
  console.log("hi");
}

export default function App() {
  return (
    <div>
      {/* <Counter/> */}
      {/* <h1 onClick={hello}>hello world</h1> */}
      <AppleCounter/>
    </div>
  )
}
