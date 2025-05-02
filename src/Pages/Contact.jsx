import React from 'react'
import image from '../Assets/p5sec1Img1.jpg';
import { FaAngleRight } from "react-icons/fa6";
import sec13Img1 from '../Assets/sec13Img1.jpg';
function Contact() {
  return (

    <div className="max-cont">
           <div className='main-cont'>
      <section className='firstt'>
        <div className="text-container0">
          <h2 className='text-head'>Enhance your in-store shopping experience</h2>
          <p>Caper’s AI-powered smart shopping cart drives revenue and delights your customers.</p>
        </div>
        <div className="text-container1">
          <h2>Why choose Caper?</h2>
          <ul className='list'>
            <li>Increases sales vs traditional carts</li>
            <li>Improves affordability and promotion visibility for customers</li>
            <li>Generates high-margin ads revenue through the screen</li>
            <li>70+ NPS rating by customers who have used Caper Carts
            </li>
          </ul>
          <img src={image} alt="" />
        </div>
      </section>

      <section className='secondd'>
        <form action="" className='form'>
          <p className='head'>Book your demo today to learn more.</p>
          <div className="name-input">
            <input type="text" placeholder='First Name' />
            <input type="text" placeholder='Last Name' />
          </div>

          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Company' />
          <input type="text" placeholder='Country' />

          <textarea class="message-box" placeholder="Message"></textarea>


          <div class="checkbox-container">
            <input type="checkbox" id="news" class="custom-checkbox" />
            <label for="news">
              Please click here if you would like to receive news about our products and services, as well as other information that may be of interest to you.
            </label>
          </div>

          <button>Send inquiry<FaAngleRight /></button>
        </form>
      </section>


    
    </div>
     <section className='section-thirteen'>
        <div className="container">
          <div className="heading">
            <h2>Bringing Caper Carts to the masses</h2>
            <p>Caper can partner with businesses across North America, Europe, Asia and Australia. Book your demo today to learn more.
            </p>
          </div>
          <button>Book a Demo<span><FaAngleRight /></span></button>
          <div className="image">
            <img src={sec13Img1} alt="" />
          </div>
        </div>
      </section>
    </div>
   





  )
}

export default Contact



