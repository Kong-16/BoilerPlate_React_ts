import * as React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size: string;
  fill?: string;
  stroke?: string;
}

function OpeningAngleBracket({ size, fill, stroke, ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      height={size}
      width={size}
      {...props}
    >
      <path d="M380.6 81.7c7.9 15.8 1.5 35-14.3 42.9L103.6 256l262.7 131.4c15.8 7.9 22.2 27.1 14.3 42.9s-27.1 22.2-42.9 14.3l-320-160C6.8 279.2 0 268.1 0 256s6.8-23.2 17.7-28.6l320-160c15.8-7.9 35-1.5 42.9 14.3z" />
    </svg>
  );
}
export default OpeningAngleBracket;
