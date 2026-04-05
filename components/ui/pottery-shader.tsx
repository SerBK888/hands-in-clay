"use client";

import { useState } from "react";
import { MeshGradient, DotOrbit } from "@paper-design/shaders-react";

export function PotteryShader() {
  const [speed] = useState(1.0);
  const [activeEffect] = useState<"mesh" | "dots" | "combined">("mesh");

  return (
    <div className="fixed inset-0 w-full h-full bg-black z-0 overflow-hidden">
      {activeEffect === "mesh" && (
        <MeshGradient
          className="w-full h-full absolute inset-0"
          colors={["#000000", "#3B1A0A", "#A0522D", "#D2B48C"]}
          speed={speed}
        />
      )}

      {activeEffect === "dots" && (
        <div className="w-full h-full absolute inset-0 bg-black">
          <DotOrbit
            className="w-full h-full"
            colorBack="#0a0503"
            colors={["#A0522D", "#D2B48C", "#8B4513", "#6B3410"]}
            speed={speed}
            size={0.5}
            spreading={0.6}
          />
        </div>
      )}

      {activeEffect === "combined" && (
        <>
          <MeshGradient
            className="w-full h-full absolute inset-0"
            colors={["#000000", "#3B1A0A", "#A0522D", "#D2B48C"]}
            speed={speed * 0.5}
          />
          <div className="w-full h-full absolute inset-0 opacity-60">
            <DotOrbit
              className="w-full h-full"
              colorBack="#0a0503"
              colors={["#A0522D", "#D2B48C", "#8B4513", "#6B3410"]}
              speed={speed * 1.5}
              size={0.4}
              spreading={0.5}
            />
          </div>
        </>
      )}

      {/* Lighting overlay effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#A0522D]/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: `${3 / speed}s` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-[#D2B48C]/[0.02] rounded-full blur-2xl animate-pulse"
          style={{ animationDuration: `${2 / speed}s`, animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-20 h-20 bg-[#8B4513]/[0.03] rounded-full blur-xl animate-pulse"
          style={{ animationDuration: `${4 / speed}s`, animationDelay: "0.5s" }}
        />
      </div>
    </div>
  );
}
