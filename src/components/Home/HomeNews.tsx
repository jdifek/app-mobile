import { Footer } from "../Footer";
import HomeBookCard from "./HomeBookCard";

interface HomeNewsProps {
  className?: string;
}

const HomeNews: React.FC<HomeNewsProps> = ({ className }) => {
  return (
    <div
      className={`w-full h-screen p-[55px_30px_170px_30px] font-nunito ${className}`}
    >
      <ul className="flex flex-col items-center gap-5">
        <HomeBookCard
          title="“Название книги”"
          date="1 ноября"
          text="В библиотеке книг опубликована новая книга"
          imgUrl="/img/book.png"
        />
        <HomeBookCard
          title="“Название книги”"
          date="1 ноября"
          text="В библиотеке книг опубликована новая книга"
          imgUrl="/img/book.png"
        />
        <HomeBookCard
          title="“Название книги”"
          date="1 ноября"
          text="В библиотеке книг опубликована новая книга"
          imgUrl="/img/book.png"
        />
      </ul>
      <Footer />
    </div>
  );
};

export default HomeNews;
