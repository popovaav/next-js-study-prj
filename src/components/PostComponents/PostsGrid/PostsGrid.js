import PropTypes from 'prop-types';
import PostItem from '../PostItem/PostItem';
import styles from './sass/PostsGrid.module.css';

const PostsGrid = ({ posts }) => {
  return (
    <ul className={styles.grid}>
      {posts.map((post) => <PostItem key={post.slug} post={post} />)}
    </ul>
  );
};

PostsGrid.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export default PostsGrid;
