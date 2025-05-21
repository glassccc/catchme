import { useEffect, useState, useRef } from 'react'
import logo from './assets/logo.png'
import './App.css'

function App() {
  const [checkedIn, setCheckedIn] = useState(false)
  const audioRef = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('checkedIn')
    if (stored === 'true') {
      setCheckedIn(true)
    }
  }, [])

  const handleCheckIn = () => {
    const code = window.prompt(`체크인은 현장 스탭이 진행합니다.\n인증 코드를 입력해주세요.`)
    if (code !== '0712') {
      alert('인증 코드가 올바르지 않습니다.')
      return
    }
    setCheckedIn(true)
    localStorage.setItem('checkedIn', 'true')
  
    // 효과음 재생
    if (audioRef.current) {
      audioRef.current.play()
    }
  }  

  return (
    <div className="container">
      <h1 className="logo"><img src={logo} alt="Cat-ch Me!"  /></h1>
      <button onClick={handleCheckIn} disabled={checkedIn}>
        {checkedIn ? 'Complete' : 'Check In'}
      </button>
      <p>{checkedIn ? '방문해주셔서 감사합니다 ฅ^•ﻌ•^ฅ♡' : ''}</p>
      <audio ref={audioRef} src="/nyang.mp3" preload="auto" />
      <p className='copyright'>© 2025 kooCATbin. All rights reserved.</p>
    </div>
  )
}

export default App