import React from "react";
import MainFooter from "./footer-ui";

export default function Footer() {
  return (
    <div
      className="relative min-h-screen"
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
    >
      <div className="fixed bottom-4 2xl:-bottom-32 min-h-screen w-full ">
        <MainFooter />
      </div>
    </div>
  );
}
