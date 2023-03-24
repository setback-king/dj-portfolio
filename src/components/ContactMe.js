import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const [isSent, setIsSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kxt6hib",
        "template_46hmi54",
        form.current,
        "novmMy7YsOUMEzUzb"
      )
      .then(
        (result) => {
          e.target.reset();
          setIsSent(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" name="user_name" placeholder="Name *" required />
          <input
            type="email"
            name="user_email"
            placeholder="Email *"
            required
          />
          <input type="text" name="user_subject" placeholder="Subject" />
          <textarea name="message" placeholder="Message *" rows="10" required />
          <input type="submit" value="Send" className="submitBtn" />
        </div>
      </form>
      {isSent && (
        <p
          style={{
            fontStyle: "italic",
            marginTop: "30px",
            marginBottom: "-20px",
          }}
        >
          Thank you! Your message has been sent!
        </p>
      )}
    </div>
  );
};

export default ContactMe;
