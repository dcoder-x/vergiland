import React, { useState } from 'react'
import { Icons, images, partners } from '../assets/assets'
import Hero from '../component/Hero'
import { partnersData } from '../data/partners'
import '../styles/partnership.css'

const Partnership = () => {
    const [value, setValue] = useState('')
  return (
    <main id='partnership'>
        <Hero 
            image={images.partnership} 
            btn='become a partner'
            title={'Partnership & Affiliation'}
            desc={'With a Mission and Vision as compelling as ours we can not achieve it by depending on just our strength, hence the reason why we are in Partnership with this Reputable and Exceptional Companies.'}
        />
        <section className="partnershipOffers">

        </section>

        <section className="partners">
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
        </section>
        <section className=" join">
            <Hero 
                className={'become'}
                image={images.partnersimg} 
                btn='become a partner'
                title={'Become a Partner'}
                to={'#partnershipform'}
                desc={'You can also Join us in the fight against food Insecurity. Apply now and our Team will reach out to you.'}
            />
            <div className="form" id='partnershipform'>

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
                        Partnership Type
                        </label>
                        <select name="" id="">
                            <optgroup>
                                <option value="Investor">
                                    Investor
                                </option>
                                <option value="Affiliate">
                                    Affiliate
                                </option>
                                <option value="Tech integration">
                                    Tech integration
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

export default Partnership