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
            <h1 className="title">The young king</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
              This touching tale by Oscar Wilde is retold in musical form by Jaime del Mundo and Luna Griño-Inocian with inspired music by Lito Villareal. Taking the story out of Wilde’s accustomed melancholy, it is given the feel of a Walt Disney animated feature through heartwarming characters, and spirited music without losing its more moving moments
              </p>
              <p>
              The story opens with a jovial nanny inviting the audience to view the tale of The Young King - a colorful story about a young shepherd boy suddenly called by a dying king and named his heir. 
              </p>
              <p></p>
              <p>
              The young boy is trained rigorously in the matters of the court, however, he becomes so mesmerized by the riches and luxuries of palace life that he loses sight of his purpose as the next King. When the young boy experiences three eye-opening dreams, he learns the truth about the plight of his people and what it means to be a genuine and humble ruler.
              </p>
            </div>

            {/* <div className="characterBox mt-3">
              <p className="secondaryTitle">Characters</p>
              <p>
                Aslan <br /> Peter Susan <br /> Edmund <br /> Lucy <br /> Queen
                Jadis
                <br /> Mr. Tumnus <br /> Mr. Beaver
                <br />
                Mrs. Beaver
                <br /> Professor Digory Kirke <br /> Ensemble/Citizens of Narnia
              </p>
            </div> */}

            {/* <div className="characterBox mt-3">
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
            </div> */}
          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/TYKBanner.webp"
              alt="TYKBanner"
              className="showImg"
            />
          </div>
         {/* <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>
              <ul>
                <li>
                  <img src="/3/1.png" alt="" />
                </li>
                <li>
                  <img src="/3/2.png" alt="" />
                </li>
                <li>
                  <img src="/3/3.png" alt="" />
                </li>
                <li>
                  <img src="/3/4.png" alt="" />
                </li>
                <li>
                  <img src="/3/5.png" alt="" />
                </li>
                <li>
                  <img src="/3/6.png" alt="" />
                </li>
                <li>
                  <img src="/3/7.png" alt="" />
                </li>
                <li>
                  <img src="/3/8.png" alt="" />
                </li>
              </ul>
            </div>
          </div>*/}
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
