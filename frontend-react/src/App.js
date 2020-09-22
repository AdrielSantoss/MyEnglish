import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './config/routes'

function App() {
  return (
    <Router>
      <div className="App">
          <Routes/>
      </div>
    </Router>
  )
}

export default App;
