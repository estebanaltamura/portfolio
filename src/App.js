import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Home } from './components/Home/Home'; 
import { CV } from './components/CV/CV';
import { Footer } from './components/Footer/Footer';
import './App.css';

function App() {

return (      
  <div className="App">
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path="*" element ={<Home />} />   
        <Route path="/cv" element ={<CV />} />                
      </Routes>
    </BrowserRouter>
    <Footer />
  </div>
     
  );
}

export default App;
