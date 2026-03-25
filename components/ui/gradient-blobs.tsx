"use client";

export function GradientBlobs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Left fog */}
      <div
        className="absolute"
        style={{
          width: 700,
          height: "100%",
          top: 0,
          left: "-10%",
          background: "linear-gradient(to right, #161616 0%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Right fog */}
      <div
        className="absolute"
        style={{
          width: 700,
          height: "100%",
          top: 0,
          right: "-10%",
          background: "linear-gradient(to left, #161616 0%, transparent 100%)",
          opacity: 0.6,
        }}
      />

      {/* Top-left blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 900,
          height: 900,
          top: "-15%",
          left: "-20%",
          background: "radial-gradient(circle, #1c1c1c 0%, transparent 65%)",
          opacity: 0.8,
          filter: "blur(80px)",
        }}
      />

      {/* Mid-right blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 700,
          height: 700,
          top: "40%",
          right: "-15%",
          background: "radial-gradient(circle, #1a1a1a 0%, transparent 65%)",
          opacity: 0.7,
          filter: "blur(100px)",
        }}
      />

      {/* Bottom-left blob */}
      <div
        className="absolute rounded-full"
        style={{
          width: 600,
          height: 600,
          bottom: "10%",
          left: "-10%",
          background: "radial-gradient(circle, #1e1e1e 0%, transparent 65%)",
          opacity: 0.6,
          filter: "blur(90px)",
        }}
      />

      {/* Center-bottom fog wisp */}
      <div
        className="absolute rounded-full"
        style={{
          width: 1200,
          height: 400,
          bottom: "25%",
          left: "20%",
          background: "radial-gradient(ellipse, #181818 0%, transparent 70%)",
          opacity: 0.5,
          filter: "blur(120px)",
        }}
      />
    </div>
  );
}
