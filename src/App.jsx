import "./App.css";
import "./index.css";
import "./assets/fonts/Nunito/Nunito.ttf";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div style={{ fontFamily: "Nunito" }}>
      <Navbar />

      {/* Headline Section */}
      <section className="flex main">
        <div style={{ width: "92%" }} className="flex">
          {/* Left Side Slogan */}
          <div className="flex-col main-left-section">
            <h1>TAILORED IVF MANAGEMENT SOFTWARE FOR CLINICS</h1>
            <h2>
              Your All-in-One Software for Enhanced IVF Clinic Management and
              Patient Experience
            </h2>
            <div className="main-section-info">
              <div className="flex">
                <p>In-Built CRM</p>
              </div>
              <div className="flex">
                <p>Patient Insight</p>
              </div>
              <div className="flex">
                <p>Custom Fit</p>
              </div>
              <div className="flex">
                <p>Easy Connect</p>
              </div>
              <div className="flex">
                <p>Info on-the-go</p>
              </div>
              <div className="flex">
                <p>Data Transfer</p>
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div
            className="flex-col main-right-section"
            style={{ padding: "40px", color: "white" }}
          >
            <h1>Schedule a Free Demo</h1>

            <form action="" className="form">
              <div className="form-inputs">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Clinic Name*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Clinic Email*"
                  required
                />
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  placeholder="Mobile*"
                  required
                />
                <input
                  type="text"
                  name="location"
                  id="location"
                  placeholder="Clinic Location*"
                  required
                />
              </div>
              <div className="flex">
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    required
                  />
                  <span className="checkmark"></span>
                </div>
                <h1>
                  I agree and accept the{" "}
                  <span style={{ color: "#F7C02A", cursor: "pointer" }}>
                    Terms & Conditions
                  </span>
                </h1>
              </div>

              <button type="submit" className="form-button">
                Schedule Demo <span style={{ color: "#F7C02A" }}>➡</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Sections */}
      <div className="flex-col sections">
        {/* Cards Section*/}
        <section className="card-section">
          <div className="card flex-col">
            <h3>Data Protection</h3>
            <p>Protect Data Leakage With Strict Data Protection</p>
          </div>

          <div className="card flex-col">
            <h3>Built In Task Manager</h3>
            <p>Never Miss a Task, Get Notified at Each Approval</p>
          </div>

          <div className="card flex-col">
            <h3>Easy Walkthrough</h3>
            <p>Access Patient info Anytime, From any Screen</p>
          </div>

          <div className="card flex-col">
            <h3>Map Patients Journey</h3>
            <p>Step Linked Progression Bar to Know Milestones</p>
          </div>

          <div className="card flex-col">
            <h3>One Stop Solution</h3>
            <p>No Need For Multiple Software Just Use One</p>
          </div>

          <div className="card flex-col">
            <h3>AI Integration</h3>
            <p>TTS and AI Integrated to Reduce Human Error</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-section flex-col">
          <h1>Why Choose Us</h1>
          <div className="card flex-col">
            <h3>1. Seamless Patient Management</h3>
            <p>
              Efforlesssly manage Patient records, appointments, commincations
              and history in a centralized, secure platform tailored for IVF
              enhancing efficiency{" "}
              <span style={{ color: "#00B1FF", cursor: "pointer" }}>
                Read More
              </span>
            </p>
          </div>

          <div className="card flex-col">
            <h3>2. Detailed IVF Cycle Tracking</h3>
            <p>
              Track each stage of IVF cycle, from eff retrieval to embryo
              rtansfer, with real-time updates and data-driven insights for
              better outcomes. imroving decision{" "}
              <span style={{ color: "#00B1FF", cursor: "pointer" }}>
                Read More
              </span>
            </p>
          </div>

          <div className="card flex-col">
            <h3>3. Automated Billing & Finance Integration</h3>
            <p>
              Streamline complex IVF billing processes with automated
              milestone-based, package billing and insurance management in one
              easy-to-use system, reducing{" "}
              <span style={{ color: "#00B1FF", cursor: "pointer" }}>
                Read More
              </span>
            </p>
          </div>

          <div className="card flex-col">
            <h3>4. Lab Management</h3>
            <p>
              Optimize lab operations by tracking embryo development, managing
              cryostorage and maintaining compliance with laboratory standards
              all while ensuring{" "}
              <span style={{ color: "#00B1FF", cursor: "pointer" }}>
                Read More
              </span>
            </p>
          </div>

          <div className="card flex-col">
            <h3>5. Reposting & Compliance</h3>
            <p>
              Generate accurate, automated reports and ensure your clinic meets
              regulatory standards while tracking performance metrics and
              patient outcomes{" "}
              <span style={{ color: "#00B1FF", cursor: "pointer" }}>
                Read More
              </span>
            </p>
          </div>
        </section>

        {/* Benifits */}
        <section className="benifits-section">
          <div className="flex-col benifit">
            <h3>
              Optimize <span style={{ color: "#023CA6" }}>Operations</span>
            </h3>
          </div>
          <div className="flex-col benifit">
            <h3>
              Leverage CRM for <span style={{ color: "#023CA6" }}>Patient Growth</span>
            </h3>
          </div>
          <div className="flex-col benifit">
            <h3>
              Simplify <span style={{ color: "#023CA6" }}>Financial Processes</span>
            </h3>
          </div>
          <div className="flex-col benifit">
            <h3>
              Enhanced<span style={{ color: "#023CA6" }}>Data Security</span>
            </h3>
          </div>
          <div className="flex-col benifit">
            <h3>
              Simplify <span style={{ color: "#023CA6" }}>Financial Processes</span>
            </h3>
          </div>
          <div className="flex-col benifit">
            <h3>
              Forever <span style={{ color: "#023CA6" }}>Medical Records</span>
            </h3>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
