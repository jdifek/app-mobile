import { Footer } from "../Footer";

export const Profile = () => {
  return (
    <>
      <div className="px-[30px] py-[60px] w-full min-h-screen pb-[200px] ">
        <div className="pt-[20px] pr-[25px] pl-[20px] w-full h-[400px] bg-white rounded-[20px] ">
          <h1 className="font-bold text-[18px] leading-[111%] text-[#0c6bc5] mb-[10px] ">
            Мои данные
          </h1>

          <div className="flex justify-between">
            <div className="flex items-center gap-x-[16px]">
              <img src="./img/Group 2085653793.svg" alt="" />
              <h2 className="semi-bold text-[14px] leading-[111%] text-[#0c6bc5]">
                Мои данные
              </h2>
            </div>
            <img src="./img/Profile-strelka.svg" alt="" />
          </div>

          <div
            style={{
              borderBottom: "1px solid rgb(164, 215, 255)",
              boxSizing: "border-box",
              marginTop: "10px",
              marginBottom: "10px",
              width: "calc(100% + 45px)", // 100% ширины плюс 20px слева и 25px справа
              marginLeft: "-20px", // Идем на 20px влево, чтобы игнорировать padding слева
              marginRight: "-25px", // Идем на 25px вправо, чтобы игнорировать padding справа
            }}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-x-[16px]">
              <img src="./img/Group 2085653794.svg" alt="" />
              <h2 className="semi-bold text-[14px] leading-[111%] text-[#0c6bc5]">
                Получить бонусы
              </h2>
            </div>
            <img src="./img/Profile-strelka.svg" alt="" />
          </div>

          <div
            style={{
              borderBottom: "1px solid rgb(164, 215, 255)",
              boxSizing: "border-box",
              marginTop: "10px",
              marginBottom: "10px",
              width: "calc(100% + 45px)", // 100% ширины плюс 20px слева и 25px справа
              marginLeft: "-20px", // Идем на 20px влево, чтобы игнорировать padding слева
              marginRight: "-25px", // Идем на 25px вправо, чтобы игнорировать padding справа
            }}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-x-[16px]">
              <img src="./img/Group 2085653799.svg" alt="" />
              <h2 className="semi-bold text-[14px] leading-[111%] text-[#0c6bc5]">
                Мои аудиокниги
              </h2>
            </div>
            <img src="./img/Profile-strelka.svg" alt="" />
          </div>

          <div
            style={{
              borderBottom: "1px solid rgb(164, 215, 255)",
              boxSizing: "border-box",
              marginTop: "10px",
              marginBottom: "10px",
              width: "calc(100% + 45px)", // 100% ширины плюс 20px слева и 25px справа
              marginLeft: "-20px", // Идем на 20px влево, чтобы игнорировать padding слева
              marginRight: "-25px", // Идем на 25px вправо, чтобы игнорировать padding справа
            }}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-x-[16px]">
              <img src="./img/Group 2085653801.svg" alt="" />
              <h2 className="semi-bold text-[14px] leading-[111%] text-[#0c6bc5]">
                Подписка
              </h2>
            </div>
            <img src="./img/Profile-strelka.svg" alt="" />
          </div>

          <div
            style={{
              borderBottom: "1px solid rgb(164, 215, 255)",
              boxSizing: "border-box",
              marginTop: "10px",
              marginBottom: "10px",
              width: "calc(100% + 45px)", // 100% ширины плюс 20px слева и 25px справа
              marginLeft: "-20px", // Идем на 20px влево, чтобы игнорировать padding слева
              marginRight: "-25px", // Идем на 25px вправо, чтобы игнорировать padding справа
            }}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-x-[16px]">
              <img src="./img/Group 2085653803.svg" alt="" />
              <h2
                className="semi-bold text-[14px] leading-[111%] text-[#0c6bc5]"
              >
                Служба заботы
              </h2>
            </div>
            <img src="./img/Profile-strelka.svg" alt="" />
          </div>

          <div
            style={{
              borderBottom: "1px solid rgb(164, 215, 255)",
              boxSizing: "border-box",
              marginTop: "10px",
              marginBottom: "10px",
              width: "calc(100% + 45px)", // 100% ширины плюс 20px слева и 25px справа
              marginLeft: "-20px", // Идем на 20px влево, чтобы игнорировать padding слева
              marginRight: "-25px", // Идем на 25px вправо, чтобы игнорировать padding справа
            }}
          />

          <div className="flex justify-between">
            <div className="flex items-center gap-x-[16px]">
              <img src="./img/Group 2085653815.svg" alt="" />
              <h2
                className="semi-bold text-[14px] leading-[111%] text-[#0c6bc5]"
                style={{ fontFamily: "var(--)" }}
              >
                О приложении
              </h2>
            </div>
            <img src="./img/Profile-strelka.svg" alt="" />
          </div>

          <div
            style={{
              borderBottom: "1px solid rgb(164, 215, 255)",
              boxSizing: "border-box",
              marginTop: "10px",
              marginBottom: "10px",
              width: "calc(100% + 45px)", // 100% ширины плюс 20px слева и 25px справа
              marginLeft: "-20px", // Идем на 20px влево, чтобы игнорировать padding слева
              marginRight: "-25px", // Идем на 25px вправо, чтобы игнорировать padding справа
            }}
          />
        </div>
      </div>

      <Footer />
    </>
  );
};
