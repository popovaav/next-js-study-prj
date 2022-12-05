import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

const Notification = ({ title, message, status }) => {
  let statusClasses = '';

  if (status === 'success') {
    statusClasses = styles.success;
  }

  if (status === 'error') {
    statusClasses = styles.error;
  }

  const cssClasses = `${styles.notification} ${statusClasses}`;

  return ReactDOM.createPortal((
    <div className={cssClasses}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>
  ), document.getElementById('notifications'));
};

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired
};

export default Notification;
