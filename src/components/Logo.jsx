import Image from "next/image";

const Logo = ({ className }) => {
  return (
    <Image
      height={35}
      width={100}
      src={"/logo.png"}
      alt="site-logo"
      className={`${className} h-8 md:h-9 w-auto`}
      unoptimized
    />
  );
};

export default Logo;
