import React from 'react';
import Image from 'next/image';
import styles from './LoyaltySecureCoreSection.module.css';

interface LoyaltySecureCoreSectionProps {
  isMobile: boolean;
}

const LoyaltySecureCoreSection: React.FC<LoyaltySecureCoreSectionProps> = ({ isMobile }) => {
  return (
    <section className={styles.secureCoreSection}>
      <div className={styles.container}>
        <h2 className={styles.headline}>
          <span className={styles.bold}>The secure core of</span><br />
          <span className={styles.serifItalic}>digital transactions.</span>
        </h2>

      </div>
    </section>
  );
};

export default LoyaltySecureCoreSection;
