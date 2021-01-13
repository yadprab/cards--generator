import {React} from 'react'
import{ Nav }from './Nav';
import{ SampleSection }from "./SampleSection";

const Main = () => {


  return (
    <main>
      <Nav />
      <SampleSection/>

      <svg
        width="812"
        height="484"
        viewBox="0 0 812 484"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="DESIGN"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M100.418 746.901L140.028 676.669C179.638 606.437 258.858 465.974 354.815 377.659C450.771 289.343 563.464 253.175 679.412 227.147C795.824 202.568 915.025 186.679 1027.72 150.512C1140.41 114.344 1246.6 57.8961 1299.22 28.2238L1352.31 -8.07935e-06L1533.16 563.484L1476.81 581.568C1420.47 599.652 1307.77 635.82 1195.08 671.988C1082.39 708.155 969.696 744.323 857.003 780.491C744.31 816.659 631.617 852.827 518.924 888.995C406.232 925.163 293.539 961.331 237.192 979.415L180.846 997.499L100.418 746.901Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="676.157"
            y1="217.008"
            x2="857.003"
            y2="780.491"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FF4E00" />
            <stop offset="1" stopColor="#FF0000" stopOpacity="0.52" />
          </linearGradient>
        </defs>
      </svg>
    </main>
  );
};

export{ Main}
