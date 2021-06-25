import React, {useEffect, useState} from 'react'
import {forAPI} from './services/forApi'
import Header from './Header'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Home from './pages/Home'
import Library from './pages/Library'
import Operations from './pages/Operations'
function App() {
  const [apiHealth, setApiHealth] = useState<string>('bad')
  useEffect(() => {
    forAPI.getApiHealth().then(res => {
      setApiHealth(res.data.status)
    })
  }, [])

  return (
    <div>
      <Header />
      <b>API Status:</b>
      <b>{apiHealth}</b>
      <Router>
        <Switch>
          <Route path={'/library'} component={Library} />
          <Route path={'/operations'} component={Operations} />
          <Route path={'/'} component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
