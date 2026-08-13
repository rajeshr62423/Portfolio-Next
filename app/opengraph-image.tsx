import { ImageResponse } from "next/og";

export const alt = "Rajesh R — Full Stack Developer (MERN)";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "90px",
          background: "#0A0C12",
          color: "#EAECF3",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 36,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              background: "#5FE6C0",
              display: "flex",
            }}
          />
          <div style={{ fontSize: 32, fontWeight: 600, display: "flex" }}>
            Rajesh R.
          </div>
        </div>
        <div
          style={{
            fontSize: 64,
            fontWeight: 700,
            lineHeight: 1.15,
            maxWidth: 950,
            display: "flex",
          }}
        >
          Full Stack Developer&nbsp;
          <span style={{ color: "#5FE6C0", display: "flex" }}>(MERN)</span>
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#8B92A9",
            marginTop: 32,
            maxWidth: 860,
            display: "flex",
          }}
        >
          Building ERP-scale web &amp; mobile apps with React, React Native,
          Node.js and MongoDB.
        </div>
        <div
          style={{
            fontSize: 24,
            color: "#5FE6C0",
            marginTop: 44,
            fontFamily: "monospace",
            display: "flex",
          }}
        >
          Chennai, IN · Open to work
        </div>
      </div>
    ),
    { ...size }
  );
}
