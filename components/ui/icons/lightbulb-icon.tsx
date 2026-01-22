export function LightbulbIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
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
        id="mask0_666_3332"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
        width="24"
        x="0"
        y="0"
      >
        <rect fill="#D9D9D9" height="24" width="24" y="0.0307617" />
      </mask>
      <g mask="url(#mask0_666_3332)">
        <path
          d="M12 22.0308C11.45 22.0308 10.9792 21.8349 10.5875 21.4433C10.1958 21.0516 10 20.5808 10 20.0308H14C14 20.5808 13.8042 21.0516 13.4125 21.4433C13.0208 21.8349 12.55 22.0308 12 22.0308ZM8 19.0308V17.0308H16V19.0308H8ZM8.25 16.0308C7.1 15.3474 6.1875 14.4308 5.5125 13.2808C4.8375 12.1308 4.5 10.8808 4.5 9.53076C4.5 7.44743 5.22917 5.6766 6.6875 4.21826C8.14583 2.75993 9.91667 2.03076 12 2.03076C14.0833 2.03076 15.8542 2.75993 17.3125 4.21826C18.7708 5.6766 19.5 7.44743 19.5 9.53076C19.5 10.8808 19.1625 12.1308 18.4875 13.2808C17.8125 14.4308 16.9 15.3474 15.75 16.0308H8.25Z"
          fill="url(#paint0_linear_666_3332)"
        />
      </g>
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_666_3332"
          x1="12"
          x2="12"
          y1="2.03076"
          y2="22.0308"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>
  );
}
