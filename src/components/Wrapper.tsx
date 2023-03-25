import React from 'react';

interface WrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ id, children, className }) => {
  return (
    <div id={id} className={`${className || ''} w-full`}>
      {children}
    </div>
  );
};

export default Wrapper;
