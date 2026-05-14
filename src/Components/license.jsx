import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Modal, Button } from 'react-bootstrap';


function license() {
  const form = useRef();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const serviceID = 'service_ktdowoq';
  const publicID = 'b-Z5OsPmnLA83w3xg';
  const templateID = 'template_9n63r2o';

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form inputs
    const formData = new FormData(form.current);
    for (const [key, value] of formData.entries()) {
      if (value.trim() === '') {
        alert(`The field "${key}" is empty.`);
        return;
      }
    }

    // Send email if validation passes
    emailjs.sendForm(serviceID, templateID, form.current, {
      publicKey: publicID,
    })
    .then(
      () => {
        handleShow();
      },
      (error) => {
        console.log('FAILED...', error.text);
      }
    );
  };


  return (
    <>
      <div className="container-fluid license">
        <div className="container details">
              <div className="row row-cols-1 row-cols-lg-2">
              <div className="col">
              <form className="pb-5" ref={form} onSubmit={sendEmail}>
                <div className="mb-3">
                  <label htmlFor="fullName" className="form-label">
                    Full Name <span className="important">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    aria-describedby="user fullname"
                    required
                    name="user_name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="userEmail" className="form-label">
                    Email <span className="important">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="userEmail"
                    aria-describedby="emailHelp"
                    required
                    name="user_email"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="emailSubject" className="form-label">
                    Subject <span className="important">*</span>
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="emailSubject"
                    aria-describedby="subject to the email"
                    name="subjects"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="emailMessage" className="form-label">
                    Message <span className="important">*</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="emailMessage"
                    name="message"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn " id="btn">
                  Send Email
                </button>
              </form>
            </div>
            <div className="col order-0 order-md-1 extraDetails">              
              <h1 style={{fontSize:"18px", color: "#e22823", textAlign:"start", fontWeight: "500"}} className=" text-capitalize">Details</h1>
              <div className="d-flex flex-row align-items-start">
                <span className="bxsmap"></span>
                <p className="text-start">
                  <strong className="fw-bold">Address: </strong>  Unit 606,
                  Greenbelt Mansions, 106 Perea, Legazpi Village, Makati, 1200
                  Metro Manila
                </p>
              </div>
              <div className="d-flex flex-row align-items-start">
                <span className="phphonefill"></span>
                <p className="text-start">
                  <strong className="fw-bold">Phone: </strong> 0917-566-4777
                </p>
              </div>
              <div className="d-flex flex-row align-items-start">
                <span className="clarityemailsolid"></span>
                <p className="text-start">
                  <strong className="fw-bold">Email: </strong>{" "}
                  playshopworkshops@gmail.com
                </p>
              </div>
              <h1 style={{fontSize:"18px", color: "#e22823", textAlign:"start", fontWeight: "500"}} className=" text-capitalize">Office Hours</h1>
              <p>
                Monday - Friday 9am to 5pm <br />
                Saturday - 9am to 2pm <br />
                Sunday - Closed <br />
              </p>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} style={{margin: "auto"}}>
        
        <Modal.Body closeButton className="mt-5 mb-5 text-center">
            <h1 style={{color: "#000", fontWeight: "600"}} className="mb-5">Email sent successfully!</h1>
        <Button className="btn btn-outline-none btnModal" onClick={() => { handleClose(); window.location.reload(); }}>
            Close
          </Button>
        </Modal.Body>
        
      </Modal>
    </>
  );
}

export default license;
