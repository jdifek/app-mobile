import { PropsWithChildren } from "react";

interface HomeListItemProps {
  className?: string;
}

const HomeListItem: React.FC<PropsWithChildren<HomeListItemProps>> = ({
  className,
  children,
}) => {
  return (
    <li
      className={`bg-gradient-to-r from-[#66b8f3] via-[#338de5] to-[#0073e6] w-full h-[60px] rounded-3xl text-white ${className}`}
    >
      {children}
    </li>
  );
};

export default HomeListItem;
