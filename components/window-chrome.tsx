export default function WindowChrome({ label }: { label: string }) {
  return (
    <div className="tree-head mono">
      <span className="lights">
        <i />
        <i />
        <i />
      </span>
      <span>{label}</span>
    </div>
  );
}
