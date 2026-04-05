import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle, sending, success
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Simulation fallback if keys are not set yet
    if (!serviceID || serviceID === "your_service_id" || !publicKey) {
      console.warn("EmailJS keys missing. Falling back to simulation mode.");
      setTimeout(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      }, 1500);
      return;
    }

    emailjs.send(
      serviceID,
      templateID,
      {
        from_name: formData.name,
        to_name: "Alok Kumar",
        from_email: formData.email,
        to_email: "your_email@gmail.com",
        message: formData.message,
      },
      publicKey
    ).then(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }).catch((error) => {
        setStatus("idle");
        console.error("EmailJS Error:", error);
        alert("Oops! Something went wrong. Check the console for EmailJS errors.");
    });
  };

  return (
    <section className="c-space section-spacing" id="contact">
      <h2 className="text-heading">Let's Talk</h2>
      <p className="subtext mt-2 mb-10">Whether you have a question or just want to say hi, my inbox is always open.</p>
      
      <div className="max-w-2xl mx-auto grid-default-color p-8 relative overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-royal/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-fuchsia/20 rounded-full blur-3xl" />
        
        <form onSubmit={handleSubmit} className="relative z-10 flex flex-col gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="field-label">Full Name</label>
            <input 
              type="text" 
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              className="field-input field-input-focus" 
              placeholder="Ex., John Doe"
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="field-label">Email Address</label>
            <input 
              type="email" 
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="field-input field-input-focus" 
              placeholder="Ex., johndoe@gmail.com"
              required 
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="field-label">Your Message</label>
            <textarea 
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="field-input field-input-focus resize-none" 
              placeholder="Hi, I think we need a design system..."
              required 
            />
          </div>
          <button 
            type="submit" 
            disabled={status !== "idle"}
            className={`w-full py-3 mt-2 rounded-md font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
              status === "success" ? "bg-mint" : "bg-linear-to-r from-royal to-fuchsia hover:opacity-90 cursor-pointer"
            } ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {status === "idle" && "Send Message"}
            {status === "sending" && (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </>
            )}
            {status === "success" && (
              <>
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                Message Received!
              </>
            )}
          </button>
        </form>
        
        {status === "success" && (
          <p className="mt-4 text-center text-mint font-medium text-sm animate-pulse">
             I'll get back to you as soon as possible!
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
