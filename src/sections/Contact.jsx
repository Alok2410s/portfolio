import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implementation for form submission
    alert("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
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
          <button type="submit" className="w-full py-3 mt-2 bg-gradient-to-r from-royal to-fuchsia rounded-md font-semibold text-white hover:opacity-90 transition-opacity">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
