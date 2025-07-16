import React from 'react';
import styles from './TextSpanning.module.css';

type FontFamily = 'gilroy' | 'albra' | 'inherit';
type FontWeight = 400 | 500 | 600 | 700 | 'normal' | 'medium' | 'semibold' | 'bold';

export interface SpanItem {
  text: string;
  fontFamily?: FontFamily;
  fontWeight?: FontWeight;
  fontSize?: string | number;
  color?: string;
  fontStyle?: 'normal' | 'italic';
  className?: string;
  style?: React.CSSProperties;
}

interface TextSpanningProps {
  spans: SpanItem[];
  className?: string;
  style?: React.CSSProperties;
}

const TextSpanning: React.FC<TextSpanningProps> = ({ spans, className, style }) => {
  const getSpanClassName = (span: SpanItem) => {
    const classNames: string[] = [];
    
    // Add custom className if provided
    if (span.className) {
      classNames.push(span.className);
    }
    
    // Add font family and weight classes
    if (span.fontFamily && span.fontWeight) {
      const weightKey = typeof span.fontWeight === 'number' ? span.fontWeight : 
        span.fontWeight === 'normal' ? 400 :
        span.fontWeight === 'medium' ? 500 :
        span.fontWeight === 'semibold' ? 600 :
        span.fontWeight === 'bold' ? 700 : 400;
      
      const fontClass = `${span.fontFamily}${weightKey}`;
      if (styles[fontClass]) {
        classNames.push(styles[fontClass]);
      }
    }
    
    return classNames.join(' ');
  };

  const getSpanStyle = (span: SpanItem): React.CSSProperties => {
    const spanStyle: React.CSSProperties = {};
    
    // Apply custom styles
    if (span.style) {
      Object.assign(spanStyle, span.style);
    }
    
    // Apply individual style props
    if (span.fontSize) {
      spanStyle.fontSize = typeof span.fontSize === 'number' ? `${span.fontSize}px` : span.fontSize;
    }
    
    if (span.color) {
      spanStyle.color = span.color;
    }
    
    if (span.fontStyle) {
      spanStyle.fontStyle = span.fontStyle;
    }
    
    // Apply font family directly if no CSS class is used
    if (span.fontFamily && !span.fontWeight) {
      spanStyle.fontFamily = span.fontFamily === 'gilroy' ? "'Gilroy', Arial, sans-serif" :
        span.fontFamily === 'albra' ? "'Albra Sans', Arial, sans-serif" :
        'inherit';
    }
    
    if (span.fontWeight && !span.fontFamily) {
      spanStyle.fontWeight = span.fontWeight;
    }
    
    return spanStyle;
  };

  return (
    <span className={className} style={style}>
    {spans.map((span, idx) => (
        <span 
          key={idx} 
          className={getSpanClassName(span)}
          style={getSpanStyle(span)}
        >
        {span.text}
      </span>
    ))}
    </span>
);
};

export default TextSpanning;