import Card from "./card";
import axios from "axios";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import Navbar from "../Navbar/NavbarHome";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function CardLayout() {
  const [rooms, setRooms] = useState<Card[]>([]);

  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    const fetchRooms = async () => {
      const res = await axios.get(`${url}/rooms`);
      const fetchedRooms = res.data.map((roomData: any) => {
        return new Card(
          roomData.title,
          roomData.sizex,
          roomData.sizey,
          roomData.price,
          roomData.bedrooms,
          roomData.bathrooms,
          roomData.room_status,
          roomData.img_url
        );
      });
      setRooms(fetchedRooms);
    };
    fetchRooms();
  }, []);

  return (
    <>
      {/* Navbar with fixed position and z-index */}
      <div className="fixed w-full top-0 z-50">
        <Navbar />
      </div>

      <h1 className="text-center pt-22 text-[var(--base-green)] ">
        FIND ROOMS NOW HERE IN APT-EASE!
      </h1>

      {/* Add top padding to avoid overlapping the navbar */}
      <div className="w-full pt-8">
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          loop
          className="w-full h-[500px]"
        >
          {rooms.map((room, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-[500px]">
                {/* Background Image */}
                <img
                  src={room.img_url}
                  alt="room_img"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                {/* Text Info */}
                <div className="absolute bottom-6 left-6 text-white z-10">
                  <h2 className="text-3xl font-bold">{room.title}</h2>
                  <p className="text-xl">₱{room.price.toLocaleString()}</p>
                  <div className="flex gap-4 mt-2 text-sm">
                    <span>{room.sizex} m²</span>
                    <span>{room.bedrooms} Bedroom</span>
                    <span>{room.bathrooms} Bath</span>
                    <span
                      className={`px-2 py-1 rounded ${
                        room.room_status === "available"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    >
                      {room.room_status}
                    </span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
