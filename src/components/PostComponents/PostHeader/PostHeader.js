import Image from 'next/image';
import PropTypes from 'prop-types';
import styles from './sass/PostHeader.module.css';

const PostHeader = ({ title, image }) => {
  return (
    <header className={styles.header}>
      <h1>{title}</h1>
      <Image src={image} alt={title} height={150} width={200} />
    </header>
  );
};

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default PostHeader;
