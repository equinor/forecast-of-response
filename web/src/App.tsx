import React, {useEffect, useState} from 'react'
import {forAPI} from './services/forApi'

function App() {
  const [apiHealth, setApiHealth] = useState<string>('bad')
  useEffect(() => {
    forAPI.getApiHealth().then(res => {
      setApiHealth(res.data.status)
    })
  }, [])

  return (
    <div>
      <b>API Status:</b>
      <b>{apiHealth}</b>
    </div>
  )
}

export default App
