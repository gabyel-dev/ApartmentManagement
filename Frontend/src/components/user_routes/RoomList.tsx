import CardLayout from "../RoomCards/CardLayout";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const search = <FontAwesomeIcon icon={faSearch} />;

export default function RoomList() {
  return (
    <>
      <div className="h-fit pb-20">
        <nav className="h-15 bg-[var(--gray)] flex justify-center items-center text-white border-t-[var(--base-green)] border-t-2">
          <div className="flex justify-between w-full px-[5vw] md:px-[10vw] font">
            <div className="flex gap-4 items-center justify-between md:justify-center w-full text-sm md:w-70">
              <p>Find all rooms available:</p>
              <select
                defaultValue=""
                className="border-1 border-[var(--dark-green)] w-20 outline-0 text-white"
              >
                <option value="all" className="text-black">
                  All
                </option>
                <option value="price" className="text-black">
                  Price
                </option>
                <option value="size" className="text-black">
                  Size
                </option>
              </select>
            </div>
            <div className="hidden md:block">
              <div className="outline-0 rounded-full border-1 border-[var(--dark-green)] bg-[var(--light-gray)] px-3 py-1 flex gap-3 items-center">
                {search}
                <input
                  type="text"
                  placeholder="search rooms.."
                  className="outline-0"
                />
              </div>
            </div>
          </div>
        </nav>

        <div className="py-[10vh] px-0 md:px-[10vw] z-[-1] flex flex-col justify-center items-center">
          <h1 className="text-[var(--base-green)] text-xl pb-10">ROOMS</h1>
          <CardLayout />
        </div>
      </div>
    </>
  );
}
