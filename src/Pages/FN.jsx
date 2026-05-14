import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";


function FN() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close navbar when clicking a link
    const closeNavbar = () => setIsOpen(false);
  return (
    <>
    <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">First Name</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
                This new staging of First Name is conceptualized to be a
                celebration full of life, radicalism and energy.
              </p>
              <p>
                Staged with highly dramatic lighting and the simplest of sets,
                First Name takes the audience on a journey through the Bible
                through the eyes of today's generation.The music, composed by
                Gary Valenciano and Ogie Alcasid, is arranged by Mon Faustino of
                Power Play and the result is a score that is dynamic, forceful
                and reflective of the new millennium.
              </p>
              <p>
                The libretto and lyrics are by award-winning director and writer
                Freddie Santos. Hit songs from this show include the
                internationally-released "Could You Be Messiah" and "Woman With
                No Name"{" "}
              </p>
              <p>
                This Trumpets original musical, created by the late Freddie
                Santos is made for families, and the youth and adults of the
                current generation.
              </p>
            </div>

            <div className="characterBox mt-3">
              <p className="secondaryTitle">Songs</p>
              <p>
                What’s in a Name?
                <br /> One God Woman
                <br /> To Be Named a Disciple
                <br /> Woman With No Name
                <br /> Could You Be Messiah
                <br /> What’s His Name
                <br /> Were You There?
                <br /> First Name
              </p>
            </div>
          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/fn-opti.webp"
              alt="fn-opti"
              className="showImg"
            />
          </div>
        </div>
        {/* <div className="formHolder ">
          <h1 className="text-center fw-medium text-uppercase">
            License or Buy our <strong className="fw-bolder">SHOWS</strong>
          </h1>
          <p className="fw-normal mx-auto p-3 p-lg-0" >
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

export default FN