import React from 'react';
import TextImageSection from './TextImageSection';

const KeepTogetherSection: React.FC = () => (
  <TextImageSection
    title={[
      { 
        text: "Keep it ", 
        fontFamily: 'gilroy', 
        fontWeight: 500, 
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      },
      { 
        text: "together.", 
        fontFamily: 'albra', 
        fontWeight: 500, 
        fontStyle: 'italic',
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      }
    ]}
    description={[
      { 
        text: "We don't want you hopping around trying to keep track of everything. So we keep it all together, tidy in the app. Rewards and cash, savings and spendings — it's all here.",
        fontFamily: 'gilroy', 
        fontWeight: 400,
        fontSize: '21px',
        style: { lineHeight: '29px', letterSpacing: '-1px' }
      }
    ]}
    imageSrc="/FilledWallet.svg"
    imageAlt="Wallet filled with money representing organized finances"
    background="#000"
    reverse={true}
  />
);

export default KeepTogetherSection; 