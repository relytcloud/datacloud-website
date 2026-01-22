export function FullStackedBarChart({
  color,
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="full_stacked_bar_chart">
        <mask
          height="24"
          id="mask0_172_13994"
          maskUnits="userSpaceOnUse"
          style={{ maskType: "alpha" }}
          width="24"
          x="0"
          y="0"
        >
          <rect fill="#D9D9D9" height="24" id="Bounding box" width="24" />
        </mask>
        <g mask="url(#mask0_172_13994)">
          <path
            d="M4.5 19.5V16.596H8V19.5H4.5ZM4.5 15.7115V12.2115H8V15.7115H4.5ZM4.5 11.327V4.5H8V11.327H4.5ZM10.2598 19.5V12.673H13.7595V19.5H10.2598ZM10.2598 11.7885V8.2885H13.7595V11.7885H10.2598ZM10.2598 7.404V4.5H13.7595V7.404H10.2598ZM16 19.5V17.5577H19.5V19.5H16ZM16 16.673V13.173H19.5V16.673H16ZM16 12.2885V4.5H19.5V12.2885H16Z"
            fill={color}
            id="full_stacked_bar_chart_2"
          />
        </g>
      </g>
    </svg>
  );
}
