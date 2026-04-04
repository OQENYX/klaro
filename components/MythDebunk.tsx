interface MythDebunkProps {
  myth: string;
  reality: string;
}

export default function MythDebunk({ myth, reality }: MythDebunkProps) {
  return (
    <div className="my-10 grid gap-3.5 md:grid-cols-2">
      <div
        className="rounded-[22px] bg-bg p-6"
        style={{ border: "1px solid rgba(0,0,0,.05)" }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-sub/10 text-[10px]">
            ✕
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-sub">
            Mythos
          </span>
        </div>
        <p className="text-[17px] leading-relaxed text-dark">{myth}</p>
      </div>
      <div
        className="rounded-[22px] p-6"
        style={{
          background: "linear-gradient(135deg, rgba(5,150,105,.03), rgba(5,150,105,.08))",
          border: "1px solid rgba(5,150,105,.15)",
        }}
      >
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald/10 text-[10px] text-emerald">
            ✓
          </span>
          <span className="text-[11px] font-bold uppercase tracking-wider text-emerald">
            Fakt
          </span>
        </div>
        <p className="text-[17px] leading-relaxed text-dark">{reality}</p>
      </div>
    </div>
  );
}
