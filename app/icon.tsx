import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#111111",
          width: 32,
          height: 32,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "7px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            color: "#ffffff",
            fontSize: "17px",
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
