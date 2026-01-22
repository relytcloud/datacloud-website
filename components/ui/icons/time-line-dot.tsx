export function TimeLineDot({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="6" cy="6" fill="url(#paint0_linear_time_line_dot)" r="6" />
      <defs>
        <linearGradient
          gradientUnits="userSpaceOnUse"
          id="paint0_linear_time_line_dot"
          x1="6"
          x2="6"
          y1="0"
          y2="12"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#999999" />
        </linearGradient>
      </defs>
    </svg>
  );
}
