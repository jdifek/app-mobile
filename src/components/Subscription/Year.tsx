import React from 'react';
import Ellipse from "../../assets/images/Ellipse";

const Year = () => {
    return (
        <>
            <ul className={'flex flex-col items-center gap-y-2.5 py-5'}>
                <li className={'text-xl text-center text-[#0C6BC5]'}>Библиотека из 15 аудиокниг</li>
                <Ellipse/>
                <li className={'text-xl text-center text-[#0C6BC5]'}>5 новых аудиокниг каждый месяц</li>
                <Ellipse/>
                <li className={'text-xl text-center text-[#0C6BC5]'}>Доступ к закрытому сообществу ”Слушай
                    сказку”
                </li>
                <Ellipse/>
                <li className={'text-xl text-center text-[#0C6BC5] '}>Возможность влиять на контент
                    следующего
                    месяца
                </li>
                <Ellipse/>
                <li className={'text-xl text-center text-[#0C6BC5]'}>+5000 монет в Лавке лисенка Лу</li>
            </ul>
            <div>
                <p className={'text-2xl text-center text-[#0C6BC5] font-bold '}>3.990₽/год</p>
                <div className={'flex justify-center gap-7 pb-12'}>
                    <p className={'text-white items-center grid text-sm'}>
                        <span className={'text-center bg-[#FF4D4D] rounded-full  px-1'}>
                            -25%
                        </span>
                    </p>
                    <p className={'line-through text-[#A5A5A5] text-xl font-extrabold'}>5.388₽</p>
                </div>
            </div>

        </>

    );
};

export default Year;