import { useState } from 'react'
import './App.css'

// import React, { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);

//   const addCount = () => {
//     setCount(count + 1);
//   }

//   const disCount = () => {
//     setCount(count - 1);
//   }

//   const reMove = () => {
//     setCount(0);
//   }


//   return (
//     <>

//     <div>

//     Count : {count}

//     </div>
//     <div>
//     <button onClick={addCount}>증가</button>
//     <button onClick={disCount}>감소</button>
//     </div>
//     <button onClick={reMove}>리셋</button>
//     </>
//   )
// }

// export default App

//---------------------------------------------------------------------------

// import React from 'react'
// import { useState } from 'react'

// const App = () => {

//   const [count, setCount] = useState(0);

//   const addCount = () => {
//     setCount(count + 1)
//   }

//   const disCount = () => {
//     setCount(count + 1)
//   }



//   return (
//     <>
//     <div>
//     count : {count}
//     </div>
//     <div>
//       <button onClick={addCount}>+</button>
//       <button onClick={disCount}>-</button>
//     </div>

//     </>
//   )
// }

// export default App

//---------------------------------------------------------------------------

// import React from 'react'

// const App = () => {
//   const [isDark, setIsDark] = useState(false);

//   const changeMode = () => {
//     setIsDark(!isDark);
//   }

//   return (
//     <div style={{
//       backgroundColor: isDark ? "black" : "white",
//       color: isDark ? "white" : "black",
//     }}>
//       {isDark ? "다크모드" : "화이트모드"}
//       <button onClick={changeMode}>change</button>
//     </div>
//   )
// }

// export default App

//---------------------------------------------------------------------------

import React from 'react'

const App = () => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  const onSubmit = () => {
    alert(`당신이 입력한 값은 : ${inputValue}`)
    setInputValue("")
  }

  return (
    <div>
      <input onChange={handleInputChange} value={inputValue} type='text' placeholder='입력하세요'>
      </input>
      <button onClick={onSubmit}>제출</button>
    </div>
  )
}

export default App