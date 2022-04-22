import React from 'react'
import './aboutus.css'

const Aboutus = () => {
  return (
    <div className='contanier' >
      <div className="con1">
      <div className="box">
        <div className="icon">
        <img src="story2.svg" alt='' className='img-res' />
        </div>
        <div className="contant">
          <h1 className="don"> OUR STORY </h1>
          <p className='san' >An idea, a small capital, a goal and a passion, excitement and ambition.
            <span className='df'>READE MORE</span>
          </p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
          <img src="msg.svg" alt='' className='img-res' />
        </div>
        <div className="contant">
          <h1 className="don"> CHAIRMAN MESSAGE </h1>
          <p className='san' >An idea, a small capital, a goal and a passion, excitement and ambition.
            <span className='df'>READE MORE</span>
          </p>
        </div>
        </div>
      </div>
      <div className="con2">
      <div className="box">
        <div className="icon">
        <img src="journey.svg" alt='' className='img-res' />
        </div>
        <div className="contant">
          <h1 className="don" > OUR JOURNEY </h1>
          <p className='san' >An idea, a small capital, a goal and a passion, excitement and ambition.
            <span className='df'>READE MORE</span>
          </p>
        </div>
      </div>
      <div className="box">
        <div className="icon">
        <img src="store7.svg" alt='' className='img-res' />
        </div> 
        <div className="contant">
          <h1 className="don"> STORES LOCATION </h1>
          <p className='san'>An idea, a small capital, a goal and a passion, excitement and ambition.
            <span className='df'>READE MORE</span>
          </p>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Aboutus