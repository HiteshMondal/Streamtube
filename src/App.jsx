import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import {Routes, Route, useNavigate} from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import SearchResults from './pages/SearchResults/SearchResults';
import Programming from './pages/Programming/Programming';
import Linux from './pages/Linux/Linux';
import Navbar from './components/Navbar/Navbar'
import Culture from './pages/Culture/Culture';
import Vlogs from './pages/Vlogs/Vlogs';
import TermsOfUse from './pages/TermsOfUse/TermsOfUse';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';


const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [homeData, setHomeData] = useState([]);
  const searchQuery = new URLSearchParams(location.search).get('query') || "";
  useEffect(() => {
    onAuthStateChanged(auth, async(user)=>{
      if(user){
        console.log("Logged Successfully");
        navigate("/");
      }else{
        console.log("Logged Out");
        navigate("/login");
       }
   })
  }, [])

  return (
  <div>
    <ToastContainer theme='dark' />
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login />}/>
      <Route path='/player/:id' element={<Player />}/>
      <Route path="/programming" element={<Programming />}/>
      <Route path='/linux' element={<Linux />} />
      <Route path="/culture" element={<Culture />} />
      <Route path="/vlogs" element={<Vlogs />} />
      <Route path="/terms" element={<TermsOfUse />} />
      <Route
        path="/search"
        element={<SearchResults searchQuery={searchQuery} homeData={homeData} />}
      />
    </Routes>
  </div>
  )
}

export default App
