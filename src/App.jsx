import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './ButtonComponent'
import ImageComponent from './ImageComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <ImageComponent cats="https://placecats.com/poppy/300/200" />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <ButtonComponent btn="cliccami" />
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
