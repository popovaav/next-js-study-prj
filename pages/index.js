import Hero from '../src/components/HomeComponents/Hero/Hero';
import FeaturedPosts from '../src/components/HomeComponents/FeaturedPosts/FeaturedPosts';

const dummyPosts = [
  {
    title: 'Getting started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next JS is a framework',
    date: '2022-12-03',
    slug: 'getting-started-with-next-js'
  },
  {
    title: 'Getting started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next JS is a framework',
    date: '2022-12-03',
    slug: 'getting-started-with-next-js2'
  },
  {
    title: 'Getting started',
    image: 'getting-started-nextjs.png',
    excerpt: 'Next JS is a framework',
    date: '2022-12-03',
    slug: 'getting-started-with-next-js3'
  }
];

const HomePage = () => {
  return (
    <>
      <Hero />
      <FeaturedPosts posts={dummyPosts} />
    </>
  );
};

export default HomePage;
