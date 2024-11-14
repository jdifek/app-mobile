import { Footer } from "../Footer";

interface HomeAboutProps {
  className?: string;
}

const HomeAbout: React.FC<HomeAboutProps> = ({ className }) => {
  return (
    <div
      className={`w-full h-full p-[0px_30px_170px_30px] text-white ${className}`}
    >
      <header className="text-center py-10">
        <h3 className="font-[Rosarium] font-thin text-2xl">
          Добро пожаловать в приложение
        </h3>
        <h2 className="font-[Rosarium] mt-1 font-thin text-5xl">
          ”Слушай сказку”
        </h2>
      </header>
      <p className="bg-white text-center py-5 px-4 text-[#0C6BC5] font-semibold rounded-2xl">
        «Слушай сказку» — мир волшебных аудиосказок для ваших детей! Мы создали
        это приложение, чтобы каждый ребёнок мог легко погружаться
        в увлекательные истории, развивать фантазию и проводить время с пользой.
        <br />
        <br />
        Часть средств от каждой подписки мы ежемесячно перечисляем в детские
        благотворительные фонды, помогая детям, нуждающимся в поддержке.
        Оставайтесь с нами и позвольте вашим детям окунуться в мир сказок!
        <br />
        <br />
        <span className="underline text-sm">
          Согласие на обработку персональных данных
        </span>
        <br />
        <br />
        <span className="underline text-sm">
          Согласие на получение рекламной и информационной рассылки
        </span>
        <br />
        <br />
        <span className="underline text-sm">Пользовательское соглашение</span>
        <br />
        <br />
        <span className="underline text-sm">
          Политика обработки персональных данных
        </span>
      </p>
      <Footer />
    </div>
  );
};

export default HomeAbout;
