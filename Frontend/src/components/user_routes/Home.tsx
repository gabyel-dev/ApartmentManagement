import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/NavbarHome";
import CardLayout from "../RoomCards/CardLayoutHome";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex flex-col items-center pt-23 md:pt-25">
          <h1 className="text-md text-[var(--base-green)] font">
            RENT NOW ON APT-EASE!
          </h1>
        </div>
        <CardLayout />
      </div>
      <div></div>
    </div>
  );
}
