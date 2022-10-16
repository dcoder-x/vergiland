import React from 'react'
import { images } from '../assets/assets'
import Hero from '../component/Hero'
import '../styles/training.css'

const Training = () => {
  return (
    <main id='training'>
        <Hero 
            image={images.training} 
            btn='Take a course'
            title={'Training & Internship'}
            to={'#trainingform'}
            desc={' '}
        />
        {/* <section className="partners">
            <h1>
                Partners
            </h1>
            <div className="partners-list">
                {
                    partnersData.map((partner,index)=>{
                        return(
                            <div className="partner">
                                <div className="partner-logo">
                                    <img src={partners[index]} alt="" />
                                </div>
                                <div className="partner-name">
                                    {partner.name}
                                </div>
                                <div className="icon">
                                    <img src={Icons.star} alt="" />
                                </div>
                                <div className="contract">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                    Ab iusto modi sed, expedita reiciendis cumque. Nostrum, 
                                    vel, nemo dolore, \
                                    optio quae at tempora possimus et qui adipisci cum eaque vero.
                                </div>
                            </div> 
                        )
                    })
                }

            </div>
        </section> */}
        <section className="join">
            {/* <Hero 
                className={'become trainee'}
                image={images.trainee} 
                btn='become a trainee'
                to={'#trainingform'}
                title={'Become a Trainee'}
            /> */}
            <Hero 
                className={'become intern'}
                image={images.intern} 
                btn='become an intern'
                to={'#trainingform'}
                title={'Become an Intern'}
            />
            <div className="form" id='trainingform'>

                <form action="">
                    <p style={{textAlign:"center",fontSize:'30px',color:'rgba(72, 183, 96, 1)',fontWeight:"600"}}>
                        Send a quick message
                    </p>
                    <hr />
                    <div className="field">
                        <label htmlFor="">
                        Full name
                        </label>
                        <input type="text" placeholder='your name' />
                    </div>
                    <div className="field">
                        <label htmlFor="">
                        Email
                        </label>
                        <input type="text" placeholder='your email address' />
                    </div>
                    <div className="field">
                        <label htmlFor="">
                        Choose a program
                        </label>
                        <select name="" id="">
                            <optgroup>
                                <option value="Intern">
                                    Intern
                                </option>
                                <option value="Trainee">
                                    Trainee
                                </option>

                            </optgroup>
                        </select>
                    </div>
                    <div className="field">
                        <label htmlFor="">
                        Message
                        </label>
                        <input className='message' type="text" placeholder='I have a project in mind' />
                    </div>
                    <button className='action-btn'>
                        submit
                    </button>
                </form>
            </div>
        </section>
    </main>
  )
}

export default Training