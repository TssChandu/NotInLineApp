import React from 'react'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/HomeImg.png'
import call from '../assets/call.png'
import distance from '../assets/distance.png'
import person from '../assets/person.png'
import Anime from '../assets/home-anime.jpg'

const Home = () => {
   return (
      <div className='bg-container'>
         <div className='text-center d-flex justify-content-center align-items-center mob-bot-container' style={{ minHeight: "120px" }}>
            <img src={Anime} alt="home-img" className='home-img anime' />
            <Link to='/search' style={{ listStyleType: "none" }} className='mb-4'>
               <button className='form-btn me-4'> Search Hospitals </button>
            </Link>
         </div>
         <div className='d-flex justify-content-start mob-top-container'>
            <img src={HomeImg} alt="home-img" className='home-img' />
            <div className='d-flex flex-column justify-content-center align-items-center left-card'>
               <form className='text-center fill-card' >
                  <h5 className='text-center form-title'>Fill the details to get a call!</h5>
                  <div className='my-2 mob-input'>
                     <img src={person} alt="logo" className='form-img me-1' />
                     <input type='text' placeholder='Full Name' className='input' />
                  </div>
                  <div className='my-2 mob-input'>
                     <img src={call} alt="logo" className='form-img' style={{ width: "30px" }} />
                     <input type='number' placeholder='Phone Number' className='input' min={0} />
                  </div>
                  <div className='my-2 mob-input'>
                     <img src={distance} alt="logo" className='form-img' style={{ width: "30px" }} />
                     <input type='text' placeholder='Address' className='input' />
                  </div>
                  <div className='my-2'>
                     <input type='checkbox' className='me-3' />
                     <span style={{ fontSize: "12px" }}>By continuing, you agree to our T&C and privacy policy</span>
                  </div>
                  <div className='text-center d-flex justify-content-center w-100'><button className='form-btn'>PROCEED</button></div>
               </form>
            </div>
         </div>
      </div>
   )
}

export default Home