import React from 'react'

function Check() {
    return (
      <>
        <svg
          width={50}
          height={50}
          viewBox="0 0 50 50"
          fill="none"
        
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="circle"
            d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
            fill="#25AE88"
          />
          <path
            id="tick"
            d="M38 15L22 33L12 25"
            stroke="white"
            strokeWidth={2}
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    );
}

export { Check}
