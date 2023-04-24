import { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home'; 
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {

useEffect(()=>{
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
  })
},[])

return (      
  <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="*" element ={<Home />} />   
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
     
  );
}

export default App;
