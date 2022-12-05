import { useEffect, useState } from 'react';
import styles from './sass/ContactForm.module.css';
import Notification from '../../Notification/Notification';

const sendContactData = async (contactDetails) => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong');
  }
};

const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [reqStatus, setReqStatus] = useState('');
  const [error, setError] = useState('');

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (reqStatus === 'success' || reqStatus === 'error') {
      const timer = setTimeout(() => {
        setReqStatus(null);
        setError(null);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [reqStatus]);

  const sendMessageForm = async (event) => {
    event.preventDefault();
    setReqStatus('pending');
    try {
      await sendContactData({ email, name, message });
      setReqStatus('success');
      setEmail('');
      setName('');
      setMessage('');
    } catch (e) {
      setError(e.message);
      setReqStatus('error');
    }
  };

  let notification;

  if (reqStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message...',
      message: 'Your message is on its way'
    };
  }

  if (reqStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success!',
      message: 'Message sent!'
    };
  }

  if (reqStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: error
    };
  }

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
      {notification && (
        <Notification
          message={notification.message}
          title={notification.title}
          status={notification.status}
        />
      )}
    </section>
  );
};

export default ContactForm;
