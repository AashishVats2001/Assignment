import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      {/* Logo */}
      <div className='logo'>LIFE<span>LINK</span>R</div>

      {/* Pages */}
    <div className='navbar-items'>
      <a href="/">Home</a>
      <a href="/">Why Choose Us</a>
      <a href="/">Benifits</a>
      <a href="/">FAQs</a>
      <button className='white-button'>WhatsApp Us</button>
    </div>

    </div>
  )
}

export default Navbar
