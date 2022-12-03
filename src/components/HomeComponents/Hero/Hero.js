import Image from 'next/image';
import styles from './sass/Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.image}>
        <Image src="/images/site/react-logo.svg" alt="main image" height={300} width={300} />
      </div>
      <h1>Hello, I am Anastasiia</h1>
      <p>This is blog about React</p>
    </section>
  );
};

export default Hero;
