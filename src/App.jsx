import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import { HomePage, AboutPage, ProjectsPage, ContactPage } from './components/pages'
import './index.css'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}

export default App
