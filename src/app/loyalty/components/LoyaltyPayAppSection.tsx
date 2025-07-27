import React from 'react';
import Image from 'next/image';
import styles from './LoyaltyPayAppSection.module.css';

interface LoyaltyPayAppSectionProps {
  isMobile: boolean;
}

const LoyaltyPayAppSection: React.FC<LoyaltyPayAppSectionProps> = ({ isMobile }) => {
  return (
    <section className={styles.payAppSection}>
      <div className={styles.mockupContainer}>
        <Image
          src="/Loyalty/iPhoneBlue.svg"
          alt="Pay App Mockup"
          className={styles.mockupImage}
          width={300}
          height={600}
          priority
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.headline}><em>Pay app</em> <span>that <strong>doesn’t sleep.</strong></span></h2>
        <p className={styles.subheadline}>
          Zero fees. Zero failures. <span className={styles.italic}>Zero</span> headaches. <span className={styles.bold}>Paymadi</span> is the payment app India deserves.
        </p>
      </div>
    </section>
  );
};

export default LoyaltyPayAppSection;
