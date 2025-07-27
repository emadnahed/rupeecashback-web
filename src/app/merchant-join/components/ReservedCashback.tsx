import React from 'react';
import styles from './ReservedCashback.module.css';

const ReservedCashback = () => {
  return (
    <section className={styles.reservedSection}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.introducing}>Introducing</p>
          <h2 className={styles.title}>
            Reserved <span className={styles.titleItalic}>Cashback.</span>
          </h2>
          <p className={styles.description}>
            Reserved Cashback lets you go beyond one-time rewards. Customers get base cashback today,<br />
            and a higher offer if they return within your set window.
          </p>
          <button className={styles.learnMoreBtn}>
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReservedCashback;