import { useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min.js";
import * as THREE from "three";
import React from "react";
import "../components/css/Vanta.css";

export default function VantaBackground() {
  const vantaRef = useRef(null);

  useEffect(() => {
    const vantaEffect = NET({
      el: vantaRef.current,
      THREE,
      mouseControls: true,
      touchControls: true,
      gyroControls: true,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      backgroundColor: 0xfefeff,
      color: 0x86c232,
      points: 10,
      maxDistance: 14,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div className="bg" ref={vantaRef}></div>;
}
