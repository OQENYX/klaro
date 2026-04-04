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
      className="mx-auto max-w-[1080px] px-8 pb-20 max-[860px]:px-5"
      id="why"
    >
      <div className="rv mb-2 text-[11px] font-bold uppercase tracking-[.1em] text-sub">
        Warum NÄHRO?
      </div>
      <div
        className="rv mb-9 font-extrabold leading-[1.04] text-dark"
        style={{
          fontSize: "clamp(28px, 3.5vw, 44px)",
          letterSpacing: "-.035em",
        }}
      >
        Das steckt dahinter.
      </div>
      <div className="grid grid-cols-3 gap-3.5 max-[860px]:grid-cols-1">
        {items.map((item) => (
          <div
            key={item.title}
            className={`rv ${item.delay} flex flex-col gap-3.5 rounded-[22px] bg-white p-8`}
            style={{
              border: "1px solid rgba(0,0,0,.05)",
              boxShadow: "0 2px 12px rgba(0,0,0,.04)",
            }}
          >
            <div
              className="flex h-[46px] w-[46px] items-center justify-center rounded-[14px]"
              style={{ background: item.bg, color: item.color }}
            >
              {item.icon}
            </div>
            <div
              className="text-[17px] font-bold text-dark"
              style={{ letterSpacing: "-.02em" }}
            >
              {item.title}
            </div>
            <p className="text-sm font-normal leading-[1.75] text-sub">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
