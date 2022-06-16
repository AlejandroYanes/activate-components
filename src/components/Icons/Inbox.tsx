/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import { IconProps } from './types/icon-props';
import { useAppColors } from 'components/Configuration';

const InboxIcon: FunctionComponent<IconProps> = (props) => {
  const { color = 'currentcolor', height = 24, width = 24, className, style } = props;
  const colors = useAppColors();

  return (
    <svg
      className={className}
      style={style}
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22 19C22 20.1046 21.1046 21 20 21H4C2.89543 21 2 20.1046 2 19V11.7947L2.08085 11.6061L5.10236 4.55926C5.55303 3.64142 6.12144 3.07301 7 3H17L17.1308 3.00859C17.8837 3.10794 18.4351 3.65935 18.9191 4.60608L22 11.7947V19ZM4 13V19H20V13H16C16 14.1046 15.1046 15 14 15H10C8.89543 15 8 14.1046 8 13H4ZM4.51654 11H10V13H14V11H19.484L17.1107 5.45729C16.9987 5.23944 16.8953 5.08654 16.8118 4.99993L7.17592 4.99623C7.0987 5.07946 7.00333 5.22529 6.91915 5.39392L4.51654 11Z"
        fill={colors[color] || color}
      />
    </svg>
  );
};

export default InboxIcon;
