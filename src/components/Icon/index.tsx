import React from 'react';
import './styles.css';

interface IconProps {
  type: string
  width: string
  height: string
  color?: string
}

const Icon: React.FC<IconProps> = ({
  type,
  width,
  height,
  color = '#FFFFFF'
}) => {
  switch (type) {
    case 'dot':
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill={color}/>
        </svg>
      )
    default:
      return (
        <svg
          width={width}
          height={height}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="9" r="9" fill={color}/>
        </svg>
      )
  }
}

export default Icon
