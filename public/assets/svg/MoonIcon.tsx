import * as React from 'react';
import { SVGProps } from 'react';
const MoonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='#718096'
    width='24px'
    height='24px'
    viewBox='0 0 36 36'
    preserveAspectRatio='xMidYMid meet'
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    {...props}
  >
    <title>{'moon-solid'}</title>
    <path
      d='M29.2,26.72A12.07,12.07,0,0,1,22.9,4.44,13.68,13.68,0,0,0,19.49,4a14,14,0,0,0,0,28,13.82,13.82,0,0,0,10.9-5.34A11.71,11.71,0,0,1,29.2,26.72Z'
      className='clr-i-solid clr-i-solid-path-1'
    />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);
export default MoonIcon;
