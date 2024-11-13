import { useState } from "react";

interface HomeVideoProps {
  className?: string;
  videoUrl: string;
}

const HomeVideo: React.FC<HomeVideoProps> = ({ className, videoUrl }) => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <div className="w-full h-[185px]" onClick={() => setClicked(true)}>
      {clicked ? (
        <video className={`w-full h-full ${className}`} controls>
          <source src={videoUrl} />
        </video>
      ) : (
        <div className="w-full h-full bg-gradient-to-r from-[#66b8f3] via-[#338de5] to-[#0073e6] flex items-center justify-center">
            <img src="/img/play.png" alt="play" width={104} height={120} />
        </div>
      )}
    </div>
  );
};

export default HomeVideo;
