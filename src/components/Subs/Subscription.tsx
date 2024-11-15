import React from 'react';
import Ellipse from "../../assets/images/Ellipse";
import Month from "./Month";
import Year from "./Year";
import {Footer} from "../Footer";

export const Subscription = () => {
    const [activeButton, setActiveButton] = React.useState<number>(1);

    return (
        <div className="bg-[#9BD3FF] font-nunito pb-48  w-full px-[30px] py-[60px] max-[304px]:text-sm">
            <img
                src="/img/Group%202085653804.svg"
                alt=""
                className="absolute left-1/2 transform -translate-x-1/2 -translate-y-0 pt-7 max-[320px]:pt-16"
            />
            <div className="pt-64">
                <div
                    className={
                        "mx-auto md:shadow-xl shadow-lg relative bg-[#FFFFFF] rounded-2xl px-[20px] "
                    }
                >
                    <div
                        className={
                            "flex gap-666 text-sm justify-center pt-4 pb-6 leading-9 "
                        }
                    >
                        <button
                            className={`rounded-full border border-2 px-1 border-stroke-text 
                            max-[406px]:px-1 
                            max-[358px]:text-xs
                            max-[358px]:py-2
                            max-[325px]:px-0.5
                             ${
                                activeButton === 1 ? "text-white bg-stroke-text" : "bg-white"
                            } `}
                            onClick={() => {
                                setActiveButton(1);
                            }}
                        >
                            Пописка на месяц
                        </button>
                        <button
                            onClick={() => {
                                setActiveButton(2);
                            }}
                            className={`rounded-full border border-2 px-1 border-stroke-text 
                            max-[406px]:px-1 
                            max-[358px]:text-xs
                            max-[358px]:py-2
                            max-[325px]:px-0.5
                             ${
                                activeButton === 2 ? " text-white bg-stroke-text" : "bg-white"
                            } `}
                        >
                            Подписка на год
                        </button>
                    </div>
                    <div
                        className={
                            "max-[365px]:text-lg mx-auto py-1.5 md:shadow-xl shadow-lg rounded-full bg-[#83BDF9] text-white mx-3.5 text-2xl leading-47 text-center"}
                    >
                        {" "}
                        {activeButton === 1
                            ? "Ежемесячная подписка"
                            : activeButton === 2
                                ? "Ежегодная подписка"
                                : ""}
                    </div>
                    <div
                        className={`transition-opacity duration-400  ${
                            activeButton === 1 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {activeButton === 1 && <Month/>}
                    </div>
                    <div
                        className={`transition-opacity duration-400 ${
                            activeButton === 2 ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {activeButton === 2 && <Year/>}
                    </div>
                    <button
                        className={
                            "max-[320px]:text-sm -bottom-9 leading-9 font-semibold bg-gradient-to-r from-stroke-blue to-stroke-text absolute inset-x-0 mx-14 rounded-full py-4 text-white text-xl"
                        }
                    >
                        Оформить
                    </button>
                </div>
                <p
                    className={
                        "text-sm  mx-auto pt-20 text-center text-[#0C6BC5]"
                    }
                >
                    *Приобретая подписку, вы помогаете детям с иммунодефицитом, подопечным
                    фонда “Подсолнух”
                </p>
            </div>

            <Footer/>
        </div>
    );
};
