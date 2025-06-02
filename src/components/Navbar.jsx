import Logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="logo">
        <img
          src={Logo}
          alt="Logo"
          style={{ width: "100px", marginBottom: "-8px" }}
        />
        LIFE<span>LINK</span>R
      </div>

      {/* Pages */}
      <div className="navbar-items">
        <a href="/">Home</a>
        <a href="/">Why Choose Us</a>
        <a href="/">Benifits</a>
        <a href="/">FAQs</a>
        <button className="white-button">WhatsApp Us</button>
      </div>
    </nav>
  );
};

export default Navbar;
