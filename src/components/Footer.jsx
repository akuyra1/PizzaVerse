import React from 'react'
import '../styles/FooterStyles.css'

export default function Footer() {
  return (
    <>
      <div className='footerContainer'>
        <ul className='footerUl'>
            <h1 className='footerTitles'>About Us</h1>
            <li><a className='footerLi' href='/'>About Us</a></li>
            <li><a className='footerLi' href='/'>Recruitment</a></li>
            <li><a className='footerLi' href='/'>Franchise</a></li>
            <li><a className='footerLi' href='/'>Property</a></li>
            <li><a className='footerLi' href='/'>Media and Press Enquiries</a></li>
        </ul>
        <ul className='footerUl'>
            <h1 className='footerTitles'>Help & Service</h1>
            <li><a className='footerLi' href='/'>Contact Us & FAQs</a></li>
            <li><a className='footerLi' href='/'>Hut Locations</a></li>
            <li><a className='footerLi' href='/'>Dine-in Restaurants</a></li>
            <li><a className='footerLi' href='/'>Nutrition & Allergens</a></li>
        </ul>
        <ul className='footerUl'>
            <h1 className='footerTitles'>Our Policies</h1>
            <li><a className='footerLi' href='/'> Privacy Policies</a></li>
            <li><a className='footerLi' href='/'>Terms & Conditions</a></li>
            <li><a className='footerLi' href='/'>Responsible Disclosure</a></li>
            <li><a className='footerLi' href='/'>Yum Gender Pay Gap Report</a></li>
            <li><a className='footerLi' href='/'>Cookies and Ads Policy</a></li>
            <li><a className='footerLi' href='/'>Tax Strategy</a></li>


        </ul>
      </div>
    </>
  )
}
