export function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center bg-white/[0.06] border border-white/[0.12] rounded-full px-4 py-1.5 mb-6">
      <span className="text-xs font-semibold uppercase tracking-widest text-white/70">
        {children}
      </span>
    </div>
  )
}
