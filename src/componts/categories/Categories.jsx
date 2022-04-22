import React from 'react'
import "./categories.css"

const Categories = () => {
  return (
    <div className='contanierr'>
        <h3 className="ban" > OUR CATEOGIES </h3>
        <div className="contan1">
            <div className="boxx">
                <div className="imgb">
                    <img className="height" src="CATEOGRIES/1.jpg" alt="" />
                </div>
                <div className="text">
                    <h3 className="tan" > SEEDS </h3>
                    <button className='btn'>VIEW PRODUCTS</button>
                </div>
            </div>
            <div className="boxx">
                <div className="imgb">
                    <img className="height" src="CATEOGRIES/2.jpg" alt="" />
                </div>
                <div className="text">
                    <h3 className="tan" > NUTS </h3>
                    <button className='btn'>VIEW PRODUCTS</button>
                </div>
            </div>
            <div className="boxx">
                <div className="imgb">
                    <img className="height" src="CATEOGRIES/3.jpg" alt="" />
                </div>
                <div className="text">
                    <h3 className="tan" > MIXED NUTS </h3>
                    <button className='btn'>VIEW PRODUCTS</button>
                </div>
            </div>
        </div>
        <div className="contan2">
            <div className="boxx">
                <div className="imgb">
                    <img className="height" src="CATEOGRIES/4.jpg" alt="" />
                </div>
                <div className="text">
                    <h3 className="tan" > DRIED FRUITS </h3>
                    <button className='btn'>VIEW PRODUCTS</button>
                </div>
            </div>
            <div className="boxx">
                <div className="imgb">
                    <img className="height" src="CATEOGRIES/5.jpg" alt="" />
                </div>
                <div className="text">
                    <h3 className="tan" > COFFEE </h3>
                    <button className='btn'>VIEW PRODUCTS</button>
                </div>
            </div>
            <div className="boxx">
                <div className="imgb">
                    <img className="height" src="CATEOGRIES/6.jpg" alt="" />
                </div>
                <div className="text">
                    <h3 className="tan" > TEA </h3>
                    <button className='btn'>VIEW PRODUCTS</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Categories