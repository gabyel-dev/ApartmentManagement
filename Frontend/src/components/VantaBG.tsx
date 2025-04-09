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
      scaleMobile: 0.5,
      backgroundColor: 0xfefeff,
      color: 0x6b6e70,
      points: 5,
      maxDistance: 20,
      spacing: 20,
    });

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return <div className="bg" ref={vantaRef}></div>;
}
