import React from 'react';
import styles from './MerchantHeader.module.css';
import Image from 'next/image';
import Link from 'next/link';

const MerchantHeader: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Merchant Navigation">
        <div className={styles.logoSection}>
          <Link href="/" aria-label="Rupee Cashback Home" className={styles.logoLink}>
            <Image
              src="/RupeeCashbackWhite.svg"
              alt="Rupee Cashback Logo"
              className={styles.logo}
              width={180}
              height={80}
              priority
            />
          </Link>
          <div className={styles.divider}></div>
          <h1 className={styles.merchants}>Merchants.</h1>
        </div>
        <div className={styles.actions}>
          <Link href="#" className={styles.exploreBtn} aria-label="Explore Loyalty">
            Explore <span className={styles.italic}>Loyalty</span>
          </Link>
          <button className={styles.menuBtn} aria-label="Open menu">
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
            <span className={styles.menuBar}></span>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default MerchantHeader; 