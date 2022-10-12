import { Icon } from '@iconify/react'
import React from 'react'
import { images } from '../assets/assets'
import Hero from '../component/Hero'
import '../styles/contact.css'
const Contact = () => {
  return (
    <main id="contact">
        <Hero 
            title={'Contact Us'}
            image={images.contact}
            btn={'Contact us now'}
        />
        <section className='contact'>
            <div className="section-title">
                <div className="icon">

                </div>
                <h1>
                    Contact Us
                </h1>

            </div>
            <section className="contact-holder">

                <form action="">
                    <input type="email" name='' id='' placeholder='Email'/>
                    <input type="text" placeholder='Title' name="" id="" />
                    <input type="text" placeholder='Subject' name="" id="" />
                    <input type="text" placeholder='Message' name="" id="" className='message' />
                    <button className='action-btn'>
                        Submit
                    </button>
                </form>
                <div className="map">
                    <div className="address">
                        <div className="icon">

                        </div>
                        <div className="address-holder">
                            <h1>
                                Vegiland
                            </h1>
                            <div className='phone'>
                                <Icon color='#48b760' icon="carbon:phone-filled" width={30} />
                                <p>
                                    +2347057094393
                                </p>
                            </div>
                            <div className='phone'>
                                <Icon color='#48b760' icon="carbon:location-filled" width={30} />
                                <p>
                                    2972 Westheimer Rd. Santa Ana, Illinois 85486 
                                </p>
                            </div>
                        </div>
                        <img src={images.address} className="addressImg" alt="" />
                    </div>
                </div>
            </section>
        </section>
    </main>
  )
}

export default Contact