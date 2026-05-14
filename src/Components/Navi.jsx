import { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Navi() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  // Check if the current path includes "Show" or specific show routes
  const isShowActive = location.pathname.includes("/Show") || 
                       location.pathname.includes("/TLTW") || 
                       location.pathname.includes("/TYK") || 
                       location.pathname.includes("/TLM") ||
                       location.pathname.includes("/PM") ||
                       location.pathname.includes("/THB") ||
                       location.pathname.includes("/THHB") ||
                       location.pathname.includes("/FN") ||
                       location.pathname.includes("/JD") ||
                       location.pathname.includes("/NOAH") ||
                       location.pathname.includes("/wow") ||
                       location.pathname.includes("/SD") ;

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
        <div className="container-lg">
          <NavLink to="/" className="nav-brand" onClick={() => {
            closeNavbar();
            setIsOpen(false);
          }}>
            <picture>
              <img src="/logo.svg" alt="logo" width="150" height='auto' className="logo" />
            </picture>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-controls="navbarSupportedContent"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse d-lg-flex justify-content-end ${isOpen ? "show" : ""}`} id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  to="/Show" 
                  className={`nav-link ${isShowActive ? "active" : ""}`} 
                  onClick={closeNavbar}
                >
                  Shows
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/About" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                  About Us
                </NavLink>
              </li>
              <li className="nav-item">
                <a href="https://trumpetsplayshop.com//" className="nav-link" target="_blank" activeclassname="active" onClick={closeNavbar}>Workshop</a>
              </li>
              <li className="nav-item">
                <NavLink to="/Sup" className="nav-link" activeclassname="active" onClick={closeNavbar}>
                  Outreach
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navi;
