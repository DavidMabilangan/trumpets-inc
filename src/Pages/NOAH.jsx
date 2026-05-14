import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";


function NOAH() {
    const [isOpen, setIsOpen] = useState(false);

    // Function to close navbar when clicking a link
    const closeNavbar = () => setIsOpen(false);
  return (
    <>
      <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">N.O.A.H</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
              Imagine a world full of garbage… Not that difficult to do, huh? Well, that’s exactly the kind of world Mr. Noah and his family live in. Mr. Noah has to clean up after all his neighbors who just couldn’t care less what they do with their lives as long as they have fun all day long. Mr. Noah looks at this world and prays for a solution to their garbage dilemma. Not long after, the Creator of all things, God, comes into the picture. He asks Noah to build him a boat, but not just any kind of boat,  a VERY BIG BOAT - AN ARK. He also orders that two of every kind of animal in the world be brought into the ark and that Noah and his family leave everything they have behind and come onboard as well. Though startled at the idea, Mr. Noah (with a “little” reservation) obeys. Rain breaks loose and the earth is submerged under water for 40 days and 40 nights. Noah and the animals are saved, but bored on the Ark. After finding different ways to amuse themselves, they realize how lucky they are and what a responsibility they have for future generations. Soon after, the Ark hits land. The garbage problem is solved. No surprise there. Noah and family stand in awe at God’s BIG PICTURE sealed with a reminder of HIs promise, a beautiful rainbow.
              </p>
              
            </div>

          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/NBanner.webp"
              alt="LWWBanner"
              className="showImg"
            />
          </div>
          <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>

              <div className="gallery-images">
              <div className="img-box"><img src="/5/1.png" alt="" /></div>
              <div className="img-box"><img src="/5/2.png" alt="" /></div>
              <div className="img-box"><img src="/5/3.png" alt="" /></div>
              <div className="img-box"><img src="/5/4.png" alt="" /></div>
              <div className="img-box"><img src="/5/5.png" alt="" /></div>
              <div className="img-box"><img src="/5/6.png" alt="" /></div>

            
            </div>
            </div>
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

export default NOAH