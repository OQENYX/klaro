import { IconList, IconSearch, IconX } from "./icons";

const items = [
  {
    icon: <IconList />,
    title: "Studien statt Meinungen",
    desc: "Alle Aussagen mit wissenschaftlichen Quellen belegt. Keine Anekdoten, keine Halbwahrheiten.",
    bg: "rgba(5,150,105,.1)",
    color: "#059669",
    delay: "d1",
  },
  {
    icon: <IconSearch />,
    title: "Quellen immer sichtbar",
    desc: "Jeder Satz nachprüfbar. Jeder Artikel mit vollständigem Quellenverzeichnis.",
    bg: "rgba(2,132,199,.1)",
    color: "#0284C7",
    delay: "d2",
  },
  {
    icon: <IconX />,
    title: "Kein Marketing",
    desc: "Keine Produkte, keine Affiliate-Links, keine Empfehlungen. Nur Fakten.",
    bg: "rgba(124,58,237,.1)",
    color: "#7C3AED",
    delay: "d3",
  },
];

export default function WhySection() {
  return (
    <div
      className="mx-auto max-w-[1080px] px-5 pb-14 min-[860px]:px-8 min-[860px]:pb-20"
      id="why"
    >
      <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
        Warum NÄHRO?
      </div>
      <div
        className="rv mb-6 font-extrabold leading-[1.04] text-dark min-[860px]:mb-9"
        style={{
          fontSize: "clamp(26px, 3.5vw, 44px)",
          letterSpacing: "-.035em",
        }}
      >
        Das steckt dahinter.
      </div>
      <div className="grid grid-cols-1 gap-3 min-[860px]:grid-cols-3 min-[860px]:gap-3.5">
        {items.map((item) => (
          <div
            key={item.title}
            className={`rv ${item.delay} flex flex-col gap-3 rounded-[18px] bg-white p-6 min-[860px]:gap-3.5 min-[860px]:rounded-[22px] min-[860px]:p-8`}
            style={{
              border: "1px solid rgba(0,0,0,.05)",
              boxShadow: "0 2px 12px rgba(0,0,0,.04)",
            }}
          >
            <div
              className="flex h-10 w-10 items-center justify-center rounded-[12px] min-[860px]:h-[46px] min-[860px]:w-[46px] min-[860px]:rounded-[14px]"
              style={{ background: item.bg, color: item.color }}
            >
              {item.icon}
            </div>
            <div
              className="text-[16px] font-bold text-dark min-[860px]:text-[17px]"
              style={{ letterSpacing: "-.02em" }}
            >
              {item.title}
            </div>
            <p className="text-[13px] font-normal leading-[1.7] text-sub min-[860px]:text-sm min-[860px]:leading-[1.75]">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
