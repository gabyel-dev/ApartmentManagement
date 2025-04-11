import Card from "../RoomCards/card";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

// Define the Room type
interface Room {
  title: string;
  sizex: number;
  sizey: number;
  price: number;
  bedrooms: number;
  bathrooms: number;
  room_status: string;
  img_url: string;
}

export default function CardLayout() {
  const [rooms, setRooms] = useState<Room[]>([]); // Room data
  const [visibleRooms, setVisibleRooms] = useState<number[]>([]); // Indices of visible rooms
  const roomRefs = useRef<(HTMLDivElement | null)[]>([]); // Refs for each room card

  // Fetch the rooms from the API
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    const fetchRooms = async () => {
      try {
        const res = await axios.get(`${url}/rooms`);
        const fetchedRooms: Room[] = res.data.map((roomData: any) => ({
          title: roomData.title,
          sizex: roomData.sizex,
          sizey: roomData.sizey,
          price: roomData.price,
          bedrooms: roomData.bedrooms,
          bathrooms: roomData.bathrooms,
          room_status: roomData.room_status,
          img_url: roomData.img_url,
        }));

        setRooms(fetchedRooms);
      } catch (error) {
        console.error("Error fetching rooms:", error);
      }
    };

    fetchRooms();
  }, []);

  // Set up IntersectionObserver to observe room visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = entry.target.dataset.index; // Type 'any'
          if (index) {
            const roomIndex = parseInt(index, 10);
            if (entry.isIntersecting) {
              // Add room to visibleRooms when it's in the viewport
              setVisibleRooms((prev) => [...prev, roomIndex]);
            } else {
              // Remove room from visibleRooms when it's out of the viewport
              setVisibleRooms((prev) => prev.filter((id) => id !== roomIndex));
            }
          }
        });
      },
      {
        root: null, // Use the viewport as the root
        rootMargin: "0px", // No margin
        threshold: 0.1, // Trigger when 10% of the element is in view
      }
    );

    // Observe each room card
    roomRefs.current.forEach((room) => {
      if (room) {
        observer.observe(room);
      }
    });

    // Cleanup the observer when the component unmounts
    return () => {
      roomRefs.current.forEach((room) => {
        if (room) {
          observer.unobserve(room);
        }
      });
    };
  }, [rooms]); // Removed visibleRooms from dependencies to prevent infinite loop

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-6 w-full  md:max-w-[100vw]  ">
      {rooms.map((room, index) => (
        <div
          key={index}
          ref={(el) => (roomRefs.current[index] = el)} // Assign ref to each room
          data-index={index} // Store the index to identify which room is being observed
          className="relative h-80 z-[-1] overflow-hidden shadow-lg group border-b-3 border-t-3 border-[var(--base-green)]"
        >
          {/* Only render the card if it's in the viewport (visibleRooms includes this index) */}
          {visibleRooms.includes(index) && (
            <>
              {/* Background Image */}
              <img
                src={room.img_url}
                alt={room.title}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Title + Price + Status */}
              <div className="absolute bottom-0 p-4 text-white w-full">
                <h2 className="text-xl font-bold">{room.title}</h2>
                <p className="text-lg font-semibold">
                  ₱{room.price.toLocaleString()}
                </p>
                <span
                  className={`inline-block ${
                    room.room_status === "available"
                      ? "bg-[var(--base-green)]"
                      : room.room_status === "occupied"
                      ? "bg-amber-300"
                      : "bg-red-500"
                  } text-sm px-2 py-1 mt-1 rounded`}
                >
                  {room.room_status}
                </span>
              </div>

              {/* Details */}
              <div className="absolute top-3 left-3 bg-white bg-opacity-80 text-gray-800 text-xs px-3 py-1 rounded shadow">
                {room.sizex} m² | {room.bedrooms} BR | {room.bathrooms} Bath
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
