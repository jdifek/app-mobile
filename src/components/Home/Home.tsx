import { Footer } from "../Footer";
import HomeBook from "./HomeBook";
import HomeList from "./HomeList/HomeList";
import HomeVideo from "./HomeVideo";

export const Home = () => {
  return (
    <div className="p-[55px_30px_170px_30px] overflow-visible w-full h-full bg-gradient-to-b from-[#6ec1e4] to-[#b3e5fc] flex flex-col items-center gap-11">
      <HomeVideo videoUrl="video.mp4" />
      <HomeBook />
      <HomeList />

      <Footer />
    </div>
  );
};