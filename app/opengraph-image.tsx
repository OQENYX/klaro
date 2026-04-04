import { ImageResponse } from "next/og";

export const alt = "NÄHRO — Ernährung. Erklärt.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "flex-end",
          padding: "80px",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Green top bar */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #059669, #34d399)",
          }}
        />

        {/* Main content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.15em",
              color: "#059669",
            }}
          >
            NÄHRO
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "72px",
              fontWeight: 900,
              color: "#ffffff",
              lineHeight: 1.05,
              letterSpacing: "-0.04em",
            }}
          >
            Ernährung. Erklärt.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "26px",
              fontWeight: 500,
              color: "rgba(255,255,255,0.45)",
            }}
          >
            Wissenschaftlich. Ohne Umwege. Jeder Satz mit Quelle.
          </div>
        </div>

        {/* URL bottom right */}
        <div
          style={{
            display: "flex",
            position: "absolute",
            bottom: "60px",
            right: "80px",
            fontSize: "18px",
            color: "rgba(255,255,255,0.2)",
            fontWeight: 500,
          }}
        >
          nähro.ch
        </div>
      </div>
    ),
    { ...size }
  );
}
