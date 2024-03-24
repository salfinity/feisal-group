import Link from "next/link";
import Image from "next/image";

const LogoTwo = () => {
  return (
    <Link href={"/"}>
      <Image
        src="/FANDP2.png"
        className="w-full h-10 object-contain"
        width={130}
        height={130}
        alt="LogoTwo"
        priority
      />
    </Link>
  );
};

export default LogoTwo;
