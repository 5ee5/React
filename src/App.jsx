import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import htmlLogo from './assets/html.svg'
import cssLogo from './assets/css.svg'
import pop from './assets/pop.mp3'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const audioRef = useRef(null)

  const playPop = () => {
  audioRef.current.play()
  }

  return (
    <>

     <audio ref={audioRef} src={pop} />

      <div>
        <a>
          <img src={viteLogo} className="logo vite" alt="Vite logo" />
        </a>

        <a>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

	<a>
	  <img src={htmlLogo} className="logo html" alt="HTML logo"/>
	</a>

	<a>
	  <img src={cssLogo} className="logo css" alt="CSS logo"/>
	</a>

      </div>
      <div className="card">

	<p>
	<p>
	<button className="btn1" onClick={() => {setCount(count + 1);}}>
	Count is {count}
	</button>
	</p>

	<p>
	<button className="btn2" onClick={() => {setCount(0); playPop();}}>
	 Reset
	</button>
	</p>
	</p>

      </div>
    </>
  )
}

export default App
