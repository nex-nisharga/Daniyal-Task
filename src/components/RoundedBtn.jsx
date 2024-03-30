import Link from "next/link";

const RoundedBtn = ({ label, route, className }) => {
  return (
    <Link
      href={route}
      className={`${className} py-4 px-8 font-medium text-gray-900 bg-white rounded-full`}
    >
      {label}
    </Link>
  );
};

export default RoundedBtn;
