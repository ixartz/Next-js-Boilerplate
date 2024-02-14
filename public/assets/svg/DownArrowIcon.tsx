import * as React from 'react';
import { SVGProps } from 'react';
const DownArrowIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    className='h-5 w-5'
    xmlns='http://www.w3.org/2000/svg'
    viewBox='0 0 20 20'
    fill='#fff'
    {...props}
  >
    <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />{' '}
  </svg>
);
export default DownArrowIcon;
