export const ListenToAFairyTale = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="px-[55px] py-[35px] w-full h-[40vh] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-none rounded-br-none absolute bottom-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#6ec1e4] to-[#b3e5fc]"
        style={{
          background:
            "radial-gradient(119.41% 109.58% at 96.62% 100%, rgb(103, 198, 255) 0%, rgb(18, 124, 241) 63.837021589279175%, rgb(16, 118, 229) 100%)",
        }}
      >
        <h1 className="text-white text-center text-[24px] leading-[150%] tracking-[0.02em] font-semibold">
          Подпишись на канал <br></br> «Слушай Сказку»
        </h1>

        <div className="flex flex-col gap-4 mt-4">
          <button
            className="
         h-[54px]  text-white text-center text-[16px] font-semibold bg-gradient-to-r from-[#00b4ff] to-[#007cff] rounded-full px-6 py-2"
          >
            Перейти в канал
          </button>
          <button className="text-[#1b405a] text-center text-[20px] font-semibold bg-white border rounded-full px-6 py-2">
            Проверить и получить бонусы
          </button>
        </div>
      </div>
    </div>
  );
};
