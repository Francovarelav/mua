import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Page from './Page'
import Proyecto from './components/Proyecto'

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Page />} />
        <Route path="/proyecto/:id" element={<Proyecto />} />
      </Routes>
    </Router>
  )
}

export default App
