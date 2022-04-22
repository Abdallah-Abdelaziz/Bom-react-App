import React from 'react'
import "./footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='contanier7'>
        <div className="right">
            <img src="16.png" alt="" />
        </div>
        <div className="logo">
            <div className="imgbf">
            <h5 className='sot'> BO<span className='so'>M</span> </h5> 
            </div>
            <div className="tex7">
                <p className='dren'>A Self-made achievement that began as a hobby! Bom, a local company which became the pioneer
                     in making and packing the best quality nuts, coffee, tea and dried fruits in various kinds.</p>
            </div>
        </div>
        <div className="hed5">
        <div className="know">
            <h4 className='ff'> Get to know us </h4>
            <ul>
                <li className='ssd' >Our Story</li>
                <li className='ssd' >Our Journey</li>
                <li className='ssd' >Chairman Message</li>
            </ul>
        </div>
        <div className="loction">
            <h4 className='ff'> Stores Location </h4>
            <ul>
                <li>cairo</li>
                <li>maadi</li>
                <li>nasr city</li>
                <li>mansoura</li>
                <li>portsaid</li>
                <li>ain shams</li>
            </ul>
        </div>
        <div className="contact">
            <h4 className='ff'> Contact </h4>
            <ul>
                <li>cairo, Exit 15 of egypt</li>
                <li>18994 - Cairo 11425</li>
                <li>info@bom.com.eg</li>
            </ul>
        </div>
        </div>
        <div className="icons">
            <ul className='cond'>
                <li className='conm'> <FacebookIcon /> </li>
                <li className='conm'> <InstagramIcon /> </li>
                <li className='conm'> <TwitterIcon /> </li>
            </ul>
        </div>
        <div className="copyrights">
            <p className='red'>© Copyright 2022 All right reserved by Bom.</p>
        </div>
        <div className="left">
            <img src="06.png" alt="" />
        </div>
    </div>
  )
}

export default Footer