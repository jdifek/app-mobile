export const Subscription = () => {
  return (
    <div className="w-full h-screen">
      <div
        className="px-[55px] py-[35px] w-full h-[40vh] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-none rounded-br-none absolute bottom-0 flex flex-col items-center justify-center bg-gradient-to-b from-[#6ec1e4] to-[#b3e5fc]"
        style={{
          background:
            "radial-gradient(119.41% 109.58% at 96.62% 100%, rgb(103, 198, 255) 0%, rgb(18, 124, 241) 63.837021589279175%, rgb(16, 118, 229) 100%)",
        }}
      >
        <h1
          className="text-white text-center text-[24px] leading-[150%] tracking-[0.02em] font-semibold"
          style={{ fontFamily: "var(--font-family)" }}
        >
          Подпишись на канал «Слушай Сказку»
        </h1>

        <div className="flex flex-col gap-4 mt-4">
          <button
            className="text-white text-center text-[16px] font-semibold"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Перейти в канал
          </button>

          <button
            className="text-[#1b405a] text-center text-[20px] font-semibold"
            style={{ fontFamily: "var(--font-family)" }}
          >
            Проверить и получить бонусы
          </button>
        </div>
      </div>
    </div>
  );
};

// export const Subscription = () => {
//   return (
//     <div
//       className="px-[55px] py-[35px] w-full h-[30vh] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-none rounded-br-none absolute bottom-0 flex flex-col items-center justify-center"
//     >
//       <h1
//         style={{ fontFamily: "var(--font-family)" }}
//         className="text-white text-center text-[24px] leading-[196%] tracking-[0.02em] font-semibold"
//         >
//         Вам начислены бонусы
//       </h1>
//       <h2
//         style={{ fontFamily: "var(--font-family)" }}
//         className="text-white text-center text-[20px] font-bold"
//         >
//         +200 монет
//       </h2>
//     </div>
//   );
// };
