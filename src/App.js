import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import News from './components/News/News'
import About from './components/About/About'
import Footer from './components/Footer/Footer';
import Cadrs from './components/Cadrs/Cadrs'; 
import Contact from './components/Contacts/Contact';

function App() {
  return (
    <>
    <Header/>

    <Routes>
    <Route path='/' element={<News/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/cadrs' element={<Cadrs/>}></Route>
    <Route path='/contacts' element={<Contact/>}></Route>
    </Routes>
    
    <Footer/>
     </>
  );
}

export default App;
