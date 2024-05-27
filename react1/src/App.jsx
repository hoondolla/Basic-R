import './App.css'
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0);

  const addCount = () => {
    setCount(count + 1);
  }

  const disCount = () => {
    setCount(count - 1);
  }

  const reMove = () => {
    setCount(0);
  }


  return (
    <>

    <div>

    Count : {count}

    </div>
    <div>
    <button onClick={addCount}>증가</button>
    <button onClick={disCount}>감소</button>
    </div>
    <button onClick={reMove}>리셋</button>
    </>
  )
}

export default App