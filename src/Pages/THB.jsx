import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Mailform from "../Components/MailForm";


function THB() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);
  return (
    <>
        <main>
        <div className="container showContainer">
          <article>
            <h1 className="title">The Bluebird of Happiness</h1>
            <div className="DescriptionBox mt-4">
              <p className="secondaryTitle">SYNOPSIS</p>
              <p>
              This Trumpets adaptation follows the wondrous adventures of brother and sister, Tyltyl and Mytyl. Discontent and disappointed by having less in life than their neighbors,  they seek the elusive bluebird of happiness in an attempt to find the “more” which their hearts desire. Accompanied by their loyal dog Tylo, cunning cat Tylette, and their new friend Light, the children face friends and foes alike as they search for the true meaning of happiness.
              </p>
              <p>
              The Blue Bird (A Fairy Play in Six Acts) premiered at the Moscow Art Theatre in 1908, while its first London production was at the Theatre Royal Haymarket in early 1909 with several revivals in the following years. The original Broadway production opened in 1910 with revivals in 1911 and 1924. Several movie versions of The Blue Bird have been made over the years with one released by 20th Century Fox  in 1940, starring Shirley Temple.
              </p>
              <p>The original play had magic, humor, and universal truths. This stage version by Trumpets boasts no less with the added value and joy of memorable, and heart-stirring music.</p>
            </div>

            <div className="d-flex flex-column flex-lg-row justify-content-start">
            <div className="characterBox mt-11 w-100">
              <p className="secondaryTitle">Characters</p>
              <p>
              Mytyl<br /> Tyltyl<br /> Mama Tyl<br /> Papa Tyl<br /> Father Time<br /> Berylune<br /> Tylo<br /> Light<br /> Tylette<br /> Grandpa<br /> Grandma<br /> Night<br /> Red<br /> Oak<br /> Fir<br /> Cedar<br /> Luxuries<br /> Emcee<br /> Temps<br /> Innocence<br /> Optimism<br /> Time<br /> Nightmares<br /> Ensemble (Adults and Children) 
              </p>
            </div>

            <div className="characterBox mt-11 w-100">
              <p className="secondaryTitle">Songs</p>
              <p>
              Much More <br /> Lullaby <br /> Never Like Christmas<br /> Illumination<br /> Remembering When<br /> Tango of Treachery<br /> In Your Reach<br /> Fight<br /> Bluebird of Happiness<br /> Tylo’s Spot<br /> Be Born<br /> Graveyard<br /> Christmas Morning<br /> A Christmas Carol<br /> Lap of Luxury<br /> Catch Every Dream<br /> Revenge Revenge
              </p>
            </div>
            </div>
            
          </article>
          <div className="showDetailImgContainer">
            <img
              src="/thumbnail/BBBanner.webp"
              alt="BBBanner"
              className="showImg"
            />
          </div>
          <div className="sampleImage container-fluid">
            <div className="container">
              <h1>Gallery</h1>
              <div className="gallery-images">
              <div className="img-box"><img src="/11/1.png" alt="" /></div>
              <div className="img-box"><img src="/11/2.png" alt="" /></div>
              <div className="img-box"><img src="/11/3.png" alt="" /></div>
              <div className="img-box"><img src="/11/4.png" alt="" /></div>
              <div className="img-box"><img src="/11/5.png" alt="" /></div>
              <div className="img-box"><img src="/11/6.png" alt="" /></div>
              <div className="img-box"><img src="/11/7.png" alt="" /></div>
              <div className="img-box"><img src="/11/8.png" alt="" /></div>
              <div className="img-box"><img src="/11/9.png" alt="" /></div>
              <div className="img-box"><img src="/11/10.png" alt="" /></div>
              <div className="img-box"><img src="/11/11.png" alt="" /></div>
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

export default THB