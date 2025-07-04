import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { AuthProvider } from './contexts/AuthContext'
import { Layout } from './components/Layout'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { FindHelp } from './pages/FindHelp'
import { Donate } from './pages/Donate'
import { NGOList } from './pages/NGOList'
import { EmergencyChat } from './pages/EmergencyChat'
import { Dashboard } from './pages/Dashboard'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/find-help" element={<FindHelp />} />
              <Route path="/donate" element={<Donate />} />
              <Route path="/ngos" element={<NGOList />} />
              <Route path="/emergency-chat" element={<EmergencyChat />} />
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Layout>
        </Router>
      </AuthProvider>
    </QueryClientProvider>
  )
}

export default App
