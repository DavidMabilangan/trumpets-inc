import React, { useRef, useState } from "react";
import "../form.css";
import emailjs from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';

function MailForm() {
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
      <div className="container mb-5 mail" style={{position:"relative"}}>
        <div className="container p-5 p-lg-0" style={{position:"relative"}}>
          <div className="row row-cols-1 row-cols-xl-2 pt-3 pt-lg-5 pb-3 pb-lg-5 " style={{position:"relative"}}>
            <div className="col">
              <form ref={form} onSubmit={sendEmail}>
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
            <div className="col contactBackgroundHolder d-none d-md-block">
              <div className="contactBackground"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Bootstrap Modal */}
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

export default MailForm;
