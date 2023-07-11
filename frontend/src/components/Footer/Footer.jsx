import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import payment from '../../assets/images/payment.png'
import appStore from '../../assets/images/app_store.png'
import ggPlay from '../../assets/images/gg_play.png'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <footer className='footer off-white-bg2 pt-95 bdr-top pt-sm-55'>
      {/* footer top start */}
      <div className="footer-top">
        <div className='container'>
          {/* Signup Newsletter Start */}
          <div className="subcribe-by-email row mb-60 d-flex justify-content-center">
            <div className="content col-xl-7 col-lg-7 ml-auto mr-auto col-md-8">
              <div className="news-desc text-center mb-30">
                <h3>Sign Up For Newsletters</h3>
                <p>Be the First to Know. Sign up for newsletter today</p>
              </div>
              <div className="newsletter-box">
                <form action='#'>
                  <input className='subscribe' placeholder='Your email address' name="email" type='text' id='subscibe' />
                  <button type='submit' className='submit'>Subscribe!</button>
                </form>
              </div>
            </div>
          </div>
          {/* Signup Newsletter End */}

          <div className="row">
            {/* Information */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer mb-sm-40">
                <h3 className="footer-title">Information</h3>
                <div className="footer-content">
                  <ul className="footer-list">
                    <Link className='link' to='/infor'><li>About Us</li></Link>
                    <Link className='link' to='/infor'><li>Delivery Information</li></Link>
                    <Link className='link' to='/infor'><li>Privacy Policy</li></Link>
                    <Link className='link' to='/infor'><li>Terms & Conditions</li></Link>
                    <Link className='link' to='/infor'><li>FAQs</li></Link>
                    <Link className='link' to='/infor'><li>Return Policy</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* Information End */}


            {/* Customer Service */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer mb-sm-40">
                <h3 className="footer-title">Customer Service</h3>
                <div className="footer-content">
                  <ul className="footer-list">
                    <Link className='link' to='/infor'><li>Contact Us</li></Link>
                    <Link className='link' to='/infor'><li>Returns</li></Link>
                    <Link className='link' to='/infor'><li>Order History</li></Link>
                    <Link className='link' to='/infor'><li>Wish List</li></Link>
                    <Link className='link' to='/infor'><li>Site Map</li></Link>
                    <Link className='link' to='/infor'><li>Gift Certificates</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* Customer Service End */}

            {/* Extras */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer mb-sm-40">
                <h3 className="footer-title">Extras</h3>
                <div className="footer-content">
                  <ul className="footer-list">
                    <Link className='link' to='/infor'><li>Newsletter</li></Link>
                    <Link className='link' to='/infor'><li>Brands</li></Link>
                    <Link className='link' to='/infor'><li>Gift Certificates</li></Link>
                    <Link className='link' to='/infor'><li>Affiliate</li></Link>
                    <Link className='link' to='/infor'><li>Specials</li></Link>
                    <Link className='link' to='/infor'><li>Site Map</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* Extras End */}

            {/* My Account */}
            <div className="col-lg-2 col-md-4 col-sm-6">
              <div className="single-footer mb-sm-40">
                <h3 className="footer-title">My Account</h3>
                <div className="footer-content">
                  <ul className="footer-list">
                    <Link className='link' to='/infor'><li>Contact Us</li></Link>
                    <Link className='link' to='/infor'><li>Returns</li></Link>
                    <Link className='link' to='/infor'><li>My Account</li></Link>
                    <Link className='link' to='/infor'><li>Order History</li></Link>
                    <Link className='link' to='/infor'><li>Wish List</li></Link>
                    <Link className='link' to='/infor'><li>Newsletter</li></Link>
                  </ul>
                </div>
              </div>
            </div>
            {/* My Account End */}

            {/* Address */}
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="single-footer mb-sm-40">
                <h3 className="footer-title">Address</h3>
                <div className="footer-content">
                  <ul className="footer-list address-content">
                    <li><HomeIcon className='item-icon' /> Address: 169-C, Technohub, Dubai Silicon Oasis.</li>
                    <li><MailIcon className='item-icon'/> mail Us: Support@truemart.com</li>
                    <li>
                      <LocalPhoneIcon className='item-icon'/> Phone: (+800) 123 456 789)
                    </li>
                  </ul>
                  <div className="payment">
                    <img src={payment} className='img' alt='payment-img' />
                  </div>
                </div>
              </div>
            </div>
            {/* Address End */}

          </div>
          {/* row end */}
        </div>
        {/* container end */}
      </div>
      {/* footer top end */}

      {/* footer middle start */}
      <div className="footer-middle text-center">
        <div className="container">
          <div className="footer-middle-content pt-20 pb-30">
            <div className="social-footer">
              <FacebookIcon />
              <TwitterIcon />
              <GoogleIcon />
              <LinkedInIcon />
              <img src={ggPlay} />
              <img src={appStore} />
            </div>
          </div>
        </div>
      </div>
      {/* footer middle end */}

      {/* footer bottom start */}
      <div className="footer-bottom pb-30">
        <div className="container">
          <div className="copyright-text text-center pt-30">
            <p>Code by TinhTran @2023</p>
          </div>
        </div>
      </div>
      {/* footer bottom end */}
    </footer>
  )
}

export default Footer