import { useState } from "react";
import HiButton from "./HiButton";
import HiFooter from "./HiFooter";
import { Link } from "react-router-dom";
export const Hi = () => {
  const [state, setState] = useState<number>(0);

  const handleGetBonus = () => {
    console.log("bonus");
    setState(1);
  };

  return (
    <>
      {state === 0 ? (
        <div
          className="w-full h-[90vh] text-white overflow-hidden"
          style={{
            background: 'url("/img/hi-bg.png") no-repeat center top / cover',
          }}
        >
          <header className="text-center pt-[100px]">
            <h2 className="font-[Rosarium] font-thin text-3xl">
              Добро пожаловать в приложение
            </h2>
            <h1 className="font-[Rosarium] font-thin text-7xl max-[350px]:text-6xl">
              Слушай сказку
            </h1>
            <h2 className="font-[Rosarium] font-thin mt-3 text-3xl">
              с Олей Сычевой и лисенком Лу
            </h2>
          </header>

          <HiFooter>
            <HiButton className="-translate-y-1/2" onClick={handleGetBonus}>
              Получить бонус
            </HiButton>
          </HiFooter>
        </div>
      ) : (
        <div
          className="w-full h-[90vh] text-white overflow-hidden"
          style={{
            backgroundImage: 'url("/img/hi-bonus-bg.png")',
            backgroundRepeat: "repeat-x",
            backgroundSize: "cover"
          }}
        >
          <header className="text-center pt-[100px]">
            <h1 className="font-[Rosarium] font-thin text-4xl max-[350px]:text-6xl">
              Вам начислено 500 монет!
            </h1>
            <h2 className="font-[Rosarium] font-thin mt-3 text-3xl">
              Используйте их в разделе "Бонусы"
            </h2>
          </header>

          <HiFooter>
            <HiButton className="-translate-y-1/2">
              <Link to="/" className="w-full h-full">
                Продолжить
              </Link>
            </HiButton>
          </HiFooter>
        </div>
      )}
    </>
  );
};
