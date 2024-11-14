import { ButtonHTMLAttributes, PropsWithChildren } from "react";

const HiButton: React.FC<
  PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>
> = ({ children, ...props }) => {
  return (
    <button
      {...props}
      className="bg-gradient-to-r font-bold text-3xl from-[#70dbff] via-[#A281FC] to-[#683AE9] text-white py-3 px-8 rounded-full shadow-[0px_5px_15px_1px_rgba(0,0,0,.3)]"
    >
      {children}
    </button>
  );
};

export default HiButton;
