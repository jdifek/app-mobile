import { PropsWithChildren } from "react";

const HiFooter: React.FC<PropsWithChildren<{ className?: string }>> = ({
  className,
  children,
}) => {
  return (
    <footer
      className={`fixed bottom-6 w-full left-1/2 -translate-x-1/2 bg-white flex items-end justify-center shadow-[0px_-35px_80px_180px_#fff] pb-10 ${className}`}
    >
      {children}
    </footer>
  );
};

export default HiFooter;
