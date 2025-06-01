import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      {/* Headline Section */}
      <section className="flex main">
        <div style={{width:'92%'}}>

        {/* Left Side Slogan */}
        <div className="flex-col main-left-section">
          <h1>TAILORED IVF MANAGEMENT SOFTWARE FOR CLINICS</h1>
          <h2>Your All-in-One Software for Enhanced IVF Clinic Management and Patient Experience</h2>
          <div className=""></div>
        </div>

        {/* Right Side Form */}
        <div className="flex-col main-right-section"></div>
        </div>
      </section>
    </>
  );
}

export default App;
