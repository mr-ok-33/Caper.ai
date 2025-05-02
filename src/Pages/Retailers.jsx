import React from 'react'
import p3sec1Img1 from "../Assets/p3sec1Img1.jpg";
import p3sec1Img2 from "../Assets/p3sec1Img2.jpg";
import p3sec1Img3 from "../Assets/p3sec1Img3.jpg";
import p3sec1Img4 from "../Assets/p3sec1Img4.jpg";
import p3sec1Img5 from "../Assets/p3sec1Img5.jpg";
import p3sec1Img6 from "../Assets/p3sec1Img6.jpg";
import sec2Img1 from '../Assets/Sec2Img1.jpg';
import sec2Img2 from '../Assets/Sec2Img2.jpg';
import sec2Img3 from '../Assets/Sec2Img3.jpg';
import p5sec5Img1 from '../Assets/p5sec5Img1.jpg';
import p5sec5Img2 from '../Assets/p5sec5Img2.jpg';
import p5sec5Img3 from '../Assets/p5sec5Img3.jpg';
import p5sec5Img4 from '../Assets/p5sec5Img4.jpg';
import sec9Img1 from '../Assets/sec9Img1.jpg';
import sec10Img1 from '../Assets/sec10Img1.jpg';
import sec10li1 from '../Assets/10019.svg';
import sec10li2 from '../Assets/10020.svg';
import { FaAngleRight } from "react-icons/fa6";
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
function Retailers() {
  return (
    <div className='main-container'>
      <section className="p3section-one">
        <img src={p3sec1Img1} alt="" />
        <div className="text">
          <h1> Generate more sales while saving money with AI</h1>
        </div>
      </section>

      <section className="p3section-two">
        <div className="container">
          <h3>Trusted by the best in grocery</h3>
          <div className="images">
            <img src={p3sec1Img2} alt="" />
            <img src={p3sec1Img3} alt="" />
            <img src={p3sec1Img4} alt="" />
            <img src={p3sec1Img5} alt="" />
            <img src={p3sec1Img6} alt="" />
          </div>
        </div>
      </section>

      <section className='p4section-three'>
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

      <section className='p4section-four'>
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

    <section className='p5section-five'>
      <div className="container">
      <h2>How Caper works for retailers</h2>
        <div className="one1">
          <div className="first">
            <div className="heading">
            <img src={p5sec5Img1} alt="" />
            <h3 className='head'>Advanced hardware</h3>
            </div>
            <ul>
              <li>2x cart models to fit your unique requirements</li>
              <li>AI-powered computer vision cameras for barcode and key feature extraction for scanning</li>
              <li>Flexible charging options with mobile or fixed charging stations</li>
              <li>Optional bottom shelf attachment to better fit into existing operations</li>
            </ul>
          </div>
          <div className="second">
            <div className="heading">
            <img src={p5sec5Img2} alt="" />
            <h3 className='head'>User experience</h3>
            </div>
            
            <ul>
              <li>In-store signage best practices for customer education</li>
              <li>No app download or login needed to use a Caper Cart</li>
              <li>Integrated system for weighted items built into the basket</li>
              <li>On-board payment system and digital receipts</li>
            </ul>
          </div>
        </div>


        <div className="one1">
        <div className="first">
           <div className="heading">
           <img src={p5sec5Img3} alt="" />
           <h3>Digital ecosystem</h3>
           </div>
            <ul>
              <li>Gamification capabilities to instantly engage shoppers</li>
              <li>Personalized and dynamic recommendations primed to drive conversion</li>
              <li>Advertise on the Caper screen to unlock new revenue streams</li>
              <li>Remote management via Caper’s Cart Manager tool</li>
              <li>Audit features to trigger basket review to assist in loss prevention</li>
            </ul>
          </div>
          <div className="second">
            <div className="heading">
            <img src={p5sec5Img4} alt="" />
            <h3>Operations and training</h3>
            </div>
            <ul>
              <li>Integrations with leading point-of-sale platforms</li>
              <li>Caper Carts fit into your existing operations with no or minimal store modifications needed</li>
              <li>Store team training to provide staff with all the resources needed for a successful launch</li>
              <li>Dedicated “Caper Checkout Lane” to improve customer satisfaction</li>
            </ul>
          </div>
        </div> 
      </div>
       
    </section>
    <section className="p3section-six">
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
             <section className="p3section-ten">
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

                    <section className='p3section-eleven'>
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



                       <section className='p3section-fifteen'>
                              <h2>Transform your shopping experience</h2>
                              <p>Reduce wait times, drive revenue and delight your customers with Caper Carts.</p>
                               <button>Book a Demo<span><FaAngleRight /></span></button>
                            </section>


    </div>
  )
}

export default Retailers