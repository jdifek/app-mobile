import { Link } from "react-router-dom";
import { Footer } from "../Footer";
import HomeList from "./HomeList/HomeList";
import HomeListItem from "./HomeList/HomeListItem";

interface HomeSocialProps {
  className?: string;
}

const HomeSocial: React.FC<HomeSocialProps> = ({ className }) => {
  const socials: { title: string; iconUrl: string; link: string }[] = [
    {
      title: "TG-канал “Слушай сказку”",
      iconUrl: "/img/telegram.png",
      link: "https://t.me/listenfairytale",
    },
    {
      title: "TG-канал “o.sychewa”",
      iconUrl: "/img/telegram.png",
      link: "https://t.me/sychewa",
    },
    {
      title: "Inst “Слушай сказку”",
      iconUrl: "/img/instagram.png",
      link: "https://www.instagram.com/listenfairytale/",
    },
    {
      title: "Inst Оля Сычева",
      iconUrl: "/img/instagram.png",
      link: "https://www.instagram.com/o.sychewa",
    },
    {
      title: "YouTube “Слушай сказку”",
      iconUrl: "/img/youtube.png",
      link: "https://www.youtube.com/@listenfairytale",
    },
    {
      title: "YouTube “o.sychewa”",
      iconUrl: "/img/youtube.png",
      link: "https://www.youtube.com/@osychewa",
    },
    {
      title: "Tik-Tok “Слушай сказку”",
      iconUrl: "/img/tiktok.png",
      link: "https://www.tiktok.com/@listenfairytale",
    },
  ];

  return (
    <div
      className={`w-full h-screen p-[55px_30px_170px_30px] text-white ${className}`}
    >
      <h2 className="font-thin text-6xl text-center mb-8 font-[Rosarium]">Наши соцсети</h2>

      <ul
        className={`w-full gap-[30px] flex flex-col items-center ${className}`}
      >
        {socials.map((item, index) => (
          <HomeListItem key={index} className="relative overflow-hidden">
            <Link target="__blank" className="font-semibold text-lg max-[380px]:text-base flex items-center pl-7 w-full h-full" to={item.link}>
                <span>{item.title}</span>
                <img src={item.iconUrl} alt={item.title} className="absolute -right-2 w-[100px] max-[380px]:w-[70px] top-1/2 -translate-y-1/2" />
            </Link>
          </HomeListItem>
        ))}
      </ul>

      <Footer />
    </div>
  );
};

export default HomeSocial;
