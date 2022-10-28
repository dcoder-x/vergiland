import React from 'react'
import { Link } from 'react-router-dom'
import { Icons, images } from '../assets/assets'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="footer">
      <div class="column">
        {/* <img src={images.Logo2} alt="" /> */}
        <p>
          © 2022. VergilLandLimited <br />
          All rights reserved
        </p>
        <li class="socials">
          <a to=""
            ><img
              src={Icons.Facebook}
              alt="instagram"
              data-aos="fade-right"
          /></a>
          <a to=""
            ><img
              src={Icons.Instagram}
              alt="facebook"
              data-aos="fade-down"
          /></a>
          <a to=""
            ><img
              src={Icons.LinkedIn}
              alt="twitter"
              data-aos="fade-up"
          /></a>
          <a to=""
            ><img
              src={Icons.Twitter}
              alt="linkedIn"
              data-aos="fade-left"
          /></a>
        </li>
      </div>
      <div>
        <h4>Quick links</h4>
        {/* <p><a to="/">Home</a></p> */}
        <p><Link to="./services">Services</Link></p>
        <p><Link to="./partnership">Partnership</Link></p>
        <p><Link to="./training">Training</Link></p>
      </div>

      <div>
        <h4>Updates</h4>
        <p><Link to="./contact">Contact</Link></p>
        <p><Link to="./blog">Blog</Link></p>
        {/* <p><a to="./about.html">Download Documents</a></p> */}
      </div>

      <div>
        <h4>Info</h4>
        <p>
          help@Vegiland.com <br />
          +000 000 0000
        </p>
      </div>
    </div>
    {/* <p class="help">help@lcuna.com</p> */}
  </footer>
  )
}

export default Footer