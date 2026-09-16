export default function StarkBot() {
  return (
    <a
      className="stark-bot"
      href="https://jarvis-omega-ai.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with StarkAI, Rajesh's personal AI assistant"
    >
      <span className="stark-bot-ring" aria-hidden="true" />
      <svg
        className="stark-bot-svg"
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
      >
        <line className="sb-antenna" x1="24" y1="4" x2="24" y2="11" />
        <circle className="sb-antenna-tip" cx="24" cy="4" r="2.4" />
        <rect
          className="sb-head"
          x="10"
          y="11"
          width="28"
          height="20"
          rx="7"
        />
        <circle className="sb-eye" cx="18.5" cy="21" r="2.6" />
        <circle className="sb-eye" cx="29.5" cy="21" r="2.6" />
        <path className="sb-body" d="M15 31h18l3 11H12l3-11Z" />
        <line className="sb-arm" x1="10" y1="34" x2="4" y2="30" />
        <line className="sb-arm" x1="38" y1="34" x2="44" y2="30" />
      </svg>
      <span className="stark-bot-label mono">Chat with StarkAI</span>
    </a>
  );
}
