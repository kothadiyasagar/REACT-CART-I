import logo from './logo.svg';
import './App.css';
import Offerline from './componet/pages/Navbar.jsx';
import Navbar from './componet/pages/Navbar.jsx';
import Footer from './componet/Footer.jsx';
import Men from '../src/componet/pages/Men.jsx';
import Women from '../src/componet/pages/Women';
import Electronic from '../src/componet/pages/Electronic';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../src/componet/pages/Category';
import About from './componet/pages/About';
import {BrowserRouter} from "react-router-dom"
import Faq from './componet/pages/Faq';
import Home from './componet/pages/Home';

function App() {
  const[sagar,setSagar]=useState(true)
  return (
  <>
 {/* <Navbar/> */}
 {/* <Electronic/>
 <Footer/> */}

<BrowserRouter>
<Navbar/>
<Routes>
<Route path='/' element={<Home/>}></Route>
  <Route path='/about' element={<About/>}></Route>
  <Route path='/clothing' element={<Category/>}>

  <Route path='/clothing/menfashion' element={<Men/>}></Route>
   <Route path='/clothing/Womenfashion' element={<Women/>}></Route>
  </Route>
  
   <Route path='/electronic' element={<Electronic/>}></Route>
   <Route path='/faq' element={<Faq/>}></Route>
  </Routes>
  <Footer/>
</BrowserRouter>
  </>
  );
}

export default App;
