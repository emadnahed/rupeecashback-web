import React from 'react';
import styles from './SectionCard.module.css';

interface SectionCardProps {
  background: string;
  titleLine1: {
    regularText: string;
    italicText?: string;
  };
  titleLine2: {
    regularText: string;
    italicText: string;
  };
  paragraphLines: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({
  background,
  titleLine1,
  titleLine2,
  paragraphLines,
  imageSrc,
  imageAlt,
  reverse = false,
}) => (
  <section
    className={styles.card}
    style={{ background }}
    aria-label="Feature section"
  >
    <div className={`${styles.content} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.text}>
        <h2 className={styles.title}>
          <div className={styles.titleLine}>
            {titleLine1.italicText && <span className={styles.albraItalic}>{titleLine1.italicText}</span>}
            <span className={styles.gilroyText}>{titleLine1.regularText}</span>
          </div>
          <div className={styles.titleLine}>
            <span className={styles.gilroyText}>{titleLine2.regularText}</span>
            <span className={styles.albraItalic}>{titleLine2.italicText}</span>
          </div>
        </h2>
        <div className={styles.subtitle}>
          {paragraphLines.map((line, index) => (
            <div key={index} className={styles.paragraphLine}>{line}</div>
          ))}
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>
    </div>
  </section>
);

export default SectionCard; 