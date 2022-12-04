import PropTypes from 'prop-types';
import Hero from '../src/components/HomeComponents/Hero/Hero';
import FeaturedPosts from '../src/components/HomeComponents/FeaturedPosts/FeaturedPosts';
import { getFeaturedPost } from '../utils/PostsUtils';

const HomePage = ({ posts }) => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={posts} />
    </>
  );
};

HomePage.propTypes = {
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

export default HomePage;
