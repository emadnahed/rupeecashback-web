import React from 'react';
import styles from "./MoneyBackFeelingContainer.module.css"
import PillShapeContainer from './PillShapeContainer';
import MoneyBackTextBlock from './MoneyBackTextBlock';

const MoneyBackFeelingContainer: React.FC = () => (
  <>
  <section className={styles.wrapper}>
    {/* Left Hand */}
    <img src="/LeftHand.svg" alt="Left hand" className={styles.leftHand} />
    {/* Right Hand */}
    <img src="/RightHand.svg" alt="Right hand" className={styles.rightHand} />

    {/* Pills */}
    <PillShapeContainer className={styles.pill1} amount={"₹455.70"} from={"Pilgrim"} icon="/KoKappi.svg" />
    <PillShapeContainer className={styles.pill2} amount={"₹397.10"} from={"Boat"} icon="/icon2.svg" />
    <PillShapeContainer className={styles.pill3} amount={"₹455.70"} from={"Pilgrim"} icon="/icon1.svg" />
    {/* <PillShapeContainer className={styles.pill4} amount={"₹455.70"} from={"KO KAPPI"} icon="/icon3.svg" />
    <PillShapeContainer className={styles.pill5} amount={"₹397.10"} from={"Boat"} icon="/icon2.svg" /> */}

    {/* Central Heading */}
    <div className={styles.centerText}>
      <h2>
        That <span className={styles.italic}>Money Back</span><br />
        Feeling.
      </h2>
    </div>
    
  </section>
  <MoneyBackTextBlock/>
  </>
);

export default MoneyBackFeelingContainer;
