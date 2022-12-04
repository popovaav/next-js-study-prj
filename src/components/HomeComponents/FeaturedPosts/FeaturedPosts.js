import PropTypes from 'prop-types';
import styles from './sass/FeaturedPosts.module.css';
import PostsGrid from '../../PostComponents/PostsGrid/PostsGrid';

const FeaturedPosts = ({ posts }) => {
  return (
    <section className={styles.latest}>
      <h2>Featured Posts</h2>
      <PostsGrid posts={posts} />
    </section>
  );
};

FeaturedPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default FeaturedPosts;
