import React from 'react';
import styles from './MerchantFooter.module.css';
import Image from 'next/image';

const MerchantFooter = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.logoSection}>
            <Image
              src="/RupeeCashbackWhite.svg"
              alt="Rupee Cashback"
              width={150}
              height={40}
            />
          </div>
          
          <div className={styles.linksSection}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Company</h4>
              <ul className={styles.linkList}>
                <li><a href="#" className={styles.link}>About us</a></li>
                <li><a href="#" className={styles.link}>Terms of use</a></li>
                <li><a href="#" className={styles.link}>Privacy policy</a></li>
                <li><a href="#" className={styles.link}>Merchant terms</a></li>
              </ul>
            </div>
            
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contact us</h4>
              <ul className={styles.linkList}>
                <li className={styles.contactItem}>Email: hello@paymail.com</li>
                <li className={styles.contactItem}>Phone: +91 99000 77752</li>
                <li className={styles.contactItem}>Legal: legal@paymail.com</li>
                <li className={styles.contactItem}>LLP IN: ACA-2298</li>
                <li className={styles.contactItem}>Address: 37/1, 1st Main Road, MM Layout, Kaval Banasandra, Bengaluru 560043</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2025 RupeeCashback. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MerchantFooter;