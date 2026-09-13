import React from "react";

export const ReactIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 115.3 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="57.65" cy="50" rx="14" ry="14" fill="#225DCF" />
    <ellipse cx="57.65" cy="50" rx="55" ry="21" stroke="#225DCF" strokeWidth="6" transform="rotate(30 57.65 50)" />
    <ellipse cx="57.65" cy="50" rx="55" ry="21" stroke="#225DCF" strokeWidth="6" transform="rotate(90 57.65 50)" />
    <ellipse cx="57.65" cy="50" rx="55" ry="21" stroke="#225DCF" strokeWidth="6" transform="rotate(150 57.65 50)" />
  </svg>
);

export const NodeIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 3L28 10V22L16 29L4 22V10L16 3Z"
      stroke="#22C55E"
      strokeWidth="2.5"
      strokeLinejoin="round"
    />
    <path
      d="M16 11V21M12 14L16 11L20 14"
      stroke="#22C55E"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <text x="16" y="22" textAnchor="middle" fill="#22C55E" fontSize="9" fontWeight="bold" fontFamily="sans-serif">
      JS
    </text>
  </svg>
);

export const MongoIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M16 2C16 2 8 8.5 8 16.5C8 22 12.5 27 16 30C19.5 27 24 22 24 16.5C24 8.5 16 2 16 2Z"
      fill="#22C55E"
    />
    <path
      d="M16 3.5V28.5C15 28.5 10 24 10 16.5C10 10 15 5 16 3.5Z"
      fill="#16A34A"
    />
  </svg>
);

export const WordPressIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="14" fill="#225DCF" />
    <circle cx="16" cy="16" r="13" stroke="#FFFFFF" strokeWidth="1.2" />
    <path
      d="M6 16C6 21.5 10.5 26 16 26C18.2 26 20.3 25.3 22 24L15.3 6.8C15.1 6.5 14.7 6.5 14.5 6.8L6 16Z"
      fill="#FFFFFF"
    />
    <path
      d="M16.8 17.5L20 8.5C23.5 10.5 26 13.5 26 16C26 19.5 23.8 22.5 20.8 24.2L16.8 17.5Z"
      fill="#FFFFFF"
    />
    <path
      d="M11.5 14.5L14 24.5C12 24 10.2 22.8 9 21.2L11.5 14.5Z"
      fill="#FFFFFF"
    />
  </svg>
);

export const SeoIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5 22L12 15L17 20L27 9"
      stroke="#22C55E"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19 9H27V17"
      stroke="#22C55E"
      strokeWidth="3.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ExpressIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 32 32" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <text
      x="16"
      y="22"
      textAnchor="middle"
      fill="#253452"
      fontSize="16"
      fontWeight="700"
      fontFamily="var(--font-ibm-plex-sans), sans-serif"
    >
      ex
    </text>
  </svg>
);
