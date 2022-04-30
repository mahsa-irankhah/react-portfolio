import React from 'react';
import "./Contact.scss";

const Contact = () => {
    return (
      <div id="contact">
        <div className="contact shadow">
          <h2 className="fw-bold opacity-75">Let's get in touch!</h2>
          <h6 className="mb-4">
            If you have a project or a full-time job position which fits to my
            skills, you are very welcome to contact me so we can talk about it.
            I hope we can build something amazing together!
          </h6>
          <hr />
          <div className="contact-info mt-3">
            <h4 className="fw-bold opacity-50">Email</h4>
            <p className="fw-bold opacity-75">m.irankhah@gmail.com</p>
            <h4 className="fw-bold opacity-50">Phone number</h4>
            <p className="fw-bold opacity-75">+98937775588</p>
          </div>
        </div>
      </div>
    );
};

export default Contact;