import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './register';
import UserCard from './userCard';
import pic1 from './images/matthew.png';
import pic2 from './images/kristy.png';
import pic3 from './images/mohit.jpg';
import Navbar from './navbar';
import Header from './header';
import Footer from './footer';
import AllCourses from './allCourses';
import Home from './home';

const App = () => {
  return(
    <BrowserRouter>
    <div className='App'>
      <Header/>
      <Navbar/>
      <div className='content'>
        <Routes>
        <Route path="/register" element={<Register/>} />
        <Route path="/courses" element={<AllCourses/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="" element={<Home/>} />
        </Routes>
      </div>
      </div>
      
    {/* <div className='ui five column grid'>
      <UserCard name = 'Aakash Kumar' date='Joined in 2015' description=' Aakash Kumar is an art director living in New York.' image={pic1}/>
      <UserCard name = 'Simran Sirari' date='Joined in 2015' description=' Simran Sirari is a musician living in Las Vegas.' image={pic2}/>
      <UserCard name = 'Ashish Gupta' date='Joined in 2016' description=' Ashish Gupta is a software developer living in MP.' image={pic3}/>
      <UserCard name = 'Ria Narayanan' date='Joined in 2014' description=' Ria Narayanan is a social activist living in Washington DC.' image={pic2}/>
      <UserCard name = 'Mohit Pandey' date='Joined in 2015' description=' Mohit Pandey is an art director living in New York.' image={pic3}/>
    </div> */}
    
    <Footer/>
    </BrowserRouter>
  )
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
)