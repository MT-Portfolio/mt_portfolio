


"use client";
import React, { useRef , useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const [activeInputBoxes, setActiveInputBoxes] = useState([])
    const form = useRef();
  
    // use Email js for recive message
  
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs
        .sendForm(
          "service_u4xs1nd", // SERVICE_ID
          "template_imqaowo", // TEMPLATE_ID
          form.current,
          "8-K8OilxZSq_iIDlc" // USER_ID
        )
        .then(
          (result) => {
            console.log(result);
            toast.success("Message Sent successfully!", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            document.getElementById("myForm").reset();
          },
          (error) => {
            toast.error("Ops Message not Sent!", {
              position: "top-right",
              autoClose: 5000,
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
    <form id="myForm" className="contact-form"  ref={form}
              onSubmit={sendEmail}>
                    <div className="form-input-item mb-60">
                <label style={activeInputBoxes.includes('name')? {color:'#FE7878'}:{}} className="input-lebel name">name *</label>
                <input
                  name="name"
                  className={`input-box name ${activeInputBoxes.includes('name') && 'height'} `}
                  type="text"
                  placeholder="Full name"
                  required
                  onClick={()=>setActiveInputBoxes(pre=>!pre.includes('name') ? [...pre,'name'] : pre)}
                  style={activeInputBoxes.includes('name')? {borderColor:'#FE7878'}:{}}
                />
              </div>
              <div className="form-input-item mb-60">
                <label style={activeInputBoxes.includes('gmail')? {color:'#1B74E4'}:{}} className="input-lebel gmail">Email *</label>
                <input
                  name="email"
                  className={`input-box gmail ${activeInputBoxes.includes('gmail') && 'height'} `}
                  type="Email"
                  placeholder="Please enter a valid email"
                  required
                  onClick={()=>setActiveInputBoxes(pre=>!pre.includes('gmail') ? [...pre,'gmail'] : pre)}
                  style={activeInputBoxes.includes('gmail')? {borderColor:'#1B74E4'}:{}}
                />
              </div>
              <div className="form-input-item mb-40">
                <label  style={activeInputBoxes.includes('message')? {color:'#CE65F3'}:{}} className="input-lebel message">Message *</label>
                <textarea
                  name="message"
                  className={`input-box message ${activeInputBoxes.includes('message') && 'height'} `}
                  placeholder="Let's chat! Tell me more about your project."
                  onClick={()=>setActiveInputBoxes(pre=>!pre.includes('message') ? [...pre,'message'] : pre)}
                  style={activeInputBoxes.includes('message')? {borderColor:'#CE65F3'}:{}}
                  cols="30"
                  rows="20"
                ></textarea>
              </div>
                    <div className="form-btn-wrap">
                      <button type="submit" value="Send" className="form-btn">
                        submit
                      </button>
                    </div>
                  </form>
  )
}
