import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";

function TYK() {
  const [isOpen, setIsOpen] = useState(false);
  
    // Function to close navbar when clicking a link
    const closeNavbar = () => setIsOpen(false);
  return (
    <>
        <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">Pamilya Maleta</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
              Pamilya Maleta is the story of a family whose life is ridden with problems which are reflective of those that plague many Filipino families today. Berto, the father, is a drunkard who escapes from his responsibilities by turning to the bottle. Kikay, his wife, is a Japayuki who supplements her earnings by running a one-woman recruitment agency for ambitious and desperate young girls. They have four children: Talino is an arrogant wannabe intellectual who complains about being born into the wrong family. Betchay is a happy-go-lucky tomboy who has a penchant for stealing. Rosanna changes boyfriends like she changes shirts in a week. And Tan-G-A, the youngest, is the simple-minded but affectionate brother who is appreciated only by his sisters.
              </p>
              <p>
              The story of Pamilya Maleta takes the audience through the often comic, sometimes tragic tale of a family whose story can also be our own. Each time, it has never failed to regale the audience with its songs and its endearing brand of humor at one moment, and then move them to tears at the next, when Pamilya Inusisa seems to be at its lowest and when it triumphs in the end.
              </p>
            </div>

            <div className="characterBox mt-3">
              <p className="secondaryTitle">Characters</p>
              <p>
              Berto <br /> Kikay <br /> Talino <br /> Betchay <br /> Rosanna <br /> Tan-G-A
              </p>
            </div>

            <div className="characterBox mt-3">
              <p className="secondaryTitle">Songs</p>
              <p>
              Bongga Hotdog <br /> Careless Circus <br /> Maniwala <br />  Rosanna’s Song <br /> Maleta Song
              </p>
            </div>
          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/PMBanner.webp"
              alt="LWWBanner"
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
  );
}

export default TYK;
