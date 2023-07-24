import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home/Home';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {

// useEffect(()=>{
//   window.scrollTo({
//     top: 0,
//     left: 0,
//     behavior: "smooth"
//   })
// },[])

return (      
  <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
      <Route path="*" element = {<Navigate to="/home" />} />
        <Route path="/home" element = {<Home />} />   
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
     
  );
}

export default App;
