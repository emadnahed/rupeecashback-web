import React from 'react';
import Image from 'next/image';
import styles from './LoyaltySecureCoreSection.module.css';

interface LoyaltySecureCoreSectionProps {
  isMobile: boolean;
}

export const LoyaltySecureCoreSection: React.FC<LoyaltySecureCoreSectionProps> = ({ isMobile }) => {
  return (
    <section className={styles.secureCoreSection}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          <span className={styles.bold}>The secure core of</span><br />
          <span className={styles.serifItalic}>digital transactions.</span>
        </h2>
        <p className={styles.description}>
          A fintech company reimagining <span className={styles.italic}>how people interact with money</span>.
          We build seamless, intuitive systems that simplify payments, rewards, and digital finance effortless, accessible, and future-ready.
        </p>
      </div>
    </section>
  );
};

export default LoyaltySecureCoreSection;
