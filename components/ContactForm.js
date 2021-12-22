import { useState } from "react";

const ContactForm = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({});

  const [buttonText, setButtonText] = useState("Send");

  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors["fullname"] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors["subject"] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending");
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send");
      console.log(fullname, email, subject, message, "Form is valid");
    } else {
      console.log("not_valid");
    }
  };

  return (
    <div className="col-lg-8">
      <div className="blog__details__form text-center">
        <h4>Fill The Form Below</h4>
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <input
                placeholder="Name"
                type="text"
                value={fullname}
                onChange={(e) => {
                  setFullname(e.target.value);
                }}
                name="fullname"
              />
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <input
                placeholder="Email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="col-lg-12 col-md-6 col-sm-6">
              <input
                placeholder="Subject"
                type="text"
                value={subject}
                onChange={(e) => {
                  setSubject(e.target.value);
                }}
                name="subject"
              />
            </div>
            <div className="col-lg-12">
              <textarea
                placeholder="Message"
                name="message"
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
              ></textarea>
              <button type="submit" className="site-btn">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
