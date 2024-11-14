import React from "react";
import { Footer } from "../Footer";

export const Library = () => {
  return (
    <>
      <div className="px-[30px] py-[60px] w-full h-full min-h-screen pb-[200px]">
        <div className="flex justify-center items-center bg-gradient-to-b from-[#3BA4FF] to-[#007BFF] rounded-[16px] h-[185px] mb-[100px]">
          <img src="./img/triagle-library.svg" alt="" />
        </div>
        <div className="flex flex-col gap-5">
          {[1, 2, 3, 4].map((el) => (
            <button
              key={el}
              className="bg-gradient-to-r from-[#00d2ff] to-[#3a7bd5] text-white rounded-full px-6 py-2 shadow-lg hover:from-[#3a7bd5] hover:to-[#00d2ff] transition duration-300 h-[60px] w-full"
            >
              Название книги
            </button>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};
