import { ImageResponse } from "next/og";

export const alt = "Darrel Wihandi — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        background: "#111111",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 96px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ color: "#ededed", fontSize: 72, fontWeight: 500, letterSpacing: "-0.02em" }}>
        Darrel Wihandi
      </div>
      <div style={{ color: "#888", fontSize: 36, marginTop: 24 }}>
        Graphics, compilers & GPU systems
      </div>
      <div style={{ color: "#555", fontSize: 28, marginTop: 48 }}>
        Software Engineering @ Waterloo
      </div>
    </div>,
    { ...size }
  );
}
