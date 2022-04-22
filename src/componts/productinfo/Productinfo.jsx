import React from 'react'
import './productinfo.css'
import { Link } from 'react-router-dom'

const Productinfo = () => {
  return (
    <div className='container4'>
        <div className="hed"><h1 className='hed2'> PRODUCT INFORMATION </h1></div>
        <div className="conta1">
            <div className="box1">
                <div className="image">
                    <img className='height2' src="product/1.jpg" alt="" />
                </div>
                <div className="info1">
                    <h1 className='tex'> CASHEW </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                     <Link to='/About'>
                    <button className='btn1'>View Product</button>
                    </Link>
                </div>
            </div>
            <div className="box1">
                <div className="image">
                    <img className='height2' src="product/2.jpg" alt="" />
                </div>
                <div className="info1">
                    <h1 className='tex'> ALMONDS </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
            </div>
        </div>
        <div className="conta2">
            <div className="box1">
            <div className="info1">
                    <h1 className='tex'> DIYAFA SEEDS </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
                <div className="image">
                    <img className='height2' src="product/3.jpg" alt="" />
                </div>
            </div>
            <div className="box1">
            <div className="info1">
                    <h1 className='tex'> PEANUTS </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
                <div className="image">
                    <img className='height2' src="product/4.jpg" alt="" />
                </div>
            </div>
        </div>
        <div className="conta3">
            <div className="box1">
                <div className="image">
                    <img className='height2' src="product/5.jpg" alt="" />
                </div>
                <div className="info1">
                    <h1 className='tex'> TURKISH COFFEE </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
            </div>
            <div className="box1">
                <div className="image">
                    <img className='height2' src="product/6.jpg" alt="" />
                </div>
                <div className="info1">
                    <h1 className='tex'> INSTANT ARABIC COFFEE </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
            </div>
        </div>
        <div className="conta4">
            <div className="box1">
            <div className="info1">
                    <h1 className='tex'> RED TEA </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
                <div className="image">
                    <img className='height2' src="product/7.jpg" alt="" />
                </div>
            </div>
            <div className="box1">
            <div className="info1">
                    <h1 className='tex'> GREEN TEA WITH LEMON & GINGER </h1>
                    <p className='texx'>At Baja we choose nothing but the finest. Our salted cashews are rich in buttery
                     and nutty goodness which makes it the perfect delicious snack.</p>
                    <button className='btn1'>View Product</button>
                </div>
                <div className="image">
                    <img className='height2' src="product/8.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Productinfo