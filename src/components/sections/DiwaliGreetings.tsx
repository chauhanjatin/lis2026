import Image from "next/image";
import "@/app/globals.css";
import diwaliGreeting from "../../../public/happy-diwali.gif";

const DiwaliGreetings = () => {
  return (
    <div className="floral-diwali">
      <Image
        src={diwaliGreeting}
        alt="Happy Diwali written with colourful flowers"
        width={2038}
        height={682}
        priority
        className="floral-diwali-image"
      />
    </div>
  );
};

export default DiwaliGreetings;
