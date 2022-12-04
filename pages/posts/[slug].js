import PropTypes from 'prop-types';
import PostContent from '../../src/components/PostComponents/PostContent/PostContent';
import { getPostData, getPostsFiles } from '../../utils/PostsUtils';

const PostPage = ({ post }) => {
  return (
    <PostContent post={post} />
  );
};

PostPage.propTypes = {
  post: PropTypes.shape({}).isRequired
};

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;

  const postData = getPostData(slug);

  return {
    props: {
      post: postData
    },
    revalidate: 600
  };
}

export function getStaticPaths() {
  const postFileNames = getPostsFiles();
  const slugs = postFileNames.map((item) => item.replace(/\.md$/, ''));
  return {
    paths: slugs.map((slug) => ({ params: { slug } })),
    fallback: false
  };
}

export default PostPage;
