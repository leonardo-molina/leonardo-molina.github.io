export default function Footer() {
  return (
    <footer className="border-t border-surface-300/40 py-8 px-6 text-center text-xs font-mono text-surface-500">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <span>LEONARDO MOLINA © {new Date().getFullYear()}</span>
        <span>DESIGNED FOR PRECISION ENGINEERING</span>
        <a href="mailto:leonardomolina0121@gmail.com" className="hover:text-accent transition-colors">
          leonardomolina0121@gmail.com
        </a>
      </div>
    </footer>
  );
}
