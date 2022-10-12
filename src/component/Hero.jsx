import React from 'react'
import '../styles/hero.css'

const Hero = ({image,title,desc,btn,className}) => {
  return (
    <section id='hero' className={`hero ${className} `}>
        <div className="text">
            <div className="title">
                {title}
            </div>
            <div className="desc">
                {
                    desc||
                    `Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Molestias est dolorem deleniti quae possimus, natus expedita
                    nesciunt qui quos, vitae dolor commodi 
                    tempora aliquid inventore atque ipsum eius in accusantium.`
                }
                
            </div>
            {
                btn?

                <button className='action-btn'>
                {btn}
                </button>
                :
                null
            }
        </div>
        <div className="image">
            <img className='img' src={image} alt="" />
        </div>
    </section>
  )
}

export default Hero