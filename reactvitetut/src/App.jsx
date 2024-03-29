import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0);
  // const addValue = () => {
  //   setCount((count) => {
  //     return count < 30 ? count + 1 : count; 
  //   })
  // }
  // const removeValue = () => {
  //   setCount((count) => {
  //     return count > 0 ? count - 1 : count; 
  //   })
  // }
  // const addValue  = () => setCount(count + 1);
  // const removeValue = () => setCount(count - 1);
  return (
    <>
    
      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Vite + React</h1>
      <div className="card">
        <h2>{count}</h2>
        <p>Add Value : {count}</p>
        <button onClick={() => count < 20 ? setCount(count + 1) : count}>Add</button>
        <br />
        <p>Remove Value : {count}</p>
        <button onClick={() => count > 0 ? setCount(count - 1): setCount(0)}>Remove</button>

        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
