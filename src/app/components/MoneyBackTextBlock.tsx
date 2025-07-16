import React from 'react';
import styles from './MoneyBackTextBlock.module.css';
import PillShapeContainer from './PillShapeContainer';
import Pillstyles from "./MoneyBackFeelingContainer.module.css"
import TextSpanning from './TextSpanning';

const MoneyBackTextBlock: React.FC = () => (
  <div className={styles.textBlock}>
    <PillShapeContainer className={Pillstyles.pill4} amount={"₹455.70"} from={"KO KAPPI"} icon="/icon3.svg" />
    
    <p>
      It’s not a discount that disappears after 24 hours.<br />
      It’s not a coupon you’ll never use.<br />
      It’s definitely not points sitting somewhere, collecting digital dust.<br />
      <span className={styles.italic}>It’s actual money. Back. Instantly.</span><br />
      No waiting. No conditions. No games.<br />
      And just like that — paying <span className={styles.italic}>doesn’t feel like a loss anymore.</span><br />
      Because now, every time you spend, <span className={styles.italic}>a little comes right back.</span>
    </p>
    <p className={styles.bottom}>
      <span className={styles.italic}>Unexpected?</span> Maybe.<br />
      <span className={styles.italic}>Satisfying?</span> Always.
    </p>
    
    <PillShapeContainer className={Pillstyles.pill5} amount={"₹397.10"} from={"Boat"} icon="/icon2.svg" />
  </div>
);

export default MoneyBackTextBlock; 