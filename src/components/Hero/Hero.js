import React from 'react';
import './Hero.scss';
import Portrait from '../Portrait/Portrait';

const Hero = () => {
  return (
    <section className="Hero">
      <Portrait />
      <div className="Hero__content">
        <h1 className="Hero__content__heading">Front End Developer in Stockholm</h1>
        <p className="Hero__content__text">I am a <span>Front-End Developer</span> student learning React.js with a focus on <span>design</span>. Together we can make your project <span>stand out</span>!</p>
        <a href="#contact">
          <button className="Hero__content__button btn-lg">Let's talk!</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;