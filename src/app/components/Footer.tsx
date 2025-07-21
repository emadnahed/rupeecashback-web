import React from 'react';
import styles from './Footer.module.css';
import spottedStyles from './SpottedQRSection.module.css';
import TextSpanning from './TextSpanning';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => (
  <footer className={styles.footer} aria-label="Site footer">
    <div className={styles.container}>
      {/* Logo Section */}
      <div className={styles.logoSection}>
        <div className={styles.logo}>
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
      </div>

      {/* Company Section */}
      <div className={styles.companySection}>
        <h3 className={styles.sectionTitle}>
          <TextSpanning
            spans={[
              { 
                text: "Company", 
                fontFamily: 'gilroy', 
                fontWeight: 500 
              }
            ]}
          />
        </h3>
        <ul className={styles.linkList}>
          <li>
            <a href="/about" className={styles.link}>
              <TextSpanning
                spans={[
                  { 
                    text: "About us", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400 
                  }
                ]}
              />
            </a>
          </li>
          <li>
            <a href="/terms" className={styles.link}>
              <TextSpanning
                spans={[
                  { 
                    text: "Terms of use", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400 
                  }
                ]}
              />
            </a>
          </li>
          <li>
            <a href="/privacy" className={styles.link}>
              <TextSpanning
                spans={[
                  { 
                    text: "Privacy policy", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400 
                  }
                ]}
              />
            </a>
          </li>
          <li>
            <a href="/merchant-terms" className={styles.link}>
              <TextSpanning
                spans={[
                  { 
                    text: "Merchant terms", 
                    fontFamily: 'gilroy', 
                    fontWeight: 400 
                  }
                ]}
              />
            </a>
          </li>
        </ul>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <h3 className={styles.sectionTitle}>
          <TextSpanning
            spans={[
              { 
                text: "Contact us", 
                fontFamily: 'gilroy', 
                fontWeight: 500 
              }
            ]}
          />
        </h3>
        <div className={styles.contactInfo}>
          <div className={styles.contactItem}>
            <TextSpanning
              spans={[
                { 
                  text: "Email: ", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400 
                },
                { 
                  text: "hello@paymadi.com", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400
                }
              ]}
            />
          </div>
          <div className={styles.contactItem}>
            <TextSpanning
              spans={[
                { 
                  text: "Phone: ", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400 
                },
                { 
                  text: "+91 99000 77752", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400
                }
              ]}
            />
          </div>
          <div className={styles.contactItem}>
            <TextSpanning
              spans={[
                { 
                  text: "Legal: ", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400 
                },
                { 
                  text: "legal@paymadi.com", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400
                }
              ]}
            />
          </div>
          <div className={styles.contactItem}>
            <TextSpanning
              spans={[
                { 
                  text: "LLP IN: ACA-2298", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400 
                }
              ]}
            />
          </div>
          <div className={styles.contactItem}>
            <TextSpanning
              spans={[
                { 
                  text: "Address: 37/1, 1st Main Road, MM Layout, Kaval Bairasandra, Bengaluru 560032", 
                  fontFamily: 'gilroy', 
                  fontWeight: 400 
                }
              ]}
            />
          </div>
        </div>
      </div>

      {/* QR Code Section */}
      <div className={styles.qrCodeSection}>
        <img
          src="/DownloadQR.svg"
          alt="Download RupeeCashback - QR code to download the app"
          className={spottedStyles.downloadCard}
        />
      </div>
    </div>

    {/* Copyright Section */}
    <div className={styles.copyrightSection}>
      <div className={styles.copyrightContainer}>
        <TextSpanning
          spans={[
            { 
              text: "© 2025 RupeeCashback, All Rights Reserved", 
              fontFamily: 'gilroy', 
              fontWeight: 400 
            }
          ]}
        />
      </div>
    </div>
  </footer>
);

export default Footer; 