import { Adds, Feature, HeroSlider } from "./components";

export default function Home() {
  return (
    <>
      <div className="pb-10">
        <HeroSlider />
        <Feature />
        <Adds />
      </div>
    </>
  );
}
