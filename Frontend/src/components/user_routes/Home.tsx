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
        <CardLayout />
      </div>
    </div>
  );
}
