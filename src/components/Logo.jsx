import Link from "next/link";
import clsx from "clsx";

const Logo = ({ className, props }) => {
  return (
    <Link href={"/"}>
      <h2
        className={clsx(
          "text-3xl font-bold text-[#fdfcfd] hover:text-[#c3c2c3] duration-300",
          className
        )}
        {...props}
      >
        Feisal-Group
      </h2>
    </Link>
  );
};

export default Logo;
