import React from 'react';
import styles from './Header.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="Main Navigation">
        <div className={styles.logoContainer}>
          <Link href="/" aria-label="Rupee Cashback Home">
            <Image
              src="/RupeeCashbackLogo.svg"
              alt="Rupee Cashback Logo"
              className={styles.logo}
              width={180}
              height={80}
              priority
            />
          </Link>
        </div>
        <div className={styles.actions}>
          <Link href="/merchant-join" className={styles.merchantBtn} aria-label="Join as a Merchant">
            Join <span className={styles.italicText}>as</span> a Merchant
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

export default Header; 