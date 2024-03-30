import { Icons } from "@/components";
import Logo from "@/components/Logo";

export default function Home() {
  return (
    <div className="bg-blue-500">
      <h2 className="p-4 text-red-500">
        Hello <Icons.Moon />
      </h2>
      <div className="container">
        <h5>Now its time to create our site</h5>
        <Logo />
      </div>
    </div>
  );
}
