import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { NGOList } from './pages/NGOList'
import { EmergencyChat } from './pages/EmergencyChat'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ngos" element={<NGOList />} />
          <Route path="/ai-help" element={<EmergencyChat />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
