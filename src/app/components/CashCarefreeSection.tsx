import React from 'react';
import TextImageSection from './TextImageSection';

const CashCarefreeSection: React.FC = () => (
  <TextImageSection
    title={[
      { 
        text: "Cash made ", 
        fontFamily: 'gilroy', 
        fontWeight: 500,
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      },
      { 
        text: "carefree.", 
        fontFamily: 'albra', 
        fontWeight: 500, 
        fontStyle: 'italic',
        fontSize: '55px',
        style: { lineHeight: '52px', letterSpacing: '-2px' }
      }
    ]}
    description={[
      { 
        text: "Every transaction is protected with Face ID, so only you can approve it. There's nothing to lose — and nothing for anyone else to misuse.",
        fontFamily: 'gilroy', 
        fontWeight: 400,
        fontSize: '21px',
        style: { lineHeight: '29px', letterSpacing: '-1px' }
      }
    ]}
    imageSrc="/Lock.svg"
    imageAlt="Security lock representing protected transactions"
    background="#000"
    reverse={true}
  />
);

export default CashCarefreeSection; 