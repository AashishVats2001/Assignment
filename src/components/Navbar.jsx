import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img src={Logo} alt="Logo" />
        <h1>LIFE<span>LINK</span>R</h1>
      </div>

      {/* Hamburger Toggle */}
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="hamburger">
        <span></span>
        <span></span>
        <span></span>
      </label>

      {/* Menu Items */}
      <div className="navbar-items">
        <a href="/">Home</a>
        <a href="/">Why Choose Us</a>
        <a href="/">Benefits</a>
        <a href="/">FAQs</a>
        <button className="white-button">WhatsApp Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
