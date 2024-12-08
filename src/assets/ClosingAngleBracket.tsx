import * as React from 'react';

interface SVGProps extends React.SVGProps<SVGSVGElement> {
  size: string;
  fill?: string;
  stroke?: string;
}

function ClosingAngleBracket({ size, fill, stroke, ...props }: SVGProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 384 512"
      height={size}
      width={size}
      {...props}
    >
      <path d="M3.4 81.7c-7.9 15.8-1.5 35 14.3 42.9L280.5 256 17.7 387.4c-15.8 7.9-22.2 27.1-14.3 42.9s27.1 22.2 42.9 14.3l320-160c10.8-5.4 17.7-16.5 17.7-28.6s-6.8-23.2-17.7-28.6l-320-160c-15.8-7.9-35-1.5-42.9 14.3z" />
    </svg>
  );
}

export default ClosingAngleBracket;
