export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[radial-gradient(circle_at_top,rgba(255,71,74,0.14),transparent_35%),linear-gradient(180deg,var(--color-bg-elevated),var(--color-bg))]">
      <div
        className="h-14 w-14 rounded-full border-4 border-white/15 border-t-[var(--color-accent)] animate-spin"
        aria-label="Loading"
        role="status"
      />
      <span className="sr-only">Loading</span>
    </div>
  );
}