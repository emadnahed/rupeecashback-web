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
          <span className={styles.seamless}>That money</span>
          <span className={styles.payouts}>back feeling.</span>
        </div>
        <p className={styles.subtext}>
          Smart platform that rewards customers with cashback for shopping at partnered stores.
        </p>
      </div>
      <div className={styles.laptopBlock}>
        <Image
          src="/Loyalty/iPhoneBlack.svg"
          alt="Rupee App Mockup"
          className={styles.mockupImage}
          width={300}
          height={300}
          priority
        />
      </div>
    </section>
  );
};

export default LoyaltyMoneyBackSection;
