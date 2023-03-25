import React from 'react';
import cn from 'classnames';

import { Variant } from 'src/@types/Typography';

interface TypographyProps {
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  children,
  className,
  style,
}) => {
  const component = React.useMemo(() => {
    switch (variant) {
      case 'heading':
        return 'h1';
      case 'title':
      case 'title2':
        return 'h2';
      case 'subTitle':
      case 'subTitle2':
        return 'h3';
      default:
        return variant;
    }
  }, [variant]);

  const classes = cn(className, {
    'text-title': variant === 'heading' || variant === 'title',
    'text-title2': variant === 'title2',
    'text-sub-title': variant === 'subTitle',
    'text-2xl': variant === 'subTitle2',
    'text-base':
      variant === 'h4' ||
      variant === 'h5' ||
      variant === 'h6' ||
      variant === 'p',
  });

  return React.createElement(
    component,
    { className: classes, style },
    children,
  );
};

export default Typography;
