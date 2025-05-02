import React from 'react'
import Hero from '../Assets/HerosectionImg.jpg';
import sec2Img1 from '../Assets/Sec2Img1.jpg';
import sec2Img2 from '../Assets/Sec2Img2.jpg';
import sec2Img3 from '../Assets/Sec2Img3.jpg';
import sec3Img1 from '../Assets/Sec3Img1.jpg';
// import sec3Img2 from '../Assets/sec3Img2.jpg';
import sec3Img3 from '../Assets/sec3Img3.jpg';
import sec3Img4 from '../Assets/sec3Img4.jpg';
import sec3Img5 from '../Assets/sec3Img5.jpg';
import sec3Img6 from '../Assets/sec3Img6.jpg';
import sec3Img7 from '../Assets/sec3Img7.jpg';
import sec3Img8 from '../Assets/sec3Img8.jpg';
import sec3Img9 from '../Assets/sec3Img9.jpg';
import sec3Img10 from '../Assets/sec3Img10.jpg';
import { NavLink } from 'react-router-dom';
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleLeft } from "react-icons/fa6";
import sec5Img1 from '../Assets/sec5Img1.jpg';
import sec5Img2 from '../Assets/sec5Img2.jpg';
import sec5Img3 from '../Assets/sec5Img3.jpg';
import sec6Img1 from '../Assets/sec6Img1.jpg';
import sec8Img1 from '../Assets/sec8Img1.jpg';
import sec9Img1 from '../Assets/sec9Img1.jpg';
import sec10Img1 from '../Assets/sec10Img1.jpg';
import sec10li1 from '../Assets/10019.svg';
import sec10li2 from '../Assets/10020.svg';
import sec10li3 from '../Assets/10021.svg';
import sec10li4 from '../Assets/10022.svg';
import sec10li5 from '../Assets/10023.svg';
import sec10li6 from '../Assets/10024.svg';
import sec10li7 from '../Assets/10025.svg';
import sec10li8 from '../Assets/10026.svg';
import sec10li9 from '../Assets/10027.svg';
import sec10li10 from '../Assets/10028.svg';
import sec11Img1 from '../Assets/sec11Img1.png';
import sec11Img2 from '../Assets/sec11Img2.png';
import sec11Img3 from '../Assets/sec11Img3.png';
import sec11Img4 from '../Assets/sec11Img4.png';
import sec12Img0 from '../Assets/sec12Img0.svg';
import sec12Img1 from '../Assets/sec12Img1.jpg';
import sec12Img2 from '../Assets/sec12Img2.jpg';
import sec12Img3 from '../Assets/sec12Img3.jpg';
import sec12Img4 from '../Assets/sec12Img4.jpg';
import sec13Img1 from '../Assets/sec13Img1.jpg';
function Home() {
  return (
    <div className="main-container">
       <section className="hero-section">
        <div className="img">
          <img src={Hero} alt="" />
          <div className="text">
            <h1>Make Shopping Magic</h1>
            <button>Get Started</button>
            <button>Meet Caper Carts</button>
          </div>
        </div>
      </section>

      <section className='section-two'>
        <p>Deliver seamless and personalized in-store shopping</p>
        <div className="carts">
          <div className="cart1">
            <img src={sec2Img1} alt="" />
            <h3>Incremental consumer spend</h3>
            <ul>
              <li>Larger baskets during shops</li>
              <li>More frequent return trips</li>
              <li>Increased LTV of every customer</li>
            </ul>
          </div>
          <div className="cart2">
            <img src={sec2Img2} alt="" />
            <h3>Alternate revenue streams</h3>
            <ul>
              <li>Personalized, location-based and real-time contextual advertising</li>
              <li>Drive engagement and usage of digital coupons via onboard screen</li>

            </ul>
          </div>
          <div className="cart3">
            <img src={sec2Img3} alt="" />
            <h3>Seamless integration</h3>
            <ul>
              <li>Works with your existing POS system and loyalty program</li>
              <li>Provides easy access to cart monitoring tools to help prevent shrink</li>

            </ul>
          </div>
        </div>

      </section>
      <section className='section-three'>
        <h1>Caper in the media</h1>
        <div className="cards">
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              AI powered "Caper" shopping carts in grocery stores
            </div>
            <NavLink>
              <h3>Watch</h3>
            </NavLink>



          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Instacart's Smart Trolleys are Now Available at Coles Supermarkets in Australia
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              A new generation of shopping cart, with GPS and AI
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Schnucks and Instacart Expand Omnichannel Partnership with Smart Carts
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>

          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Future of retail: AI-powered shopping cart
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>

          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Instacart and ALDI SOUTH Group Expand Omnichannel Partnership
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Geissler’s supermarkets in Connecticut add A.I. powered shopping carts
            </div>
            <NavLink>
              <h3>Watch</h3>
            </NavLink>


          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Wakefern to Introduce New Smart Carts Powered by Instacart
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              New Wave of Local and Independent Grocers Adopt Instacart Caper Carts
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>
          <div className="card">
            <div className="image">
              <img src={sec3Img1} alt="" />
            </div>
            <div className="text">
              Instacart updates instore Caper Carts with ads
            </div>
            <NavLink>
              <h3>Read more</h3>
            </NavLink>


          </div>

        </div>
      </section> 
      <section className='section-four'>
        <div className="left">
          <h3>Field tested and proven</h3>
          <p>Live across 10+ retailers from majors to independents.</p>
        </div>
        <div className="right">
          <div className="one">
            <span>70+</span>
            <p>Net Promoter Score from customers*</p>
          </div>

          <div className="two">
            <span>Increase</span>
            <p>in basket size vs traditional cart usage</p>
          </div>

          <div className="three">
            <span>30min</span>
            <p>on average customer engages with the screen</p>
          </div>
        </div>
      </section>
      <section className="section-fifth">
        <div className="left">
          <h2>Unifying online and in-store for the best in grocery</h2>
          <button>Learn More About Caper Cart <span><FaAngleRight /></span></button>
          <div className="btns">
            <FaAngleLeft />
            <FaAngleRight />
          </div>
        </div>
        <div className="right">
          <div className="image">
            <img src={sec5Img1} alt="" />
            <img src={sec5Img2} alt="" />
            <img src={sec5Img3} alt="" />
          </div>
        </div>
      </section>
      <section className="section-sixth">
        <h2>What makes shopping magic? The Caper screen</h2>
        <p>Caper goes far beyond seamless checkout with a screen that captivates and engages your shoppers.</p>
        <div className="container">
          <div className="left">
            <div className='dropdown'>
              <p>Personalization<span><FaAngleDown /></span></p>
            </div>
            <div className='dropdown'>
              <p>Advertising<span><FaAngleDown /></span></p>
            </div>
            <div className='dropdown'>
              <p>Gamification<span><FaAngleDown /></span></p>
            </div>
            <div className='dropdown'>
              <p>Loyalty Program Utilization<span><FaAngleDown /></span></p>
            </div>
            <div className='dropdown'>
              <p>Instacart Integration <span><FaAngleDown /></span></p>
            </div>

          </div>
          <div className="right">
            <img src={sec6Img1} alt="" />
          </div>
        </div>
      </section>
      <section className="section-seven">red</section>
      <section className="section-eight">
        <div className="container">
          <div className="left">
            <img src={sec8Img1} alt="" />
          </div>
          <div className="right">
            <h2>Plug and play with Caper</h2>
            <p>Caper integrates into existing operations and customer patterns, enabling fast deployment and scaling at your pace.</p>
            <button>Learn More About Caper Cart <span><FaAngleRight /></span></button>
          </div>
        </div>

      </section>
      <section className="section-nine">
        <div className="left">
          <h2>Anti-theft and operational capabilities</h2>
          <p>Caper Tooling is a cloud-based application that empowers retailers with the tools and insights to efficiently operationalize Caper Carts at scale.</p>
          <div className="container">
            <ul>
              <li>Cart Verification Tools to help prevent shrink</li>
              <li>Cart Management for status and asset tracking</li>
            </ul>
            <ul>
              <li>Notification Center & Task Based Alerts for flexible store operations</li>
              <li>Reporting & Analytics to help drive successful programs (coming soon)</li>
            </ul>
          </div>
        </div>
        <div className="right">
          <img src={sec9Img1} alt="" />
        </div>
      </section>
      <section className="section-ten">
        <div className="container">
          <div className="left">
            <img src={sec10Img1} alt="" />
          </div>
          <div className="right">
            <h2>Advanced technology to transform the in-store experience</h2>
            <div className="second-container">
              <ul>
                <li>
                  <img src={sec10li1} alt="" />
                  Sensor fusion with AI integration
                </li>
                <li>
                  <img src={sec10li2} alt="" />
                  All-day battery</li>
                <li>
                  <img src={sec10li3} alt="" />
                  Weights and measures for loss prevention
                </li>
                <li>
                  <img src={sec10li4} alt="" />
                  Loyalty integration capabilities</li>
                <li>
                  <img src={sec10li5} alt="" />
                  Order Ahead integration with FoodStorm</li>
              </ul>
              <ul>
                <li>
                  <img src={sec10li6} alt="" />
                  Instant CV Camera recognitions</li>
                <li>
                  <img src={sec10li7} alt="" />
                  Weather resistant</li>
                <li>
                  <img src={sec10li8} alt="" />
                  Sync shopping lists
                </li>
                <li>
                  <img src={sec10li9} alt="" />
                  Customized ads & digital coupons</li>
                <li>
                  <img src={sec10li10} alt="" />
                  Nested charging</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className='section-eleven'>
        <div className="container">
          <div className="heading">
            <h2>Getting started with Caper Carts is easy</h2>
            <p className='text'>Our team helps you every step of the way.</p>
          </div>
          <div className="carts">
            <div className="cart">
              <img src={sec11Img1} alt="" />
              <p className='step'>Step1</p>
              <h3>Meet with our team</h3>
              <p>Explore your unique needs and requirements, and how Caper Carts can meet them.</p>
            </div>
            <div className="cart">
              <img src={sec11Img2} alt="" />
              <p className='step'>Step2</p>
              <h3>Integrate your systems</h3>
              <p>Connect Caper to your POS, loyalty and other important systems.</p>
            </div>
            <div className="cart">
              <img src={sec11Img3} alt="" />
              <p className='step'>Step3</p>
              <h3>Prepare your launch</h3>
              <p>Train your team, install in-store signage and receive your Caper Carts.</p>
            </div>
            <div className="cart">
              <img src={sec11Img4} alt="" />
              <p className='step'>Step4</p>
              <h3>Caper Carts live!</h3>
              <p>Congratulations! Watch your revenue and customer satisfaction grow.</p>
            </div>

          </div>
          <button>Book Demo<span><FaAngleRight /></span></button>
        </div>

      </section>

      <section className='section-twelve'>
        <div className="one">
          <div className="left">
            <img src={sec12Img0} alt="" />
            <h2>Your stores. <br />
              Our technology.</h2>
            <p>
              Caper seamlessly connects to multiple Instacart Platform enterprise-grade tools and products. Customers can order made-to-order deli items directly from the carts powered by FoodStorm, Instacart’s order management solution.
              And they can sync shopping lists to Caper created in in-store mode, which turns retailers’
              apps into companions when customers shop in stores.
            </p>
            <p>Learn more about related Instacart Platform technology below.</p>
          </div>
          <div className="right">
            <img src={sec12Img1} alt="" />
          </div>
        </div>


        <div className="two">
          <img src={sec12Img2} alt="" />
          <img src={sec12Img3} alt="" />
          <img src={sec12Img4} alt="" />
        </div>
      </section>
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
      <section className='section-fourteen'></section>
      <section className='section-fifteen'>
        <h2>Transform your shopping experience</h2>
        <p>Reduce wait times, drive revenue and delight your customers with Caper Carts.</p>
         <button>Book a Demo<span><FaAngleRight /></span></button>
      </section>
    </div>
  )
}


export default Home;