import React from 'react';
import styles from './SectionCard.module.css';

interface SectionCardProps {
  background: string;
  title: React.ReactNode;
  subtitle: React.ReactNode;
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const SectionCard: React.FC<SectionCardProps> = ({
  background,
  title,
  subtitle,
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
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
      <div className={styles.imageWrapper}>
        <img src={imageSrc} alt={imageAlt} className={styles.image} />
      </div>
    </div>
  </section>
);

export default SectionCard; 