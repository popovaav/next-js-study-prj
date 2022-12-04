import ReactMarkdown from 'react-markdown';
import PropTypes from 'prop-types';
import PostHeader from '../PostHeader/PostHeader';
import styles from './sass/PostContent.module.css';

const PostContent = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;
  return (
    <article className={styles.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown>
        {post.content}
      </ReactMarkdown>
    </article>
  );
};

PostContent.propTypes = {
  post: PropTypes.shape({
    slug: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    content: PropTypes.string
  }).isRequired
};

export default PostContent;
