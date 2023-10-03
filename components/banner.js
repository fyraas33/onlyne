import bnr from "@/public/img/bnr.jpg";
import mbbnr from "@/public/img/mbbnr.png";
import Image from "next/image";
export default function Banner() {
  return (
    <div>
      <Image
        src={bnr}
        alt="bnr"
        className="bnr rounded-[100px] shadow-lg"
        width={"100%"}
        height={"100%"}
        placeholder="blur"
      />
          <Image
        src={mbbnr}
        alt="bnr"
        className="mbbnr "
        width={"100%"}
        height={"100%"}
        placeholder="blur"
      />
    </div>
  );
}
