import { Route, Routes } from 'react-router-dom'
import Nav from './components/Nav/Index'
import Home from './pages/Home/Index'
import Contact from './pages/Contact/Index'
import About from './pages/About/Index'
import TopSuccess from './pages/TopSuccess/Index'
import Search from './pages/Search/Index'
import Footer from './components/Footer/Index'

import './theme.css'
export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/top-success" element={<TopSuccess />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </>
  )
}
