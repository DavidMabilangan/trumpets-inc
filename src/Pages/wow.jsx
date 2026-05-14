import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";

function wow() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);
  return (
    <>
      <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">Widows, Orphans, and Wildebeests</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
                Widows, Orphans, and Wildebeests confront the unlikely yet
                timely and not-too-pleasant issue of separation and its effects
                on the people involved. <br /><br />
                Widows are the women who are virtually widowed although their
                husbands are still alive. Amanda, Bernie, Carol, Dina, and FLora
                tell their respective stories of physical and emotional abuse,
                abandonment, financial insecurity, and the resulting heartbreak,
                pain, and loneliness.
                <br /><br />
                Orphans are the children whose parents are not dead but who, for
                all practical purposes, may as well be. Nico, MJ, Trixie,
                Karina, Iggy, Robby, and Susie are the innocent victims who sing
                of their bewilderment, their inner torment, their helplessness,
                and their anger. <br /><br />
                Wildebeests are the fears, the nightmares, the problems that
                beset marriages. In this musical poem, wildebeests are also the
                men, perpetrators who become victims of their own “crimes,”
                going through their own personal, self-made hell, often
                oblivious or just indifferent to the havoc they are wreaking,
                but also isolated, confused, and afflicted. <br /><br />
                Not an altogether beautiful story, but one that must be told,
                especially since there is HOPE.
              </p>
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-start">
              <div className="characterBox mt-11 w-100">
                <p className="secondaryTitle">Characters</p>
                <p>
                  <br />
                  Widows:
                  <br />
                  Amanda
                  <br />
                  Bernie
                  <br />
                  Carol
                  <br />
                  Dina
                  <br />
                  Flora
                  <br />
                  <br />
                  Orphans:
                  <br />
                  Iggy
                  <br />
                  Karina
                  <br />
                  MJ
                  <br />
                  Nico
                  <br />
                  Robby
                  <br />
                  Susie
                  <br />
                  Trixie
                  <br />
                  <br />
                  Wildebeests:
                  <br />
                  Ernie
                  <br />
                  Greco
                </p>
              </div>

              <div className="characterBox mt-11 w-100">
                <p className="secondaryTitle">Songs</p>
                <p>
                  Everybody Knows
                  <br />
                  Mooncake
                  <br />
                  Like a Miracle
                  <br />
                  American Girls
                  <br />
                  Party Night
                  <br />
                  He Could Always Make Me Laugh
                  <br />
                  Dear Child
                  <br />
                  Here and Now
                  <br />
                  Happy Ending
                  <br />
                  Something, Everything, Nothing
                </p>
              </div>
            </div>
          </article>
          <div className="showDetailImgContainer">
            <img src="/thumbnail/wow.webp" alt="wow" className="showImg" />
          </div>
          <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>

              <div className="gallery-images">
                <div className="img-box">
                  <img src="/7/1.webp" alt="" />
                </div>
                <div className="img-box">
                  <img src="/7/2.webp" alt="" />
                </div>
                <div className="img-box">
                  <img src="/7/3.webp" alt="" />
                </div>
                <div className="img-box">
                  <img src="/7/4.webp" alt="" />
                </div>
                <div className="img-box">
                  <img src="/7/5.webp" alt="" />
                </div>
                <div className="img-box">
                 
                </div>
                
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

export default wow;
