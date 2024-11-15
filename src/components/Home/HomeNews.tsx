import { useEffect, useState } from "react";
import { Footer } from "../Footer";
import HomeBookCard from "./HomeBookCard";
import { fetchAudiobooks } from "../../api/axios.books";

interface HomeNewsProps {
  className?: string;
}

const HomeNews: React.FC<HomeNewsProps> = ({ className }) => {

  const [audiobooks, setAudiobooks] = useState([]);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const loadAudiobooks = async () => {
      try {
        const data = await fetchAudiobooks();
        setAudiobooks(data);
      } catch (err) {
        setError('Не удалось загрузить аудиокниги');
      }
    };
    loadAudiobooks();
  }, []);
  return (
    <div
      className={`w-full h-full p-[55px_30px_170px_30px] font-nunito ${className}`}
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
