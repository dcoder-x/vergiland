import React from 'react'
import { useNavigate } from 'react-router'
import '../styles/hero.css'

const Hero = ({image,title,desc,btn,className,to}) => {
    const navigate = useNavigate()
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

                <a href={to}>
                    <button className='action-btn'>
                    {btn}
                    </button>
                </a>
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