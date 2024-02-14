import * as React from 'react';
import { SVGProps } from 'react';
const SunIcon = (props: SVGProps<SVGSVGElement>) => (
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
    <title>{'sun-solid'}</title>
    <path
      d='M18,6.42a1,1,0,0,0,1-1V1.91a1,1,0,0,0-2,0V5.42A1,1,0,0,0,18,6.42Z'
      className='clr-i-solid clr-i-solid-path-1'
    />
    <path
      d='M18,29.58a1,1,0,0,0-1,1v3.51a1,1,0,0,0,2,0V30.58A1,1,0,0,0,18,29.58Z'
      className='clr-i-solid clr-i-solid-path-2'
    />
    <path
      d='M8.4,9.81A1,1,0,0,0,9.81,8.4L7.33,5.92A1,1,0,0,0,5.92,7.33Z'
      className='clr-i-solid clr-i-solid-path-3'
    />
    <path
      d='M27.6,26.19a1,1,0,0,0-1.41,1.41l2.48,2.48a1,1,0,0,0,1.41-1.41Z'
      className='clr-i-solid clr-i-solid-path-4'
    />
    <path
      d='M6.42,18a1,1,0,0,0-1-1H1.91a1,1,0,0,0,0,2H5.42A1,1,0,0,0,6.42,18Z'
      className='clr-i-solid clr-i-solid-path-5'
    />
    <path
      d='M34.09,17H30.58a1,1,0,0,0,0,2h3.51a1,1,0,0,0,0-2Z'
      className='clr-i-solid clr-i-solid-path-6'
    />
    <path
      d='M8.4,26.19,5.92,28.67a1,1,0,0,0,1.41,1.41L9.81,27.6A1,1,0,0,0,8.4,26.19Z'
      className='clr-i-solid clr-i-solid-path-7'
    />
    <path
      d='M27.6,9.81l2.48-2.48a1,1,0,0,0-1.41-1.41L26.19,8.4A1,1,0,0,0,27.6,9.81Z'
      className='clr-i-solid clr-i-solid-path-8'
    />
    <circle cx={18} cy={18} r={10} className='clr-i-solid clr-i-solid-path-9' />
    <rect x={0} y={0} width={36} height={36} fillOpacity={0} />
  </svg>
);
export default SunIcon;
