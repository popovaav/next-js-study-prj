import { useState } from 'react';
import styles from './sass/ContactForm.module.css';

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const sendMessageForm = (event) => {
    event.preventDefault();
    fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify({
        email,
        name,
        message
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMessageForm}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Message</label>
          <textarea
            rows="5"
            id="message"
            value={message}
            required
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
