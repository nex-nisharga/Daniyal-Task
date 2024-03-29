import { Icons } from "@/components"; 
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="bg-blue-500">
      <h2 className="p-4 text-red-500">
        Hello <Icons.Moon />
      </h2>
      <h5>Now its time to create our site</h5>
      <Logo />
      <div className="w-full mt-20 bg-gray-500 h-80" data-aos="slide-up"></div>
      <div className="w-full mt-20 bg-gray-600 h-80" data-aos="zoom-im"></div>
      <div className="w-full mt-20 bg-gray-700 h-80" ></div>
      <div className="w-full mt-20 bg-gray-700 h-80" ></div>
      <div className="w-full mt-20 bg-gray-700 h-80" data-aos="slide-up"></div>
      <div className="w-full mt-20 bg-gray-800 h-80" data-aos="slide-left"></div>
    </div>
  );
}
