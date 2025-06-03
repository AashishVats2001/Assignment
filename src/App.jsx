import "./App.css";
import "./index.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./assets/fonts/Nunito/Nunito.ttf";
import image1 from "./assets/images/image (1).jpg";
import image2 from "./assets/images/image (2).jpg";
import image3 from "./assets/images/image (3).jpg";
import image4 from "./assets/images/image (4).jpg";
import image5 from "./assets/images/image (5).jpg";
import benifit1 from "./assets/images/image (6).jpg";
import benifit2 from "./assets/images/image (7).jpg";
import benifit3 from "./assets/images/image (8).jpg";
import benifit4 from "./assets/images/image (9).jpg";
import benifit5 from "./assets/images/image (10).jpg";
import benifit6 from "./assets/images/image (11).jpg";
import faq from "./assets/images/image (12).jpg";
import hassle from "./assets/images/image (13).jpg";
import focus from "./assets/images/image (14).jpg";

function App() {
  return (
    <>
      <Navbar />

      {/* Headline Section */}
      <section className="main">
        <div>
          {/* Left Side Slogan */}
          <div className="flex-col main-left-section">
            <h1 className="heading">
              TAILORED IVF MANAGEMENT SOFTWARE FOR CLINICS
            </h1>
            <h2>
              Your All-in-One Software for Enhanced IVF Clinic Management and
              Patient Experience
            </h2>
            <div className="main-section-info">
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  style={{ width: "60px", height: "60px", color: "#35C3FF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
                  />
                </svg>

                <p>In-Built CRM</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  style={{ width: "60px", height: "60px", color: "#35C3FF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75"
                  />
                </svg>

                <p>Patient Insight</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  style={{ width: "60px", height: "60px", color: "#35C3FF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>

                <p>Custom Fit</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  style={{ width: "60px", height: "60px", color: "#35C3FF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 0 1-.657.643 48.39 48.39 0 0 1-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 0 1-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 0 0-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 0 1-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 0 0 .657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 0 1-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 0 0 5.427-.63 48.05 48.05 0 0 0 .582-4.717.532.532 0 0 0-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 0 0 .658-.663 48.422 48.422 0 0 0-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 0 1-.61-.58v0Z"
                  />
                </svg>

                <p>Easy Connect</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  style={{ width: "60px", height: "60px", color: "#35C3FF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
                  />
                </svg>

                <p>Info on-the-go</p>
              </div>
              <div className="flex">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1"
                  stroke="currentColor"
                  style={{ width: "60px", height: "60px", color: "#35C3FF" }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75v6.75m0 0-3-3m3 3 3-3m-8.25 6a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"
                  />
                </svg>

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              style={{ width: "100px", height: "100px", color: "#35C3FF" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
              />
            </svg>

            <h3>Data Protection</h3>
            <p>Protect Data Leakage With Strict Data Protection</p>
          </div>

          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              style={{ width: "100px", height: "100px", color: "#35C3FF" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
              />
            </svg>

            <h3>Built In Task Manager</h3>
            <p>Never Miss a Task, Get Notified at Each Approval</p>
          </div>

          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              style={{ width: "100px", height: "100px", color: "#35C3FF" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672 13.684 16.6m0 0-2.51 2.225.569-9.47 5.227 7.917-3.286-.672ZM12 2.25V4.5m5.834.166-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243-1.59-1.59"
              />
            </svg>

            <h3>Easy Walkthrough</h3>
            <p>Access Patient info Anytime, From any Screen</p>
          </div>

          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              style={{ width: "100px", height: "100px", color: "#35C3FF" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"
              />
            </svg>

            <h3>Map Patients Journey</h3>
            <p>Step Linked Progression Bar to Know Milestones</p>
          </div>

          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              style={{ width: "100px", height: "100px", color: "#35C3FF" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>

            <h3>One Stop Solution</h3>
            <p>No Need For Multiple Software Just Use One</p>
          </div>

          <div className="card flex-col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="currentColor"
              style={{ width: "100px", height: "100px", color: "#35C3FF" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 0 1-1.161.886l-.143.048a1.107 1.107 0 0 0-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 0 1-1.652.928l-.679-.906a1.125 1.125 0 0 0-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 0 0-8.862 12.872M12.75 3.031a9 9 0 0 1 6.69 14.036m0 0-.177-.529A2.25 2.25 0 0 0 17.128 15H16.5l-.324-.324a1.453 1.453 0 0 0-2.328.377l-.036.073a1.586 1.586 0 0 1-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 0 1-5.276 3.67m0 0a9 9 0 0 1-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"
              />
            </svg>

            <h3>AI Integration</h3>
            <p>TTS and AI Integrated to Reduce Human Error</p>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="why-section flex-col">
          <h1 className="heading">Why Choose Us?</h1>
          <div className="why-cards flex">
            <img src={image1} alt="why choose us" />
            <div className="card flex-col why-card">
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
          </div>
          <div className="why-cards flex ">
            <img src={image2} alt="why choose us" />

            <div className="card flex-col why-card">
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
          </div>
          <div className="why-cards">
            <img src={image3} alt="why choose us" />

            <div className="card flex-col why-card">
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
          </div>
          <div className="why-cards flex">
            <img src={image4} alt="why choose us" />
            <div className="card flex-col why-card">
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
          </div>
          <div className="why-cards flex">
            <img src={image5} alt="why choose us" />
            <div className="card flex-col why-card">
              <h3>5. Reposting & Compliance</h3>
              <p>
                Generate accurate, automated reports and ensure your clinic
                meets regulatory standards while tracking performance metrics
                and patient outcomes{" "}
                <span style={{ color: "#00B1FF", cursor: "pointer" }}>
                  Read More
                </span>
              </p>
            </div>
          </div>
        </section>

        {/* Benifits */}
        <section className="benifits-section">
          <h1 className="heading">Benifits You Will Gain</h1>
          <div className="benifits">
            <div className="flex-col benifit">
              <img src={benifit1} alt="Benifits" />
              <h3>
                Optimize <span style={{ color: "#023CA6" }}>Operations</span>
              </h3>
            </div>
            <div className="flex-col benifit">
              <img src={benifit2} alt="Benifits" />
              <h3>
                Leverage CRM for{" "}
                <span style={{ color: "#023CA6" }}>Patient Growth</span>
              </h3>
            </div>
            <div className="flex-col benifit">
              <img src={benifit3} alt="Benifits" />
              <h3>
                Simplify{" "}
                <span style={{ color: "#023CA6" }}>Financial Processes</span>
              </h3>
            </div>
            <div className="flex-col benifit">
              <img src={benifit4} alt="Benifits" />
              <h3>
                Enhanced <span style={{ color: "#023CA6" }}>Data Security</span>
              </h3>
            </div>
            <div className="flex-col benifit">
              <img src={benifit5} alt="Benifits" />
              <h3>
                Simplify{" "}
                <span style={{ color: "#023CA6" }}>Financial Processes</span>
              </h3>
            </div>
            <div className="flex-col benifit">
              <img src={benifit6} alt="Benifits" />
              <h3>
                Forever{" "}
                <span style={{ color: "#023CA6" }}>Medical Records</span>
              </h3>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="faq-section">
          <h1 className="heading">FAQ</h1>
          <img src={faq} alt="FAQ" />
          <div className="faq-item">
            <input type="checkbox" id="faq1" className="faq-toggle" />
            <label htmlFor="faq1" className="faq-question">
              <span>
                What features does LifeLinkr software include for clinics?
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="faq-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </label>
            <div className="faq-answer">
              LifeLinkr includes patient management, appointment scheduling,
              billing, EHR, and customizable dashboards to streamline clinic
              operations.
            </div>
          </div>

          <div className="faq-item">
            <input type="checkbox" id="faq2" className="faq-toggle" />
            <label htmlFor="faq2" className="faq-question">
              <span>Is LifeLinkr software suitable for individual doctor?</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="faq-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </label>
            <div className="faq-answer">{/* Answer */}</div>
          </div>

          <div className="faq-item">
            <input type="checkbox" id="faq3" className="faq-toggle" />
            <label htmlFor="faq3" className="faq-question">
              <span>How secure is patient data in LifeLinkr software</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="faq-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </label>
            <div className="faq-answer">{/* Answer */}</div>
          </div>
          <div className="faq-item">
            <input type="checkbox" id="faq4" className="faq-toggle" />
            <label htmlFor="faq4" className="faq-question">
              <span>Can i customize the LifeLinkr dashboard style </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="faq-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </label>
            <div className="faq-answer">{/* Answer */}</div>
          </div>
          <div className="faq-item">
            <input type="checkbox" id="faq5" className="faq-toggle" />
            <label htmlFor="faq5" className="faq-question">
              <span>What are the pricing plans for LifeLinkr </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2.5"
                stroke="currentColor"
                className="faq-arrow"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 15.75 7.5-7.5 7.5 7.5"
                />
              </svg>
            </label>
            <div className="faq-answer">{/* Answer */}</div>
          </div>

          <a
            href="/"
            style={{
              fontSize: "1.4rem",
              color: "#7087B4",
              textAlign: "center",
            }}
          >
            Load More
          </a>
        </section>

        {/* Form Section */}
        <section className="form-section flex">
          <div className="form-section-child flex-col">
            <h1 className="heading">Schedule a Free Demo</h1>
            <h2>
              Experience Seamless{" "}
              <span style={{ color: "#F7C02A" }}>Healthcare Management</span>{" "}
              with LifeLinkr
            </h2>

            <form action="/" className="big-form">
              <div className="big-form-inputs">
                <input
                  type="text"
                  name="fullname"
                  id="big-fullname"
                  placeholder="Full Name*"
                  required
                />
                <input
                  type="email"
                  name="email"
                  id="big-email"
                  placeholder="Email Address*"
                  required
                />
                <input
                  type="tel"
                  name="mobile"
                  id="big-mobile"
                  placeholder="Phone Number*"
                  required
                />
                <input
                  type="tel"
                  name="whatsapp"
                  id="big-whatsapp"
                  placeholder="WhatsApp Number"
                />
                <input
                  type="text"
                  name="clinic-name"
                  id="big-clinic-name"
                  placeholder="Clinic Name*"
                  required
                />
                <input
                  type="text"
                  name="country"
                  id="big-country"
                  placeholder="Country*"
                  required
                />
                <input
                  type="text"
                  name="city"
                  id="big-city"
                  placeholder="City*"
                  required
                />
                <input
                  type="number"
                  name="users"
                  id="big-users"
                  placeholder="No. of User"
                />
              </div>
              <input
                type="text"
                name="software"
                id="big-software-usage"
                placeholder="Currently Using Any Software?*"
                required
              />
              <textarea
                name="message"
                id="big-message"
                placeholder="Message"
                rows={5}
              ></textarea>
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
        </section>

        {/* Hassle Free Section */}
        <section className="hassle-section flex-col">
          <h1 className="heading">Managing ART Made Hassle Free</h1>
          <div className="flex">
            <img src={hassle} alt="hassle-free" />
            <div className="flex-col list-section">
              <ul className="list">
                <li>
                  Comprehensive and secure platform for managing IVF and
                  reproductive health information.
                </li>
                <li>
                  Centralizes patient data, lab records, treatment cyces, and
                  financial information.
                </li>
                <li>
                  Designed specifically for fertility clinics, making critical
                  information easily accessible.
                  <br />
                  <span style={{ color: "#35C3FF", cursor: "pointer" }}>
                    Read More
                  </span>
                </li>
              </ul>
              <button type="button" className="schedule-demo-button">
                Schedule Demo <span style={{ color: "#F7C02A" }}>➡</span>
              </button>
            </div>
          </div>
        </section>

        {/* Stay Focused Section */}
        <section className="focused-section flex-col">
          <h1 className="heading">Stay Focused, No More Software Hopping</h1>
          <div className="flex">
            <div className="flex-col list-section">
              <ul className="list">
                <li>
                  Eliminates the need for multiple standalone systems by
                  integrating essential functions into one platform.
                </li>
                <li>
                  Includes HR, payroll, accounting, bank reconciliation, and
                  inventory management tools.
                </li>
                <li>
                  Provides comprehensive solutions for billig, patient
                  managemtn, pharmacy and tracking, and bookkeeping.
                  <br />
                  <span style={{ color: "#35C3FF", cursor: "pointer" }}>
                    Read More
                  </span>
                </li>
              </ul>
              <button type="button" className="schedule-demo-button">
                Schedule Demo <span style={{ color: "#F7C02A" }}>➡</span>
              </button>
            </div>

            <img src={focus} alt="Stay Focused" />
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
