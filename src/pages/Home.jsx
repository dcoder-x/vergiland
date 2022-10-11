import React from 'react'
import { Icon } from '@iconify/react';
import { Icons, images, partners } from '../assets/assets'
import '../styles/home.css'
import { services } from '../data/services';
import { values } from '../data/values';

const Home = () => {
  return (
    <main id='home'>
        <section className='heroSection'>
            <div className="heroText">
                <div className="logoText">
                    <h1 style={{color:'#48B760'}} >
                        VERGIL
                    </h1>
                    <h1 style={{color:'black'}}>
                        LAND
                    </h1>
                </div>
                <p className="subtext">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis,
                </p>
                <p className="info">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Maxime doloremque aspernatur officia voluptates vel 
                    praesentium sapiente rem, earum dolor. Odit sequi accusamus 
                </p>
                <button className="action-btn">
                    Contact us
                </button>
            </div>
            <div className="hero-image">
                <div className="bg">

                </div>
                <img src={images.hero} alt="" />
            </div>
        </section>
        {/* <section className="purpose">
            <div className="header">
                <h1>
                    Our Mission and Purpose
                </h1>
            </div>
            <section className="sections">
                <li className="mission">
                    <h1 className="title">
                        MISSION
                    </h1>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy
                    </p>
                </li>
                <li className="vision">
                    <h1 className="title">
                        VISION
                    </h1>
                    <p className="desc">
                        Lorem Ipsum is simply dummy text of the printing 
                        and typesetting industry. Lorem Ipsum has been the 
                        industry's standard dummy
                    </p>
                </li>
            </section>
        </section> */}
        <section className="services">
            <div className="section-title">
                <div className="icon">

                </div>
                <h1>
                    Services
                </h1>
            </div>
            <p className="subtitle">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book.
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
                            <button className='action-btn'>
                                Learn more
                            </button>
                        </div> 
                        )
                    })
                }

            </div>
            <div className="event">
                <div className="header">
                    <div className="title">

                    </div>
                </div>
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
                                    <p className="desc">
                                        {/* {
                                            value.desc
                                        } */}
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                        Exercitationem necessitatibus quo, perspiciatis saepe 
                                        numquam provident explicabo laudantium voluptas, quod id.
                                    </p>
                                </div>
                            </div> 
                        )
                    })
                }

            </div>
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
                printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <div className="partners">
                {
                    partners.map(partner=>{
                        return(
                            <img className='partner' src={partner} alt="" />
                        )
                    })
                }
            </div>
            <button className='action-btn'>
                Learn more
            </button>
        </section>
        <section className="contact">

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
                            <Icon icon="carbon:phone-filled" width={30} />
                            <p>
                                +2347057094393
                            </p>
                        </div>
                        <div className='phone'>
                            <Icon icon="carbon:location-filled" width={30} />
                            <p>
                                2972 Westheimer Rd. Santa Ana, Illinois 85486 
                            </p>
                        </div>
                    </div>
                    <img src={images.address} className="addressImg" alt="" />
                </div>
            </div>
        </section>
    </main>
  )
}

export default Home