import React from 'react';

interface HighlightProps {
  color?: string;
  textColor?: string;
  children?: React.ReactNode;
};

const Highlight: React.FC<HighlightProps> = ({ children, color, textColor }) => (
  <span
    style={{
      backgroundColor: color ? color : 'inherit',
      borderRadius: '4px',
      color: textColor ? textColor : '#fff',
      padding: '0.2rem',
    }}>
    {children}
  </span>
);

export default Highlight;
