import React, { useState } from 'react'
import image from '../Assests/P2sec1Img1.jpg';
import sec2Img1 from '../Assests/Sec2Img1.jpg';
import sec2Img2 from '../Assests/Sec2Img2.jpg';
import sec2Img3 from '../Assests/Sec2Img3.jpg';
import P2sec3Img1 from '../Assests/P2sec3Img1.jpg';
import P2sec3Img2 from '../Assests/P2sec3Img2.jpg';
import P2sec3Img3 from '../Assests/P2sec3Img3.jpg';
import P2sec3Img4 from '../Assests/P2sec3Img4.jpg';
import P2sec4Img1 from '../Assests/P2sec4Img1.jpg';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleRight } from 'react-icons/fa6';
import P2sec5Img1 from '../Assests/P2sec5Img1.jpg';
import P2sec8Img1 from '../Assests/P2sec8Img1.jpg';

function SmartCart() {
  const [toggle, settToggle] = useState();


  return (
    <div className="maincontainer">
      <section className="one">
        <div className='image'>
        <img src={image} alt="" />
        <h3>The future of shopping carts is here</h3>
        </div>
        <div className="carts">
          <div className="cart">
            <h2 className='heading'>+$</h2>
            <p>increased basket size*</p>
          </div>
          <div className="cart">
            <h2 className='heading'>70+</h2>
            <p>Net Promoter Score*</p>
          </div>
          <div className="cart">
            <h2 className='heading'>~18%</h2>
            <p>faster in-store experience*</p>
          </div>
        </div>
      </section>

      <section className='p2section-two'>
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

      <section className='p2section-three'>
        <div className="container">
          <div className="heading">
            <h2>Make shopping seamless for your customers</h2>
          </div>
          <div className="carts">
            <div className="cart">
              <img src={P2sec3Img1} alt="" />
              <p className='step'>Step1</p>
              <h3>Start shopping</h3>
              <p>Simply grab a cart and go (no app download necessary).</p>
            </div>
            <div className="cart">
              <img src={P2sec3Img2} alt="" />
              <p className='step'>Step2</p>
              <h3>Add items</h3>
              <p>Place or weigh items in the cart to add to your basket.</p>
            </div>
            <div className="cart">
              <img src={P2sec3Img3} alt="" />
              <p className='step'>Step3</p>
              <h3>Pay & go</h3>
              <p>Pay for your items on the cart and leave the store.</p>
            </div>
            <div className="cart">
              <img src={P2sec3Img4} alt="" />
              <p className='step'>Step4</p>
              <h3>Digital receipts</h3>
              <p>Receive your digital receipt via text or email.</p>
            </div>

          </div>
        </div>

      </section>

      <section className='p2section-four'>
        <div className="con">
          <div className="heading">
            <h2>What makes shopping magic? The Caper screen</h2>
            <p>One of the most common misconceptions about smart carts is that they are just an alternative to self-checkout. However, the real magic behind Caper Carts is in our digital screen.
              By syncing Caper Carts with the Instacart </p>
          </div>

          <div className="container1">
            <div className="onee">
              <div className="dropdown">
                <ul>
                  <li>
                    <h5>Personalization <span className='aero'><FaAngleDown /></span></h5>
                    <div className="text">
                      By syncing Caper Carts with the Instacart App or retailers’ Storefront Pro-powered apps, customers can seamlessly import their shopping and “Buy It Again”
                      lists directly to the cart – which automatically checks off items as they’re added.
                    </div>
                  </li>
                  <li>
                    <h5>Advertising <span className='aero'><FaAngleDown /></span></h5>
                    <div className="text">
                      On average, customers spend more than 30 minutes shopping in-store with a Caper Cart, and are highly engaged with the screen as they decide what to drop in or remove.
                      Capture this captive audience with ads on the Caper screen.
                    </div>
                  </li>
                  <li>
                    <h5>Gamification  <span className='aero'><FaAngleDown /></span></h5>
                    <div className="text">
                      Customers tell us shopping with a Caper Cart feels like an adventure – they love the cart’s lights and sounds, which is especially appealing to families shopping. Today, customers can spin Caper Carts’ gamified coupon wheel
                      for a chance to win discounts and dollars off right before checkout.
                    </div>
                  </li>
                </ul>
                <button>Book a Demo<span ><FaAngleRight /></span></button>
              </div>

            </div>

            <div className="two">
              <img src={P2sec4Img1} alt="" />
            </div>
          </div>
        </div>

      </section>

      <section className='p2section-five'>
        <h2>Introducing Caper M3 and M3 Scan</h2>
        <div className="container2">
          <div className="left">
            <h5>Caper M3</h5>
            <p>Cutting-edge item recognition and seamless customer experience.</p>
            <div className="image">
              <img src={P2sec5Img1} alt="" />
            </div>
          </div>
          <div className="right">
            <h5>Caper M3 Scan</h5>
            <p>Reliable product performance and convenience in a lower-priced package.</p>
            <div className="image">
              <img src={P2sec5Img1} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className='p2section-six'></section>

      <section className='p2section-seven'>
        ok
      </section>
      <section className='p2section-eight'>
        <div className="container">
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
          <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
        </div>
      </section>

      <section className='p2section-nine'>
        <div className="container">

          <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
        </div>
      </section>
      <section className='p2section-ten'>
        <div className="container">
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
          <div className="right">
            <h2>Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
        </div>
      </section>
      <section className='p2section-eleven'>
        <div className="container3">

          <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
        </div>
      </section>
      <section className='p2section-twelve'>
        <div className="container4">
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
          <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
        </div>
      
      </section>
      <section className='p2section-thriteen'>
      <div className="container">
        <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
        </div>
      </section>
      <section className='p2section-fourteen'>
      <div className="container">
      <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
        <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
        </div>
      </section>
      <section className='p2section-fifteenn'>
      <div className="container">
        <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
          <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
        </div>
      </section>
      <section className='p2section-sixteen'>
      <div className="container">
      <div className="left">
            <img src={P2sec8Img1} alt="" />
          </div>
        <div className="right">
            <h2> Recognizes items instantly</h2>
            <p>Customers place items naturally in the cart and
              AI instantly recognizes what has been added or removed.</p>
          </div>
          
        </div>
      </section>
      <section className="p2section-seventeen">

      </section>

      <section className='p2section-eighteen'>
              <h2>Transform your shopping experience</h2>
              <p>Reduce wait times, drive revenue and delight your customers with Caper Carts.</p>
               <button>Book a Demo<span><FaAngleRight /></span></button>
            </section>
    </div>
  )
}

export default SmartCart