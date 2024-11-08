"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Map from "../Map";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_n4mkhz9",
        "template_ugoztxr",
        form.current,
        "user_vYmDSd9PwIuRXUQEDjYwN"
      )
      .then(
        (result) => {
          toast.success("Message Sent Successfully!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          document.getElementById("myForm").reset();
        },
        (error) => {
          toast.error("Ops Message Not Sent!", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };

  return (
    <>
      <div className="container">
        <div className="tokyo_tm_contact">
          <div className="tokyo_tm_title">
            <div className="title_flex">
              <div className="left">
                <span>Contact</span>
                <h3>Get in Touch</h3>
              </div>
            </div>
          </div>
          {/* END TITLE */}

          <Map />
          {/* MENU WRAP */}

          <div className="fields">
            <form
              className="contact_form"
              id="myForm"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="first">
                <ul>
                  <li>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      required
                    />
                  </li>
                  {/* END FIRST NAME */}

                  <li>
                    <input
                      type="email"
                      name="user_email"
                      placeholder="Email"
                      required
                    />
                  </li>
                  {/* END EMAIL */}

                  <li>
                    <textarea
                      name="message"
                      placeholder="Message"
                      required
                    ></textarea>
                  </li>
                  {/* END SUBJECT MESSAGE */}
                </ul>
              </div>
              <div className="tokyo_tm_button">
                <button type="submit" className="ib-button">
                  Send Message
                </button>
              </div>
              {/* END SUBMIT BUTTON */}
            </form>
            {/* END FORM */}
          </div>
          {/* END FIELDS */}
        </div>
      </div>
      {/* END COTACT */}
    </>
  );
};

export default Contact;
