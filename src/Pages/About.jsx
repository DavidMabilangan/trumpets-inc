import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  return (
    <section className="aboutContainer">
      <div className="container-fluid banner-container" id="Abouthero">
        {/* hero section */}
        <div className="container">
          <h1 className="title">About Trumpets</h1>
        </div>
      </div>
      <section>
        <div className="container p-5">
          <h1 className="ft-red">
            Our <span className="text-bold">Story</span>
          </h1>
          <p>
            <span className="fw-bold">Founded in 1991, Trumpets is Asia’s premier Christian theater company, renowned for its vibrant, high-quality productions.
            </span>
            <br /> <br />
            Over the years, Trumpets has built a reputation for creating dynamic, and artistically excellent performances that have captivated audiences and earned widespread acclaim. Recognized by leading figures in the Philippine theater industry, the company has consistently delivered both critically acclaimed and successful productions, solidifying its place as a trailblazer in faith-based entertainment.<br /> <br />
            Among Trumpets’ well-loved original productions are: JOSEPH THE DREAMER, FABLES AND PARABLES, SO DAVID, N.O.A.H (NO ORDINARY AQUATIC HABITAT), the Filipino musical PAMILYA MALETA, and a hit concert entitled THE SOUND OF TRUMPETS. Trumpets is also known for its outstanding adaptations of classic tales such as: C.S. Lewis’ THE LION, THE WITCH, AND THE WARDROBE and THE HORSE AND HIS BOY; Hans Christian Andersen’s THE LITTLE MERMAID; Oscar Wilde’s THE YOUNG KING, and Maurice Maeterlinck’s THE BLUEBIRD OF HAPPINESS.
            <br /> <br />
            Trumpets’ mission is to not only develop world-class productions, but to teach, inspire, entertain, and to change lives through theater.
          </p>
        </div>
      </section>
      <section className="banner2">
        <img src="/AboutBanner2.png" alt="AboutBanner2" />
      </section>
      <section className="MV mt-5 mb-5">
        <div className="container">
          <div className="">
            <div className="mv row row-cols-1 ">
              <div className="col">
                <p>
                  <span className="text-bold ft-red fs-2">MISSION</span> <br />
                  <br />
                  Redeeming the performing arts for God.
                  <br />
                  <br />
                  We strive to ensure that everything we do—on and off the stage—reflects God’s love and teachings. Through our words, actions, and performances, we seek to inspire, uplift, and draw others closer to Him.
                  <br />
                  <br />
                </p>
              </div>
              <div className="col">
                <p>
                  <span className="text-bold ft-red fs-2">VISION</span>
                  <br />
                  <br />
                  Trumpets aspires to be a world-class theater company that nurtures talent, creativity, and purpose in the performing arts.
                  <br />
                  <br />
                  Guided by Christian principles, we strive to attract, develop, and showcase exceptional artists while producing inspiring, values-driven productions that resonate with audiences. With a team of passionate and highly skilled professionals, we are committed to creating meaningful experiences that uplift, engage, and spark positive transformation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="banner3 pt-5 pb-5">
        <img src="/AboutBanner3.png" alt="AboutBanner3" />
      </section>
      <section className="pt-5 pb-5">
        <div className="container">
          <h1 className="ft-red text-start">
            <span className="text-bold"> OUR MESSAGE</span>
          </h1>
          <p>
          Trumpets’ productions are designed to inspire, uplift, and resonate with audiences from all walks of life. At the heart of our storytelling are universal themes of family solidarity, love, hope, forgiveness, reconciliation, and faith. These are values that transcend generational, cultural, and societal boundaries.
            <br />
            <br />
          </p>
          <p>
          With a commitment to artistic excellence and a foundation rooted in Christian principles, we craft performances that not only entertain but also spark meaningful reflection and conversation. 
          </p>
        </div>
      </section>

      {/* <div
        className="container-fluid maps"
        style={{ backgroundColor: "#000", padding: " 100px 0" }}
      >
        <div className="container">
          <div
            className="row row-cols-1 row-cols-lg-2"
            style={{ margin: "auto" }}
          >
            <div className="col ">
              <div>
                <h2 className="ft-red">Contact Details</h2>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M12 14c2.206 0 4-1.794 4-4s-1.794-4-4-4s-4 1.794-4 4s1.794 4 4 4m0-6c1.103 0 2 .897 2 2s-.897 2-2 2s-2-.897-2-2s.897-2 2-2"
                      />
                      <path
                        fill="currentColor"
                        d="M11.42 21.814a.998.998 0 0 0 1.16 0C12.884 21.599 20.029 16.44 20 10c0-4.411-3.589-8-8-8S4 5.589 4 9.995c-.029 6.445 7.116 11.604 7.42 11.819M12 4c3.309 0 6 2.691 6 6.005c.021 4.438-4.388 8.423-6 9.73c-1.611-1.308-6.021-5.294-6-9.735c0-3.309 2.691-6 6-6"
                      />
                    </svg>{" "}
                  </span>
                  <span className="fw-bold text-white">Address: </span> Unit
                  606, Greenbelt Mansions, 106 Perea, Legazpi Village, Makati,
                  1200 Metro Manila.
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24c1.12.37 2.33.57 3.57.57c.55 0 1 .45 1 1V20c0 .55-.45 1-1 1c-9.39 0-17-7.61-17-17c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
                      />
                    </svg>{" "}
                  </span>
                  <span className="fw-bold text-white">Phone: </span>{" "}
                  09175664777
                </p>
                <p>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30"
                      height="30"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7l8-5V6l-8 5l-8-5v2z"
                      />
                    </svg>
                  </span>
                  &nbsp;
                  <span className="fw-bold text-white">Email: </span>
                  <span className="text-decoration-underline">
                    playshopworkshops@gmail.com
                  </span>
                </p>
                <h2 className="ft-red">Office hours</h2>
                <p>Monday to Friday from 9am to 4pm</p>
              </div>
            </div>
            <div className="col text-center">
              {" "}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d965.4447274945379!2d121.01954099527548!3d14.554631984625868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397c90f95f5f733%3A0x5816979ae912bbc6!2sGreenbelt%20Mansion!5e0!3m2!1sen!2sph!4v1720623531287!5m2!1sen!2sph"
                width="100%"
                height="400"
                style={{ border: "0", borderRadius: "10px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Embed"
              ></iframe>{" "}
            </div>
          </div>
        </div>
      </div> */}
      <section className="pContainer container d-none">
        <h1 className="ft-red">Partners</h1>
        <div className="partners mt-5"></div>
        <Swiper
          modules={[Autoplay]} // Add Autoplay module
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          breakpoints={{
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          <SwiperSlide>
            <img src="/1.webp" alt="1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/2.webp" alt="2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/3.webp" alt="3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/4.webp" alt="4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/5.webp" alt="5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/6.webp" alt="6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/7.webp" alt="7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/8.webp" alt="8" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/9.webp" alt="9" />
          </SwiperSlide>
        </Swiper>
      </section>
    </section>
  );
}

export default About;
