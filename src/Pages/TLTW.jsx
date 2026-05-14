import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";


function TLTW() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);
  return (
    <>
    <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">The Lion, The Witch and The Wardrobe</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
                The Lion, The Witch, and The Wardrobe begins when Peter, Susan,
                Edmund, and Lucy Pevensie arrive at the country manor of
                Professor Digory Kirke, sent there by their parents to escape
                the air-raids over London during World War II. Lucy, the
                youngest, is the first to stumble upon the wardrobe that leads
                to a cold and wintry land called Narnia. She meets the friendly
                faun, Mr. Tumnus, who reveals that Narnia is cursed with a
                perpetual winter under the rule of the evil White Witch.{" "}
              </p>
              <p>
                In the wake of realizing their destiny to fulfill a prophecy
                freeing Narnia from the clutches of winter and evil, the
                Pevensie siblings face a most dangerous challenge. Aslan, the
                true ruler of Narnia, lends his power to strengthen the four
                siblings and gives them the courage to face the White Witch in
                battle and finally reign over Narnia with joy and peace.{" "}
              </p>
              <p></p>
              <p>
                Trumpets’ version of The Lion, The Witch and The Wardrobe,
                written by Jaime Del Mundo and Luna Griño-Inocian, has been
                lauded with much praise for its compelling storytelling
                accompanied by vibrant music and lyrics, while staying true to
                the values and message that make this C.S. Lewis novel a beloved
                tale.
              </p>
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-start">
            <div className="characterBox mt-3 w-100">
              <p className="secondaryTitle">Characters</p>
              <p>
                Aslan <br /> Peter Susan <br /> Edmund <br /> Lucy <br /> Queen
                Jadis
                <br /> Mr. Tumnus <br /> Mr. Beaver
                <br />
                Mrs. Beaver
                <br /> Professor Digory Kirke <br /> Ensemble/Citizens of Narnia
              </p>
            </div>

            <div className="characterBox mt-3 w-100">
              <p className="secondaryTitle">Songs</p>
              <p>
                Open Doors <br />
                Hello
                <br />
                Turkish Delight
                <br />
                Beloved Narnia
                <br />
                Psst… Psst
                <br />
                Aslan
                <br />
                What Am I Feeling
                <br />
                Sing for Joy
                <br />
                It’s a Miracle
                <br />
                Aslan’s Aria
                <br />
                Cair Paravel
                <br />
                Sacrifice
                <br />
                Deep Within
                <br />
                Deep Magic
                <br />
                Quintet
                <br />
                Aslan is Ours
                <br />
                The Most Precious Gift of All
                <br />
                Awake, Oh Narnia
                <br />
                You Can Be
              </p>
            </div>
            </div>
            
          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/LWWBanner.webp"
              alt="LWWBanner"
              className="showImg"
            />
          </div>
          <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>
              <div className="gallery-images">
              <div className="img-box"><img src="/3/1.png" alt="" /></div>
              <div className="img-box"><img src="/3/2.png" alt="" /></div>
              <div className="img-box"><img src="/3/3.png" alt="" /></div>
              <div className="img-box"><img src="/3/4.png" alt="" /></div>
              <div className="img-box"><img src="/3/5.png" alt="" /></div>
              <div className="img-box"><img src="/3/6.png" alt="" /></div>
              <div className="img-box"><img src="/3/7.png" alt="" /></div>
              <div className="img-box"><img src="/3/8.png" alt="" /></div>
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

export default TLTW