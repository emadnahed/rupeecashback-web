import React from 'react';
import Image from 'next/image';
import styles from './LoyaltyMoneyBackSection.module.css';

interface LoyaltyMoneyBackSectionProps {
  isMobile: boolean;
}

const LoyaltyMoneyBackSection: React.FC<LoyaltyMoneyBackSectionProps> = ({ isMobile }) => {
  return (
    <section className={styles.moneyBackSection}>
      <div className={styles.textBlock}>
        <div className={styles.headingBlock}>
          <span className={styles.seamless}>Seamless</span>
          <span className={styles.payouts}>payouts.</span>
        </div>
        <p className={styles.subtext}>
          Fast, <span className={styles.italic}>secure</span>, and <span className={styles.italic}>scalable</span> payment solutions for businesses of <span className={styles.italic}>all sizes</span>.
        </p>
      </div>
      <div className={styles.laptopBlock}>
        <Image
          src="/Loyalty/iPhoneBlack.svg"
          alt="Rupee App Mockup"
          className={styles.mockupImage}
          width={300}
          height={100}
          priority
        />
      </div>
    </section>
  );
};

export default LoyaltyMoneyBackSection;
