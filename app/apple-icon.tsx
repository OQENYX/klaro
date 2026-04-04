import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "40px",
          fontFamily: "sans-serif",
        }}
      >
        {/* Green top accent */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "6px",
            background: "linear-gradient(90deg, #059669, #34d399)",
            borderRadius: "40px 40px 0 0",
          }}
        />
        <div
          style={{
            color: "#ffffff",
            fontSize: "96px",
            fontWeight: 900,
            letterSpacing: "-0.04em",
          }}
        >
          N
        </div>
      </div>
    ),
    { ...size }
  );
}
