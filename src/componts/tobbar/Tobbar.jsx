
import tobbar from './tobbar.css'
import { Link } from "react-router-dom"
import { useState } from 'react';

 
const Tobbar = () => {

  //change tobar color on scrolling
  const [color,setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 75) {
      setColor(true)
    } else {
      setColor(false)
    }
  }
  window.addEventListener('scroll',changeColor)

  const [btn,setBtn] = useState(false)
  const changeBtn = () => {
    if (window.scrollY >= 75) {
      setBtn(true)
    } else {
      setBtn(false)
    }
  }
  window.addEventListener('scroll',changeBtn)
  const [nav,setNav] = useState(false)
  const changeNav = () => {
    if (window.scrollY >= 75) {
      setNav(true)
    } else {
      setNav(false)
    }
  }
  window.addEventListener('scroll',changeNav)

  const [logo,setLogo] = useState(false)
  const changeLogo = () => {
    if (window.scrollY >= 75) {
      setLogo(true)
    } else {
      setLogo(false)
    }
  }
  window.addEventListener('scroll',changeLogo)

  return (
    <div className={color ? "Contanier Contanier-bg" : "Contanier"}>
      <div className="mano">
            <div className={logo ? "start start-widith" : "start"}>
                <li className='lio'>
                  <Link to='/Home' className='sss'>
                    <h1> BO<span className='spo'>M</span> </h1>
                    </Link>
                </li>
            </div>
            <div className="end">
                <nav className='navo'>
                  <ul className='aoe2'>
                    <li className='aoe3'><Link to='/Home' className={nav ? 'nav nav-wid' : 'nav'} >Home</Link> </li>
                    <li className='aoe3'><Link to='/About' className='nav' >About</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Seeds</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Nuts</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Dried Fruits</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Coffe</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Tea</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Stores</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Careers</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Contact</Link> </li>
                    <li className='aoe3'><Link to='/' className='nav' >Horcea</Link> </li>
                  </ul>
                </nav>
            </div>
            <div className="end2" >
              <Link to='/' className='abe'>
              <button className={btn ? "btndone btndone-bg" : "btndone"}>online store</button>
              </Link>
            </div>
    </div>
    </div>
  )
}

export default Tobbar