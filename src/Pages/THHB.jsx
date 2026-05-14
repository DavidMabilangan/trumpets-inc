import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";


function THHB() {
      const [isOpen, setIsOpen] = useState(false);
    
      // Function to close navbar when clicking a link
      const closeNavbar = () => setIsOpen(false);
  return (
    <>
    <main>
      <div className="container showContainer">
        <article>
          <h1 className="title">The Horse and his boy</h1>
          <div className="DescriptionBox mt-4">
            <p className="secondaryTitle">SYNOPSIS</p>
            <p>
            The Horse and His Boy is the story of an orphan boy, Shasta, and a talking horse, Bree, as they journey towards freedom from oppression and slavery. They fly from a foreign land to Narnia, the place the horse calls home, and where the boy hopes to find who he is and where he truly belongs.
            </p>
            <p>
            Along the way, they are joined by a young noblewoman, Aravis, and a talking mare, Hwin, who both share their desire for freedom. Together they embark on a grand adventure through deserts and mountains, risk near capture, encounter danger, face the unknown, take part in a battle, and finally, find themselves and their destined place in the sun.
            </p>
            <p>Reconnect with beloved characters from The Lion, the Witch, and the Wardrobe - the grown-ups Susan, Edmund, and Lucy now reigning monarchs of Narnia, the faun Tumnus, and of course, the Great Lion, Aslan - and meet many new colorful and fascinating characters.</p>
          </div>

          <div className="d-flex flex-column flex-lg-row justify-content-start">
          <div className="characterBox mt-11 w-100">
            <p className="secondaryTitle">Characters</p>
            <p>Aslan, Shasta, Bree, Aravis, Hwin, Storyteller, Singing Lady, Tarkaan, Aksheesh, Kidrash, King Cor, Rabadash, King Lune, Tisroc, Ahosta Tarkaan, Haround, Peridan,Lasaraleen, Lucy, King Edmuned, Susan, Tumnus, Sallowpad, The Raven, Prince Corin, Ardashir , Ensemble
            </p>
          </div>

          </div>
          
        </article>
        <div className="showDetailImgContainer">
          <img
            src="/thumbnail/THBBanner.webp"
            alt="LWWBanner"
            className="showImg"
          />
        </div>
        <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>
              
              <div className="gallery-images">
              <div className="img-box"><img src="/thhb/1.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/2.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/3.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/4.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/5.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/6.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/7.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/8.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/9.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/10.webp" alt="" /></div>
              <div className="img-box"><img src="/thhb/11.webp" alt="" /></div>
              <div className="img-box"></div>
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

export default THHB