export const Footer = () => {
  return (
    <footer className="w-full bg-white rounded-t-[20px] pb-[44px] pt-[39px] h-[150px] fixed bottom-0 left-0 z-10">
      <div className="flex justify-center items-center gap-[28px]">
        <div className="flex flex-col items-center">
          <img className="w-[48px] h-[48px]" src="./img/Frame 310.svg" alt="" />
          <p className="text-black text-[12px] leading-[167%] font-medium">
            Домашняя
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-[48px] h-[48px]" src="./img/Frame 311.svg" alt="" />
          <p className="text-black text-[12px] leading-[167%] font-medium">
            Подписка
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-[48px] h-[48px]" src="./img/Frame 312.svg" alt="" />
          <p className="text-black text-[12px] leading-[167%] font-medium">
            Бонусы
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img className="w-[48px] h-[48px]" src="./img/Frame 313.svg" alt="" />
          <p className="text-black text-[12px] leading-[167%] font-medium">
            Профиль
          </p>
        </div>
      </div>
    </footer>
  );
};
