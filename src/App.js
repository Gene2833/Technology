import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './componets/Navbar/Navbar';
import Footer from './componets/Footer/Footer';
import Home from "./componets/Home/Home";
import Blog from './componets/Blog/Blog';
function App() {
  return(
    <BrowserRouter>
     <Navbar/>
    <Routes>
    <Route path='/'  element={<Home/>}/> 
    <Route path='/Blog' element={<Blog/>}/>
     </Routes>
    <Footer/>
  </BrowserRouter>
    )
    };

export default App;
