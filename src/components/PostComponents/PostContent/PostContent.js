import ReactMarkdown from 'react-markdown';
import PostHeader from '../PostHeader/PostHeader';
import styles from './sass/PostContent.module.css';

const dummyPosts = {
  title: 'Getting started',
  image: 'getting-started-nextjs.png',
  date: '2022-12-03',
  slug: 'getting-started-with-next-js',
  content: '# This is a first post'
};

const PostContent = () => {
  const imagePath = `/images/posts/${dummyPosts.slug}/${dummyPosts.image}`;
  return (
    <article className={styles.content}>
      <PostHeader image={imagePath} title={dummyPosts.title} />
      <ReactMarkdown>
        {dummyPosts.content}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;
