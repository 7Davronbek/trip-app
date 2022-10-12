import './App.scss';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Tours from './pages/Tours';
import Services from './pages/Services'
import Blogs from './pages/Blogs';
import About from './pages/About';
import Contact from './pages/Contact'
import Footer from './components/Footer'
import { Routes, Route } from "react-router-dom";
import TelegramOffer from './components/TelegramOffer';
import Dubai from './tours/Dubai';
import Yaponiya from './tours/Yaponiya';
import { useLocation } from 'react-router-dom';
import {useEffect} from 'react';
import Yevropa from './tours/Yevropa';
import Vinetsiya from './tours/Vinetsiya';
import Fransiya from './tours/Fransiya';
import Misr from './tours/Misr';
import Malasia from './tours/Malasia';
import Usa from './tours/Usa';
import Azerbaijan from './tours/Azerbaijan';
import Vetnam from './tours/Vetnam';
import Finlandiya from './tours/Finlandiya';
import Sharqiyyevropa from './tours/Sharqiyyevropa';
import Avstriya from './tours/Avstriya';
import Sanatoriya from './tours/Sanatoriya';
import YevropagaSayohatlar from './tours/YevropagaSayohatlar';
import Kruiz from './tours/Kruiz';
import Dubay from './tours/Dubay';

function App() {
  const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0,0);
    }, [pathname]);


  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/tours' element={<Tours/>}/>
        <Route path='/services' element={<Services/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/> 
        <Route path='/dubai' element={<Dubai/>}/>
        <Route path='/yaponiya' element={<Yaponiya/>}/>
        <Route path='/yevropa' element={<Yevropa/>}/> 
        <Route path='/vinetsiya' element={<Vinetsiya/>}/> 
        <Route path='/fransiya' element={<Fransiya/>}/>
        <Route path='/misr' element={<Misr/>}/>
        <Route path='/malasia' element={<Malasia/>}/> 
        <Route path='/usa' element={<Usa/>}/>
        <Route path='/azerbaijan' element={<Azerbaijan/>}/> 
        <Route path='/vetnam' element={<Vetnam/>}/> 
        <Route path='/filandiya' element={<Finlandiya/>}/> 
        <Route path='/sharqiyyevropa' element={<Sharqiyyevropa/>}/> 
        <Route path='/avstriya' element={<Avstriya/>}/> 
        <Route path='/sanatoriya' element={<Sanatoriya/>}/>
        <Route path='/yevropaga-sayohatlar' element={<YevropagaSayohatlar/>}/>
        <Route path='/kruiz' element={<Kruiz/>}/>
        <Route path='/dubay' element={<Dubay/>}/>


      </Routes>
      <TelegramOffer/>
      <Footer/>

    </div>
  );
}

export default App;
