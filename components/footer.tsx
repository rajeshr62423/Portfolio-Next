export default function Footer() {
  return (
    <footer>
      <div className="wrap foot-inner">
        <span>© {new Date().getFullYear()} Rajesh R</span>
        <span>Built with React thinking · deployed on Vercel</span>
      </div>
    </footer>
  );
}
