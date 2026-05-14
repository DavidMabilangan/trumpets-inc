import  { useState } from "react";
import { NavLink} from "react-router-dom";
// import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination  } from "swiper/modules"; // Import Autoplay module
import "swiper/css"; // Swiper core styles
import "swiper/css/autoplay";
import "swiper/css/pagination"

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  // Function to close navbar when clicking a link
  const closeNavbar = () => setIsOpen(false);

  return (
    <>
      <section className="container-fluid banner-container home-bg">
        {/* hero section */}
        <div className="container">
          <h1 className="w-75 title">Bringing Stories of Faith to Life Through Theater</h1>
        </div>
      </section>
      <section>
        {/* shows section */}
        <div className="container-lg homeShows">
          <div className="title-btn d-flex align-items-center" >{/*title plus btn */}
            <h1 className="ft-red">SHOWS</h1>
            <NavLink
              to="/Show"
              className="nav-link desk-btn btn"
              activeclassname="active"
              onClick={closeNavbar}
            >
              
                VIEW MORE
              
            </NavLink>
          </div>
          <div className="container p-lg-0">
            <p>
              Creating original musicals that aim to teach, inspire, and
              entertain
            </p>
          </div>
          <Swiper
            // install Swiper modules
            modules={[Autoplay, Pagination ]}
            className="pt-2 pb-5 cardHolder"
            pagination={{clickable: true}}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },  // Tablets
              768: { slidesPerView: 2, spaceBetween: 30 },  // Medium screens
              1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
            }}
          >
            <SwiperSlide>
              <NavLink
                to="/TLTW"
                className="card nav-link showCard"
                activeclassname="active"
                onClick={closeNavbar}
              >
                <div className="card-img-container imgs">
                  <img
                    src="thumbnail/LWWBanner.webp"
                    className="card-img-top"
                    alt="LWWBanner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">
                    The Lion, The witch and the wardrobe
                  </h5>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to="/THB"
                className="card nav-link showCard"
                activeclassname="active"
                onClick={closeNavbar}
              >
                <div className="card-img-container imgs">
                  <img
                    src="thumbnail/BBBanner.webp"
                    className="card-img-top"
                    alt="BBBanner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">The Bluebird of Hapiness</h5>
                </div>
              </NavLink>
            </SwiperSlide>
            <SwiperSlide>
              <NavLink
                to="/THHB"
                className="card nav-link showCard"
                activeclassname="active"
                onClick={closeNavbar}
              >
                <div className="card-img-container imgs ">
                  <img
                    src="thumbnail/THBBanner.webp"
                    className="card-img-top"
                    alt="THBBanner"
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">The Horse and his Boy</h5>
                </div>
              </NavLink>
            </SwiperSlide>
          </Swiper>
        </div>
         
      </section>
      <section>
        {/* go to trumpets playshop website */}
        <div className="container workShops">
          <div className="d-flex flex-row justify-content-between align-items-center justify-content-center container headingContainer px-4 px-lg-0">
            <h1>Workshops</h1>
            <a
              href="https://trumpetsplayshop.com/html/class/class.html"
              className=" desk-btn btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              View more
            </a>
          </div>
          <div className="container p-4 p-lg-0">
            <p>
              Playshop is Trumpets’ workshop and training program that sets the
              stage for emerging and world class talent in the performing arts.
            </p>
          </div>
          <div className="pt-2 pb-5 cardHolder">
              <Swiper
            // install Swiper modules
            modules={[Autoplay, Pagination ]}
            className="pt-2 pb-5 cardHolder"
            pagination={{clickable: true}}
            loop={true}
            autoplay={{
              delay: 2000,
            }}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },  // Tablets
              768: { slidesPerView: 2, spaceBetween: 30 },  // Medium screens
              1024: { slidesPerView: 3, spaceBetween: 40 }, // Large screens
            }}
          >
            <SwiperSlide>
               <div className="card">
              <img
                src="CTheater.webp"
                className="card-img-top"
                alt="CTheater"
              />
              <div className="card-body">
                <h5 className="card-title">Performance</h5>
                <p>
                  Classes under the Performance category are for kids ages 3.5
                  and up. These theater, dance, and singing classes introduce
                  students to musical theater concepts and fundamentals, singing
                  techniques, various dance styles, and ways to explore
                  artistry, depending on age and skill level.
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
               <div className="card">
              <img
                src="DanceClass.webp"
                className="card-img-top"
                alt="DanceClass"
              />
              <div className="card-body">
                <h5 className="card-title">Power</h5>
                <p>
                  Power classes are for students ages seven years old and above.
                  These classes give you the power to Speak Up and Stand Out!
                  Experienced and well-known professionals in the modeling and
                  speech industry will be your mentors.
                </p>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
             <div className="card">
              <img
                src="MusicTheater.webp"
                className="card-img-top"
                alt="Music Theater"
              />
              <div className="card-body">
                <h5 className="card-title">Premium</h5>
                <p>
                  Students will have hands-on experience in preparation for
                  professional musical theater productions. Premium classes give
                  students the opportunity to be mentored by theater veterans
                  and to launch their theater careers.
                </p>
              </div>
            </div>
            </SwiperSlide>
              </Swiper>
               <NavLink
            to="https://www.trumpetsplayshop.com/html/class/class.html"
            target="_blank"
            className="nav-link mobile-btn btn mt-3"
            activeclassname="active"
            onClick={closeNavbar}
          >
            VIEW MORE
          </NavLink>
           
          </div>
        </div>
        {/* <div className="container news pt-5 pb-5">
            <div className="box1">
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PvE9torRNuQ?si=25ZWwOCEnWJb0QoK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="box2 d-flex flex-column justify-content-center">
              <h1 className="ft-red" style={{fontSize:"30px"}}> Whats New</h1>
              <p>COMING SOON THIS JULY 2025</p>
            </div>
        </div> */}
      </section>
    </>
  );
}

export default Home;
