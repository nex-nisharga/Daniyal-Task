import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <Image
      height={35}
      width={100}
      src={"/logo.png"}
      alt="site-logo"
      className={`${className} h-9 md:h-12 w-auto`}
      unoptimized
    />
  );
};

export default Logo;
