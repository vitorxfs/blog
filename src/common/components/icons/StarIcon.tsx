import React from 'react';

interface StarIconProps {
  stroke: string;
  fill?: string;
}

const StarIcon: React.FC<StarIconProps> = ({ stroke, fill = 'none' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="68"
      fill={fill}
      viewBox="0 0 60 68"
    >
      <path
        stroke={stroke}
        strokeWidth="2"
        d="M30 3.644l5.532 19.383.266.931.939-.235 19.552-4.901-14.02 14.482-.674.696.673.696L56.29 49.178l-19.552-4.901-.94-.235-.265.93L30 64.356l-5.532-19.383-.265-.931-.94.235-19.552 4.901 14.02-14.482.674-.696-.673-.696L3.71 18.822l19.552 4.901.94.235.265-.93L30 3.643z"
      ></path>
    </svg>
  );
};

export default StarIcon;
