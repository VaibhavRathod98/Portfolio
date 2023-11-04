// import "./FormStyles.css"

// import React from 'react'

// const Form = () => {
//   return (
//     <div className="form">
//         <form>
//             <lable>Your Name</lable>
//             <input type="text" required></input>
//             <lable>Email</lable>
//             <input type="email" required></input>
//             <lable>Subject</lable>
//             <input type="text" required></input>
//             <lable>Message</lable>
//             <textarea rows="6" placeholder="Type your message..."></textarea>
//             <button className="btn">Submit</button>
//         </form>
//     </div>
//   )
// }

// export default Form

import React, { useState } from 'react';
import './FormStyles.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    setIsSubmitted(true);
    setSuccessMessage('Your message was successfully submitted! We will get back to you as soon as possible.');

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    setTimeout(() => {
      setSuccessMessage('');
      window.location.href='/';
    }, 3000);
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>Your Name</label>
        <input
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          required
        />
        <label>Email</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          required
        />
        <label>Subject</label>
        <input
          type="text"
          value={formData.subject}
          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
          required
        />
        <label>Message</label>
        <textarea
          rows="6"
          placeholder="Type your message..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          required
        />
        <button className="btn" type="submit">Submit</button>
      </form>

      {isSubmitted && (
        <div className="popup-message">
          {successMessage}
        </div>
      )}
    </div>
  );
};

export default Form;
