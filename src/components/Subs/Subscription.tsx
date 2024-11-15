import React from "react"
import Ellipse from "../../assets/images/Ellipse";
import Month from "./Month";
import Year from "./Year";
import {Footer} from "../Footer";

export const Subscription = () => {


    const [activeButton, setActiveButton] = React.useState<number>(1)

    return (
        <div className="bg-[#9BD3FF]  font-nunito pb-48">
            <div className="bg-[#9BD3FF]">
                <img src="/img/Frame.svg" alt=""
                     className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6"/>
            </div>
            <div className="pt-64 ">
                <div
                    className={'mx-auto md:shadow-xl shadow-lg relative bg-[#FFFFFF] w-[370px] rounded-2xl '}>
                    <div className={'flex gap-666 text-sm justify-center pt-4 pb-6 leading-9'}>
                        <button
                            className={`rounded-full border border-2 px-4 border-stroke-text ${activeButton === 1 ? 'text-white bg-stroke-text' : 'bg-white'} `}
                            onClick={() => {
                                setActiveButton(1)
                            }}
                        >
                            Пописка на месяц
                        </button>
                        <button
                            onClick={() => {
                                setActiveButton(2)
                            }}
                            className={`rounded-full border border-2 px-4 border-stroke-text ${activeButton === 2 ? ' text-white bg-stroke-text' : 'bg-white'} `}>
                            Подписка на год
                        </button>
                    </div>
                    <div
                        className={' py-1.5 md:shadow-xl shadow-lg rounded-full bg-[#83BDF9] text-white mx-3.5 text-2xl leading-47 text-center'}>Ежемесячная
                        подписка
                    </div>
                    <div
                        className={`transition-opacity duration-400 ${activeButton === 1 ? 'opacity-100' : 'opacity-0'}`}>
                        {activeButton === 1 && (<Month/>)}
                    </div>
                    <div
                        className={`transition-opacity duration-400 ${activeButton === 2 ? 'opacity-100' : 'opacity-0'}`}>
                        {activeButton === 2 && <Year/>}
                    </div>
                    <button
                        className={'-bottom-9 leading-9 font-semibold bg-gradient-to-r from-stroke-blue to-stroke-text absolute inset-x-0 mx-20 rounded-full py-4 text-white text-2xl'}>
                        Оформить
                    </button>
                </div>
                <p className={'text-sm w-[370px] mx-auto pt-20 text-center text-[#0C6BC5]'}>*Приобретая подписку, вы
                    помогаете детям с иммунодефицитом, подопечным фонда “Подсолнух”</p>
            </div>

            <Footer/>
        </div>
    )
}

