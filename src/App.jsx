import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  let timer;
  const clock = () => {
    timer = setInterval(() => {

      setSeconds(seconds => seconds + 1)

      if (seconds === 59 && minutes === 59) {
        setHours(hours => hours + 1)
        setMinutes(0)
        setSeconds(0)
      }

      if (seconds === 59 && minutes != 59) {
        setMinutes(minutes => minutes + 1)
        setSeconds(0)
      }

    }, 1000)
  }

  useEffect(() => {
    clock()
    return () => clearInterval(timer)

  })

  const start = () => {
    clock()
  }

  const restart = () => {
    setHours(0)
    setMinutes(0)
    setSeconds(0)
  }

  const pause = () => {
    clearInterval(timer)
  }

  return (
    <>
      <h3 style={{textAlign:'center'}}>Stop Watch</h3>
      <div className='clock'>
        <p>
          {hours < 10 ? '0' + hours : hours}:
          {minutes < 10 ? '0' + minutes : minutes}:
          {seconds < 10 ? '0' + seconds : seconds}
        </p>
      </div>
      <button className="btn" onClick={restart}>RESTART</button>
      <button className="btn" onClick={start}>START</button>
      <button className="btn" onClick={pause}>PAUSE</button>
    </>
  )
}

export default App
