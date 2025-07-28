import React from 'react';
import Image from 'next/image';
import styles from './LoyaltyExperiencesSection.module.css';
import TextSpanning from '../../components/TextSpanning';

interface LoyaltyExperiencesSectionProps {
  isMobile: boolean;
}

const LoyaltyExperiencesSection: React.FC<LoyaltyExperiencesSectionProps> = ({ isMobile }) => {
  const titleSpans = [
    {
      text: "The",
      fontFamily: "gilroy" as const,
      fontWeight: "normal" as const,
      fontSize: isMobile ? "36px" : "60px",
      color: "#FFFFFF",
      fontStyle: "italic" as const
    },
    {
      text: " Experiences.",
      fontFamily: "gilroy" as const,
      fontWeight: "bold" as const,
      fontSize: isMobile ? "36px" : "60px",
      color: "#FFFFFF"
    }
  ];

  return (
    <section className={styles.experiencesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          <TextSpanning spans={titleSpans} />
        </h2>
        
        <div className={styles.phonesContainer}>
          <div className={styles.phoneWrapper}>
            <Image
              src="/Loyalty/iPhoneBlue.svg"
              alt="iPhone with blue interface showing pay app"
              width={isMobile ? 200 : 300}
              height={isMobile ? 400 : 600}
              className={styles.phoneImage}
            />
          </div>
          
          <div className={styles.phoneWrapper}>
            <Image
              src="/Loyalty/iPhoneBlack.svg"
              alt="iPhone with black interface showing rupee symbol"
              width={isMobile ? 200 : 300}
              height={isMobile ? 400 : 600}
              className={styles.phoneImage}
            />
          </div>
        </div>
        <div className={styles.descriptionWrapper}>
          <p className={styles.description}>
            Built for <span className={styles.descriptionItalicBold}>everyday users</span>, <span className={styles.descriptionItalicBold}>growing merchants</span>, and <span className={styles.descriptionItalicBold}>ambitious platforms</span>.<br/>
            Whether you're paying bills, rewarding customers, or verifying cards, RupeeStack gives you the tools to do it better, safer, and at scale.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoyaltyExperiencesSection;