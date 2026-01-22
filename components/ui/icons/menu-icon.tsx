export function MenuIcon({ ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={24}
      viewBox="0 0 24 24"
      width={24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M21 6.75H3V5.25H21V6.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M21 12.75H3V11.25H21V12.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
      <path
        clipRule="evenodd"
        d="M21 18.75H3V17.25H21V18.75Z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
}
