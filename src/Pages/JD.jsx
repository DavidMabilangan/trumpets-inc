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
          <h1 className="title">Joseph the Dreamer</h1>
          <div className="DescriptionBox mt-4 ">
            <p className="secondaryTitle">SYNOPSIS</p>
            <p>
            Joseph the Dreamer is based on the Biblical story of Jacob’s son who saves Egypt with the power of his dreams.
            </p>
            <p>
            It is no secret that Jacob favors Joseph above his twelve sons and so he gifts him with a coat of many colors. This display of affection causes the older brothers to resent Joseph. Their ire grows even more when Joseph reveals prophetic dreams that he would one day become lord over all of them. Blinded by rage and jealousy, the brothers plot Joseph’s downfall.
            </p>
            <p>Faced with one misfortune after another, even imprisonment, Joseph’s faith in God is tested. But with the power of prayer and wisdom from his Mother, he rises above his tribulations, saves Egypt through the blessing of God and his prophetic dreams, and finally reconciles with his family.</p>
            <p>Originally written by the late Freddie Santos, Trumpets’ Joseph the Dreamer is told through vibrant songs and energetic dance numbers all while proclaiming the message to never lose hope in the Lord, and most of all, to “Never Look Down!”
            </p>
          </div>
          <div className="d-flex flex-column flex-lg-row justify-content-start" >
          <div className="characterBox mt-9 w-100" >
            <p className="secondaryTitle">Characters</p>
            <p>
            Joseph <br /> Jacob <br /> Asenath<br /> Rachel<br /> Potiphar<br /> Potiphar’s Wife<br /> Reuben<br /> Simeon<br /> Levi<br /> Judah<br /> Dan<br /> Naphtali<br /> Gad<br /> Asher<br /> Issachar<br /> Zebulun<br /> Benjamin<br /> Young Joseph/Manasseh<br /> Auctioneer/Pharaoh<br /> Ensemble
            </p>
          </div>

          <div className="characterBox mt-9 w-100">
            <p className="secondaryTitle">Songs</p>
            <p>
            Praise His Name<br /> The Hand Song<br /> Like Father<br /> Like Son<br /> Colors<br /> Down with Joseph<br /> He Will Carry You<br /> Lead Me<br /> Incredible<br /> Mae East<br /> In Moments Like These<br /> He Opens a Window<br /> A New Beginning<br /> Down and Back<br /> Everything I Need
            </p>
          </div>
          </div>
        </article>
        <div className="showDetailImgContainer">
          <img
            src="/thumbnail/jtdOpti.webp"
            alt="jtdOpti"
            className="showImg"
          />
        </div>
        <div className="sampleImage container-fluid">
          <div className="container">
            <h1>Gallery</h1>
            <div className="gallery-images">
              <div className="img-box"><img src="/9/1.webp" alt="" /></div>
              <div className="img-box"><img src="/9/2.webp" alt="" /></div>
              <div className="img-box"><img src="/9/3.webp" alt="" /></div>
              <div className="img-box"><img src="/9/4.webp" alt="" /></div>
              <div className="img-box"><img src="/9/5.webp" alt="" /></div>
              <div className="img-box"><img src="/9/6.webp" alt="" /></div>
              <div className="img-box"><img src="/9/7.webp" alt="" /></div>
              <div className="img-box"><img src="/9/8.webp" alt="" /></div>
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