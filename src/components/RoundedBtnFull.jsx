import Link from "next/link";

const RoundedBtnFull = ({ label, route, className }) => {
  return (
    <Link
      href={route}
      className={`${className}  py-4 px-8 block font-medium text-gray-900 bg-white rounded-full`}
    >
      {label}
    </Link>
  );
};

export default RoundedBtnFull;
