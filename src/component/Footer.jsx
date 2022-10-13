import React from 'react'
import { Icons, images } from '../assets/assets'
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer>
    <div class="footer">
      <div class="column">
        <img src={images.Logo2} alt="" />
        <p>
          © 2022. VergilLandLimited <br />
          All rights reserved
        </p>
        <li class="socials">
          <a href=""
            ><img
              src={Icons.Facebook}
              alt="instagram"
              data-aos="fade-right"
          /></a>
          <a href=""
            ><img
              src={Icons.Instagram}
              alt="facebook"
              data-aos="fade-down"
          /></a>
          <a href=""
            ><img
              src={Icons.LinkedIn}
              alt="twitter"
              data-aos="fade-up"
          /></a>
          <a href=""
            ><img
              src={Icons.Twitter}
              alt="linkedIn"
              data-aos="fade-left"
          /></a>
        </li>
      </div>
      <div>
        <h4>Company</h4>
        <p><a href="./about.html">About Us</a></p>
        <p><a href="./about.html">Media</a></p>
        <p><a href="./about.html">FAQ</a></p>
        <p><a href="./about.html">History</a></p>
      </div>

      <div>
        <h4>Links</h4>
        <p><a href="./about.html">Contact</a></p>
        <p><a href="./about.html">Download Documents</a></p>
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