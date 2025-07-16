import React from 'react';
import TextImageSection from './TextImageSection';

const KeepTogetherSection: React.FC = () => (
  <TextImageSection
    title={[
      { text: "Keep it ", fontFamily: 'gilroy', fontWeight: 400 },
      { text: "together", fontFamily: 'gilroy', fontWeight: 400, fontStyle: 'italic' },
      { text: ".", fontFamily: 'gilroy', fontWeight: 400 }
    ]}
    description={[
      { 
        text: "We don't want you hopping around trying to keep track of everything. So we keep it all together, tidy in the app. Rewards and cash, savings and spendings — it's all here.",
        fontFamily: 'gilroy', 
        fontWeight: 400 
      }
    ]}
    imageSrc="/FilledWallet.svg"
    imageAlt="Wallet filled with money representing organized finances"
    background="#000"
    reverse={true}
  />
);

export default KeepTogetherSection; 