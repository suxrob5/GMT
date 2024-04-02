// next
import Link from "next/link";

// type
interface HoverManufacturersType {
  isHoverManufacturers: boolean;
  handleMouseEnterManufacturers: () => void;
  handleMouseLeaveManufacturers: () => void;
}

const HoverManufacturers: React.FC<HoverManufacturersType> = ({
  isHoverManufacturers,
  handleMouseEnterManufacturers,
  handleMouseLeaveManufacturers,
}) => {
  return (
    <div
      className={`${isHoverManufacturers !== true ? "hidden" : "grid"} absolute z-10 ml-[30px] mt-8 rounded-xl bg-white`}
      onMouseEnter={handleMouseEnterManufacturers}
      onMouseLeave={handleMouseLeaveManufacturers}
    >
      <nav className="p-5">
        <ul>
          <li className="grid grid-cols-1">
            <Link href="#">A. KRÜSS Optronic</Link>
            <Link href="#">AnD</Link>
            <Link href="#">ATAGO</Link>
            <Link href="#">AWARENESS TECHNOLOGY</Link>
            <Link href="#">BEGER</Link>
            <Link href="#">Berrcom</Link>
            <Link href="#">BESTMAN</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HoverManufacturers;
