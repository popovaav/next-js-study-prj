import PropTypes from 'prop-types';
import AllPosts from '../../src/components/PostComponents/AllPosts/AllPosts';
import { getFeaturedPost } from '../../utils/PostsUtils';

const AllPostsPage = ({ posts }) => {
  return (
    <AllPosts posts={posts} />
  );
};

AllPostsPage.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
};

export function getStaticProps() {
  const featuredPosts = getFeaturedPost();

  return {
    props: {
      posts: featuredPosts
    }
  };
}

export default AllPostsPage;
