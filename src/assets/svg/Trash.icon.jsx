import * as React from "react";

const TrashIcon = ({ color, ...props }) => (
  <svg
    width={24}
    height={24}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}>
    <path
      d='m5.6 7.302.648 10.63C6.32 19.094 7.298 20 8.482 20h6.71c1.158 0 2.125-.868 2.23-2.002L18.4 7.302m-12.8 0c-.963.066-1.6.118-1.6.118m1.6-.118c1.691-.115 4.387-.275 6.4-.275 2.013 0 4.709.16 6.4.275m0 0c.963.066 1.6.118 1.6.118M9.6 6.595V5a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1v1.595M8.8 6.595h1.6M13.6 6.595h1.6M12 10.919v5.19M8.8 11.784v3.46M15.2 11.784v3.46'
      stroke={color || "#292D32"}
      strokeWidth={1.5}
      strokeLinecap='round'
    />
  </svg>
);

export default TrashIcon;
