import { Link } from "react-router-dom";

interface HomeBookProps {
  className?: string;
}

const HomeBook: React.FC<HomeBookProps> = ({ className }) => {
  return (
    <Link
      className={`w-full h-[185px] mt-6 relative bg-gradient-to-r from-[#66b8f3] via-[#338de5] to-[#0073e6] ${className}`}
      to="/library"
    >
      <div className="w-full h-full relative overflow-hidden">
        <img
          src="/img/note.png"
          alt=""
          className="absolute left-[30px] bottom-[24px]"
        />
        <img
          src="/img/note.png"
          alt=""
          className="absolute left-[42px] top-[13px]"
        />
        <img
          src="/img/note.png"
          alt=""
          className="absolute left-1/2 -translate-x-1/2 -top-6           overflow-hidden"
        />
      </div>

      <img src="/img/book.png" className="absolute right-0 bottom-0" />
    </Link>
  );
};

export default HomeBook;
