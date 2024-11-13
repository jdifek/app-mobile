import HomeBook from "./HomeBook";
import HomeVideo from "./HomeVideo";

export const Home = () => {
  return (
    <div className="px-[30px] py-[60px] overflow-visible w-full h-screen bg-gradient-to-b from-[#6ec1e4] to-[#b3e5fc] flex flex-col items-center gap-11">
      <HomeVideo videoUrl="video.mp4" />
      <HomeBook />
    </div>
  );
};
