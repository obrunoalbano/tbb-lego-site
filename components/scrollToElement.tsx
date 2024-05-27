// components/ScrollToElement.tsx
import React from 'react';

interface ScrollToElementProps {
  targetId: string;
  children: React.ReactNode
}

const ScrollToElement: React.FC<ScrollToElementProps> = ({ targetId, children }) => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const cleanId = targetId.startsWith('#') ? targetId.substring(1) : targetId;
    const element = document.getElementById(cleanId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={targetId} onClick={handleScroll} className='cursor-pointer'>
      {children}
    </a>
  );
};

export default ScrollToElement;
