import React, { useEffect, useRef, useState } from 'react'
import {Icon} from '@iconify/react';
import { Icons, images, partners } from '../assets/assets'
import '../styles/home.css'
import { services } from '../data/services';
import { values } from '../data/values';
import { useNavigate } from 'react-router';
import bgvid from '../assets/videos/vedgiland.mp4'

const Home = () => {
    const navigate = useNavigate()
    const vidRef=useRef();

    useEffect(() => { vidRef.current.play(); },[]);


  return (
    <main id='home'>
        <section className='heroSection'>
            <video src={bgvid} ref={vidRef} muted autoPlay controls={false} loop className='bg-video'>
            </video>
            <div className="heroText">
                <div className="logoText">
                    <h1 style={{color:'#48B760'}} >
                        VEDGI
                    </h1>
                    <h1 style={{color:'rgba(59, 79, 79, 1)'}}>
                        LAND
                    </h1>
                </div>
                <p className="subtext">
                Nutrition. Yes! Nutrition!
                </p>
                <p className="info">
                Vedgiland engages in the production of fruit and leafy vegetables, poultry and other products with controlled farming systems. The main concept of the business is to contribute to food security and nutrition through the production of Fruit and leafy vegetables, such as tomatoes, chilies, onions, production of herbs such as mint, oregano and so on. Also the production of carbohydrates such as grains and tubers like potatoes as well as the production of proteins such as poultry, rabbits and insects farming
                </p>
                <button className="action-btn" onClick={e=>{navigate('/services')}}>
                    Read more
                </button>
            </div>
            <div className="hero-image">
            </div>
        </section>
        <section className="intro become">
            <div className="intro-text">
                <h2 className="intro-title">
                    Join us today
                </h2>
                <p className='subtitle'>
                Current capacity is at 62,000 square meters of greenhouses 
                with output capacity in excess of 2,000 metric tons of fruit 
                and leafy vegetable per annum. Please see aerial video of farm 
                here for reference. We look towards a future farm that has about 
                500,000 square meters of greenhouses, and 720,000 per cycle production 
                capacity of poultry, and 1 Million Cubic Meters of Biogas, 
                7,300 tons of rabbit carcass per annum, 17,000 
                crates of eggs daily. The project requires about 80,000,000 USD, 
                Eighty Million United States Dollars to reach its peak of productivity on a 
                period of 6 years growth plan. This creates opportunities for 
                interested partners, sponsors, angel investors, VC, governments 
                and high net worth individuals to collaborate 
                on this mega project with huge profit and growth potential.
                </p>
                <button className="action-btn" onClick={e=>{navigate('/partnership')}}>
                    Become a partner
                </button>
            </div>
            <iframe  className='video' src="https://www.youtube.com/embed/-LMxoET8_4Y" title="Vedgiland" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            
        </section>
        <section className="services">
            <div className="section-title">
                <h1>
                    Services
                </h1>
            </div>
            <p className="subtitle">
                Vedgiland engages in the production of fruit and leafy vegetables, poultry and other products with controlled farming systems. The main concept of the business is to contribute to food security and nutrition through the production of Fruit and leafy vegetables, such as tomatoes, chilies, onions, production of herbs such as mint, oregano and so on. Also the production of carbohydrates such as grains and tubers like potatoes as well as the production of proteins such as poultry, rabbits and insects farming
            </p>
            <div className='service-holder'>
                {
                    services.map(service=>{
                        return(
                            <div className="service">
                            <img src={service.icon} alt="" className="icon" />
                            <p className="serviceName">
                                {service.name}
                            </p>
                            <p className="subtext">
                                {service.subtext}
                            </p>
                            <button className='action-btn' onClick={e=>{navigate('/services')}}>
                                Learn more
                            </button>
                        </div> 
                        )
                    })
                }

            </div>
        </section>
        <section className="coreValues">
            <div className="section-title">
                <div className="icon">

                </div>
                <h1>
                    OUR CORE VALUES
                </h1>
            </div>
            <div className="values">
                {
                    values.map((value,index)=>{
                        return(
                            <div className="value">
                                <div className="number">
                                    <img src={value.number} alt="" />
                                </div>
                                <div className="text">
                                    <div className="title">
                                        {
                                            value.title
                                        }
                                    </div>
                                    {/* <p className="desc">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Exercitationem necessitatibus quo, perspiciatis saepe 
                                        numquam provident explicabo laudantium voluptas, quod id.
                                    </p> */}
                                </div>
                            </div> 
                        )
                    })
                }

            </div>
        </section>
        <section className="purpose">
            <div className="header">
                <h1>
                    Our Mission and Purpose
                </h1>
            </div>
                <li className="mission">
                    <h1 className="title">
                        MISSION
                    </h1>
                    <p className="desc">
                    The Mission is to contribute immensely to food security 
                    and nutrition through Agricultural Real Estate of 
                    modern technologies and methodologies. 
                    </p>
                </li>
                <li className="vision">
                    <h1 className="title">
                        VISION
                    </h1>
                    <p className="desc">
                    The Vision is to make profiting from agriculture easier and 
                    more consistent for all and sundry without limitation by 
                    boundaries, time, space, skill, social or financial status. 
                    </p>
                </li>
        </section>
        <section className="events">
            <div className="section-title">
                <div className="icon">

                </div>
                <h1>
                    Events
                </h1>

            </div>
            <p className="subtitle">
            Currently, there are no upcoming event. Subscribe to our news letter to get updates on all events.
            </p>
            <div className="event-img">

            </div>
            <div class="event-footer">
            <div>
                <h4>Past events</h4>
                {/* <p><a href="./about.html">Harvest</a></p>
                <p><a href="./about.html">Lecture</a></p> */}
            </div>

            <div>
                <h4>Upcoming</h4>
                <p><a href="./about.html">coming soon</a></p>
                {/* <p><a href="./about.html">Download</a></p> */}
            </div>

            <div>
                {/* <h4>Venue</h4>
                <p>
                Vegiland ventures <br />
                Oakland street
                </p> */}
            </div>
            </div>
            <button className='action-btn'>
                view more
            </button>
        </section>
        <section className="our-partners">
            <div className="section-title">
                <div className="icon">

                </div>
                <h1>
                    Partners
                </h1>

            </div>
            <p className="subtitle">
            With a Mission and Vision as compelling as ours we can not achieve it by depending on just our strength, hence the reason why we are in Partnership with this Reputable and Exceptional Companies.
            </p>
            {/* <div className="partners">
                {
                    partners.map(partner=>{
                        return(
                            <img className='partner' src={partner} alt="" />
                        )
                    })
                }
            </div> */}
            <button className='action-btn' onClick={e=>{navigate('partnership')}}>
                Learn more
            </button>
        </section>
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

export default Home