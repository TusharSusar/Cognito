import React from "react";

export default function Menu({ width , height, color, className }) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
    >
      <g fill={color}>
        <circle cx="10" cy="16" r="4" />
        <circle cx="10" cy="32" r="4" />
        <circle cx="10" cy="48" r="4" />
        <rect x="20" y="12" width="36" height="8" rx="4" ry="4" />
        <rect x="20" y="28" width="36" height="8" rx="4" ry="4" />
        <rect x="20" y="44" width="36" height="8" rx="4" ry="4" />
      </g>
    </svg>
  );
}
