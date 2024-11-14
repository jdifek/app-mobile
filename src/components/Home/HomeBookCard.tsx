interface HomeBookCardProps {
  className?: string;
  title: string;
  date: string;
  text: string;
  imgUrl: string;
}

const HomeBookCard: React.FC<HomeBookCardProps> = ({
  className,
  date,
  imgUrl,
  text,
  title,
}) => {
  return (
    <li
      className={`w-full h-[185px] overflow-hidden z-3 p-4 bg-gradient-to-r text-white from-[#66b8f3] via-[#338de5] to-[#0073e6] rounded-3xl flex justify-between flex-col items-start relative ${className}`}
    >
      <h3 className="font-semibold text-2xl">{title}</h3>

      <div className="flex flex-col items-start w-full gap-2">
        <span className="text-sm">{date}</span>
        <p className="w-3/4 text-wrap font-semibold text-lg">{text}</p>
      </div>

      <img
        src={imgUrl}
        alt={title}
        className="absolute top-1/2 -translate-y-1/2 -right-4 h-1/2 z-2"
      />
    </li>
  );
};

export default HomeBookCard;
