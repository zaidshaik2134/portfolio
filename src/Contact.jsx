// Contact.jsx file mein yeh poora code paste karein

import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <form onSubmit={handleSubmit}>
        {/* Yeh dono 1st row mein side-by-side aayenge */}
        <input 
          type="text" 
          placeholder="Your Name" 
          required 
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Your Email"
          required
          value={form.email}
          onChange={e => setForm({ ...form, email: e.target.value })}
        />
        
        {/* Yeh neeche poori width lenge */}
        <textarea
          className="form-group-full" /* <-- YEH CLASS ADD HUI HAI */
          placeholder="Your Message"
          required
          rows="5" /* Text area ko thoda bada kar dete hain */
          value={form.message}
          onChange={e => setForm({ ...form, message: e.target.value })}
        ></textarea>
        
        <button className="btn form-group-full">Send</button> {/* <-- YEH CLASS ADD HUI HAI */}
      </form>
    </section>
  );
}