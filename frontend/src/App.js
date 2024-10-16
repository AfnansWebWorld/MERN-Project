import {BrowserRouter, Routes, Route } from 'react-router-dom'
import About from './Pages/About';
import Login from './Pages/Login';
import Services from './Pages/Services';
import RegistrationForm from './Pages/Register';
import ContactForm from './Pages/Contact';




function App() {
  return (
    <div className="App">
     <>
     <BrowserRouter>
     <Routes>
      <Route path='/about' element={<About/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/register' element={<RegistrationForm />} />
      <Route path='/contact' element={<ContactForm />} />


     </Routes>
     </BrowserRouter>
     </>
    </div>
  );
}

export default App;
