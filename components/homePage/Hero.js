import Image from 'next/image';

import classes from './hero.module.css';

const Hero = () => {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/dog.jpeg"
          alt="An image of the blogger"
          width={320}
          height={320}
        />
      </div>
      <h1>Dog Blog</h1>
      <p>
        A place for back after back independent thinkers and dogs to blog. <br />
        imho error with opinion!
      </p>
    </section>
  );
};

export default Hero;

// image
// intro
// info