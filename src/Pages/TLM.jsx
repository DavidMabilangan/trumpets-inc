import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";

function TLM() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);
  return (
    <>
      <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">The Litle Mermaid</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
                This retelling of the classic Hans Christian Andersen novel
                shows the meaning of unconditional and everlasting love, and
                what one little mermaid is willing to sacrifice, told through
                songs, movement, and vibrant storytelling.
              </p>
              <p>
                On her 16th birthday, Princess Jewel is about to assume her
                full-fledged duties as a Siren tempting sailors to jump
                overboard, give up their souls, and become slaves beneath the
                sea. However, she instead falls in love with the dashing Prince
                Christian and tries to find a way to be with him. Learning of
                Jewel’s secret love, Crustacea lures the princess into a
                dangerous deal. In exchange for human legs, Jewel must make the
                Prince fall in love with her within three days or else she loses
                her life.
              </p>
              <p></p>
              <p>
                When Jewel realizes that Prince Christian feels nothing but
                brotherly love for her, she is faced with a most critical
                choice: To end the Prince’s life in exchange for her own or to
                make the greatest sacrifice of all?
              </p>
            </div>
            <div className="d-flex flex-column flex-lg-row justify-content-start">
              <div className="characterBox mt-3 w-100">
                <p className="secondaryTitle">Characters</p>
                <p>
                  Jewel <br /> Crustacea <br /> Prince Christian <br /> Prince
                  Sapphire <br /> Nicodemus
                  <br /> Calamari <br /> King Argo
                  <br /> Ensemble
                </p>
              </div>

              <div className="characterBox mt-3 w-100">
                <p className="secondaryTitle">Songs</p>
                <p>
                  Hurry Up! Hurry Up! <br />
                  It’ll Be Fun
                  <br />
                  You Plus Me
                  <br />
                  Siren Song
                  <br />
                  I Am Complete
                  <br />
                  Quandary
                  <br />
                  Running the Show
                  <br />
                  You Can’t Cross Crustacea
                  <br />
                  He Brought Me to You
                  <br />
                  Death Song
                  <br />
                  The Gift
                  <br />
                  Silent Song
                  <br />
                  Duet for One
                  <br />
                  Soul Song
                </p>
              </div>
            </div>
          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/TLMBanner.webp"
              alt="TLMBanner"
              className="showImg"
            />
          </div>
          <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>
              
              <div className="gallery-images">
              <div className="img-box"><img src="/2/1.png" alt="" /></div>
              <div className="img-box"><img src="/2/2.png" alt="" /></div>
              <div className="img-box"><img src="/2/3.png" alt="" /></div>
              <div className="img-box"><img src="/2/4.png" alt="" /></div>
              <div className="img-box"><img src="/2/5.png" alt="" /></div>
              <div className="img-box"><img src="/2/6.png" alt="" /></div>
              <div className="img-box"><img src="/2/7.png" alt="" /></div>
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
  );
}

export default TLM;
