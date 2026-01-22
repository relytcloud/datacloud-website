export function FinanceIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="25"
      viewBox="0 0 24 25"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <mask
        height="25"
        id="mask0_666_3338"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="24"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="24" width="24" y="0.0307617" />
      </mask>
      <g mask="url(#mask0_666_3338)">
        <path
          d="M5 21.0308C4.45 21.0308 3.97917 20.8349 3.5875 20.4433C3.19583 20.0516 3 19.5808 3 19.0308V3.03076H5V19.0308H21V21.0308H5ZM6 18.0308V9.03076H10V18.0308H6ZM11 18.0308V4.03076H15V18.0308H11ZM16 18.0308V13.0308H20V18.0308H16Z"
          fill="url(#paint0_linear_666_3338)"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_666_3338"
          x1="12"
          x2="12"
          y1="3.03076"
          y2="21.0308"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>
  );
}
