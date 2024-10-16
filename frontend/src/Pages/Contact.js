// src/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    contactNo: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setSubmitted(true);
  };

  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
   
      color: '#0000',
      margin: 0,
      padding: 0,
    },
    header: {
      textAlign: 'center',
      marginTop: '50px',
      color: '#4a90e2',
    },
    form: {
      maxWidth: '400px',
      margin: '0 auto',
      background: 'white',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      padding: '20px',
    },
    label: {
      fontWeight: 'bold',
      marginBottom: '5px',
      display: 'block',
      color: '#555',
    },
    input: {
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      width: '100%',
      fontSize: '16px',
      transition: 'border-color 0.3s',
    },
    inputFocus: {
      borderColor: '#4a90e2',
      outline: 'none',
    },
    button: {
      padding: '10px',
      backgroundColor: '#4a90e2',
      color: 'white',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '16px',
      transition: 'background-color 0.3s, transform 0.2s',
    },
    buttonHover: {
      backgroundColor: '#357ABD',
    },
    thankYou: {
      textAlign: 'center',
      fontSize: '18px',
      color: '#4a90e2',
      marginTop: '20px',
    },
  };

  return (
    <div style={styles.body}>
      <h1 style={styles.header}>Contact Us</h1>
      {submitted ? (
        <h2 style={styles.thankYou}>Thank you for your message!</h2>
      ) : (
        <form style={styles.form} onSubmit={handleSubmit}>
          <div>
            <label style={styles.label} htmlFor="username">Username:</label>
            <input 
              style={styles.input} 
              type="text" 
              id="username" 
              name="username" 
              value={formData.username} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="contactNo">Contact No:</label>
            <input 
              style={styles.input} 
              type="tel" 
              id="contactNo" 
              name="contactNo" 
              value={formData.contactNo} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div>
            <label style={styles.label} htmlFor="message">Message:</label>
            <textarea 
              style={styles.input} 
              id="message" 
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              required 
              rows="4"
            />
          </div>
          <button 
            style={styles.button} 
            type="submit"
            onMouseOver={(e) => e.currentTarget.style.backgroundColor = styles.buttonHover.backgroundColor}
            onMouseOut={(e) => e.currentTarget.style.backgroundColor = styles.button.backgroundColor}
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
