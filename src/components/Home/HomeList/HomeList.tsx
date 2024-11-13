import { Link } from "react-router-dom";
import HomeListItem from "./HomeListItem";

interface HomeListProps {
  className?: string;
}

const HomeList: React.FC<HomeListProps> = ({ className }) => {
  return (
    <ul className={`w-full gap-[30px] flex flex-col items-center ${className}`}>
      <HomeListItem>
        <Link
          to="/news"
          className="font-semibold text-xl flex items-center justify-center w-full h-full"
        >
          Новости и обновления
        </Link>
      </HomeListItem>
      <HomeListItem>
        <Link
          to="/social"
          className="font-semibold text-xl flex items-center justify-center w-full h-full"
        >
          Наши соцсети
        </Link>
      </HomeListItem>
      <HomeListItem>
        <Link
          to="/about"
          className="font-semibold text-xl flex items-center justify-center w-full h-full"
        >
          О приложении
        </Link>
      </HomeListItem>
    </ul>
  );
};

export default HomeList;
