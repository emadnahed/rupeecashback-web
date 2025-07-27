import React from 'react';
import styles from './WhyRetailersLoveUs.module.css';
import Image from 'next/image';

const WhyRetailersLoveUs = () => {
  // Using available SVG icons for the circular containers
  const brandIcons = [
    { src: '/KoKappi.svg', alt: 'KoKappi' },
    { src: '/FilledWallet.svg', alt: 'Wallet' },
    { src: '/CashbackQR.svg', alt: 'Cashback QR' },
    { src: '/Lock.svg', alt: 'Security' },
    { src: '/globe.svg', alt: 'Global' },
    { src: '/window.svg', alt: 'Window' },
    { src: '/file.svg', alt: 'File' },
    { src: '/RupeeSided.svg', alt: 'Rupee' },
    { src: '/CapturedMoney.svg', alt: 'Money' },
    { src: '/DownloadQR.svg', alt: 'Download' },
    { src: '/RupeeTitled.svg', alt: 'Rupee Title' },
    { src: '/LeftHand.svg', alt: 'Hand' },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Floating brand icons */}
        <div className={styles.brandIcons}>
          {brandIcons.map((brand, index) => (
            <div
              key={index}
              className={`${styles.brandIcon} ${styles[`icon${index + 1}`]}`}
            >
              <Image
                src={brand.src}
                alt={brand.alt}
                width={40}
                height={40}
                className={styles.brandImage}
              />
            </div>
          ))}
        </div>

        {/* Main content with blue border */}
        <div className={styles.contentWrapper}>
          <div className={styles.content}>
            <h2 className={styles.title}>
              Why <span className={styles.titleItalic}>retailers</span> love us.
            </h2>
            <p className={styles.description}>
              Cashback not only drives increased foot traffic by attracting repeat customers, but also fosters<br />
              loyalty by rewarding them. Additionally, it serves as a powerful marketing tool. The<br />
              repeat behaviour and sales insights it provides valuable insights into customer<br />
              shopping habits, enabling more effective and targeted marketing strategies.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRetailersLoveUs;