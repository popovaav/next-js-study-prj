import PropTypes from 'prop-types';
import PostsGrid from '../PostsGrid/PostsGrid';
import styles from './sass/AllPosts.module.css';

const AllPosts = ({ posts }) => {
  return (
    <section className={styles.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={posts} />
    </section>
  );
};

AllPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default AllPosts;
