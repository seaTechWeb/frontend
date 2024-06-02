import Navbar from './components/Navbar';
import './App.css';

import Footer from './components/Footer';
import Home from './components/Home';
import Cubus from './components/Cubus';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'




function App() {
  return (
    <>
      <Router>
        <div className='roboto-slab'>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/cubus' element={<Cubus />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
