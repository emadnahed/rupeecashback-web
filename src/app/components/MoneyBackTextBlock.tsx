import React from 'react';
import styles from './MoneyBackTextBlock.module.css';

const MoneyBackTextBlock: React.FC = () => (
  <div className={styles.textWrapper}>
    <p>
      It's not a discount that disappears<br />
      after 24 hours.
    </p>
    <p>
      It's not a coupon you'll never use.<br />
      It's definitely not points sitting somewhere,<br />
      collecting digital dust.<br />
      <span className={styles.italic}>It's actual money. Back. Instantly.</span>
    </p>
    <p>
      No waiting. No conditions. No games.<br />
      And just like that — paying <span className={styles.italic}>doesn't feel like<br />
      a loss anymore.</span>
    </p>
    <p>
      Because now, every time you spend, a little<br />
      <span className={styles.italic}>comes right back.</span>
    </p>
    <p>
      <span className={styles.italic}>Unexpected?</span> Maybe.<br />
      <span className={styles.italic}>Satisfying?</span> Always.
    </p>
  </div>
);

export default MoneyBackTextBlock; 