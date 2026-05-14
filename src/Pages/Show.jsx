import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Show() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
      <div className="container-fluid showHero">
        <div className="container">
          <h1 className="title">Trumpets Musicals</h1>
          <p className="subtitle">
          Explore Trumpets’ collection of highly-acclaimed original musicals and adaptations that delight, inspire, and entertain audiences across all ages. 
          </p>
        </div>
      </div>
      <main>
        <section className="container mt-5 mb-5">
          <h1 className=" text-uppercase mb-5 ft-red">All shows</h1>

          <div className="DisplayShows">
          
            <div className="column">
              <NavLink 
               to="/TLTW"
               className="card nav-link"
               activeclassname="active"
               onClick={closeNavbar}>
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/LWWBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                      The Lion, The witch and the wardrobe
                    </h5>

                   
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink to="/THB" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/BBBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">Bluebird of happiness</h5>

                   
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink to="/THHB" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/THBBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">The horse and his boy</h5>

                  
                  </div>
                </div>
              </NavLink>
            </div>
            {/*The horse and his boy*/}
            {/*Bluebird of hapiness*/}
            {/*The lion, the witch and the wardrobe */}
           
            <div className="column">
              <NavLink to="/FN" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/FN.webp`}
                      alt={``}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">First Name</h5>
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink to="/JD" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/jtdOpti.webp`}
                      alt={`jtb-opti`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">Joseph the Dreamer</h5>

                
                  </div>
                </div>
              </NavLink>
            </div>
            {/*Joseph the Dreamer*/}
            <div className="column">
              <NavLink to="/TYK" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/TYKBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">The young king</h5>

                    
                  </div>
                </div>
              </NavLink>
            </div>
            {/*The young king */}
            {/*First name*/}
            <div className="column">
              <NavLink to="/NOAH" className="text-decoration-none">
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/NBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">N.O.A.H</h5>

              
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
            <NavLink 
             to="/TLM"
             className="card nav-link"
             activeclassname="active"
             onClick={closeNavbar}>
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/TLMBanner.webp`}
                      alt={`TLMBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">The Little Mermaid</h5>

                   
                  </div>
                </div>
            </NavLink>
            </div>{" "}
            <div className="column">
              <NavLink 
               to="/wow"
               className="card nav-link"
               activeclassname="active"
               onClick={closeNavbar}>
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/wow.webp`}
                      alt={`wow`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                    Widows, Orphans, and Wildebeests
                    </h5>

                   
                  </div>
                </div>
              </NavLink>
            </div>
            <div className="column">
              <NavLink 
               to="/SD  "
               className="card nav-link"
               activeclassname="active"
               onClick={closeNavbar}>
                <div className="card mb-3 mb-lg-4 showCard">
                  <div className="imgs">
                    <img
                      src={`/thumbnail/SDBanner.webp`}
                      alt={`SDBanner`}
                      className="img"
                    />
                  </div>
                  <div className="card-body">
                    <h5 className="card-title text-center">
                    So David
                    </h5>

                   
                  </div>
                </div>
              </NavLink>
            </div>
            {/*Little mermaid */}
            {/*First name*/}
          </div>
        </section>
      </main>
    </>
  );
}

export default Show;
