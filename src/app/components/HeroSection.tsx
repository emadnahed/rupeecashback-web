import React from 'react';
import styles from './HeroSection.module.css';

const HeroSection: React.FC = () => (
  <section className={styles.hero} aria-label="Main hero section">
    <div className={styles.content}>
      <h1 className={styles.title}>
        <span className={styles.gilroyBold}>YOUR MONEY</span><br />
        <span className={styles.gilroyBold}>ON </span>
        <span className={styles.albraItalic}>MAXX.</span>
      </h1>
      <div className={styles.subtitleWrapper}>
        <p className={styles.subtitle}>
          Who wants to spend money without getting anything back? Nobody! With RupeeCashback, your spending equals earning. Our members are already racking up serious cashback and rewards. It's simply about shopping how you already do — just smarter, with RupeeCashback.
        </p>
      </div>
      <button className={styles.cta}>
        <span className={styles.gilroyText}>Get </span>
        <span className={styles.albraSemiItalic}>RupeeCashback </span>
        <span className={styles.gilroyText}>App</span>
      </button>
    </div>
  </section>
);

export default HeroSection; 