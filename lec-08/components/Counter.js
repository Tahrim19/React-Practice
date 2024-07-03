import { useState } from "react"

export default function Counter() {
    // const stateArray = useState(0);
    // const count = stateArray[0];
    // const setCount = stateArray[1];

    const [count , setCount] = useState(0);
    const setting = () => {
        setCount(count + 1)
    }
      
  return (
    <div style={{textAlign: 'center'}}>
      <h1>{count}</h1>
      <button onClick={setting}>Increase Count</button>
    </div>
  )
}
