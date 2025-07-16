import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => (
  <section className={styles.hero} aria-label="Main hero section">
    <div className={styles.content}>
      <h1 className={styles.title}>
        YOUR MONEY<br />
        ON <span className={styles.emphasis}>MAXX.</span>
      </h1>
      <p className={styles.subtitle}>
        Who wants to spend money without getting anything back? Nobody! With <span className={styles.brand}>RupeeCashback</span>, your spending equals earning. Our members are already racking up serious cashback and rewards. It’s simply about shopping how you already do – just smarter, with <span className={styles.brand}>RupeeCashback</span>.
      </p>
      <button className={styles.cta}>
        Get RupeeCashback App
      </button>
    </div>
  </section>
);

export default HeroSection; 