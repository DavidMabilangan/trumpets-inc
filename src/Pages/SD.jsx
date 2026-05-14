import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";


function JD() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close navbar when clicking a link
    const closeNavbar = () => setIsOpen(false);
  return (
    <>
    <main>
      <div className="container showContainer">
        <article>
          <h1 className="title">So David</h1>
          <div className="DescriptionBox mt-4 ">
            <p className="secondaryTitle">SYNOPSIS</p>
            <p>
            A musical based on the life and times of the greatest king of Israel written with a youth market in mind. It combines elements of MTV and Saturday Night Live and already has a cult following after only nine performances.
            </p>
            
          </div>
         
        </article>
        <div className="showDetailImgContainer">
          <img
            src="/thumbnail/SDBanner.webp"
            alt="SDBanner"
            className="showImg"
          />
        </div>
        <div className="sampleImage container-fluid">
          <div className="container">
            <h1>Gallery</h1>
            <div className="gallery-images">
              <div className="img-box"><img src="/7/1.webp" alt="" /></div>
              <div className="img-box"><img src="/7/2.webp" alt="" /></div>
              <div className="img-box"><img src="/7/3.webp" alt="" /></div>
              <div className="img-box"><img src="/7/4.webp" alt="" /></div>
              <div className="img-box"><img src="/7/5.webp" alt="" /></div>
              <div className="img-box"></div>
              <div className="img-box"></div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="formHolder ">
        <h1 className="text-center fw-medium text-uppercase">
          License or Buy our <strong className="fw-bolder">SHOWS</strong>
        </h1>
        <p className="fw-normal mx-auto p-3 p-lg-0">
          More than just performances, each Trumpets original production is a
          transformative and meaningful experience that leaves a resounding
          impact on audiences of all ages. These shows offer theater
          organizations, schools, and communities the opportunity to stage
          their own compelling musical productions, to embrace the magic of
          live theater, and to spread the valuable messages at the core of
          each Trumpets show.
          <br />
          <br />
          Create your own memorable theatrical journey with Trumpets’ original
          scripts, music, and lyrics. Send a message to Trumpets for licensing
          inquiries.
        </p>
        <Mailform />
      </div> */}
    </main>
  </>
  )
}

export default JD