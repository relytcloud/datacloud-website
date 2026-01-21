export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="absolute right-0 bottom-0 left-0 z-20">
      <p className="py-6 pr-6 text-right text-xs">© {currentYear} DATACLOUD.</p>
    </footer>
  );
}
