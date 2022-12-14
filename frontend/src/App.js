import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Pages/Home'
import Menu from './Pages/Menu'
import Order from './Pages/Order'
import Contact from './Pages/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/order' element={<Order />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>

        <Footer />
        
      </Router>
    </div>
  );
}

export default App
