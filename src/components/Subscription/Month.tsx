import React from 'react';
import Ellipse from "../../assets/images/Ellipse";

const Month = () => {

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
                <li className={'text-xl text-center text-[#0C6BC5]'}>Возможность влиять на контент
                    следующего
                    месяца
                </li>
                <Ellipse/>
                <li className={'text-xl text-center text-[#0C6BC5]'}>+1000 монет в Лавке лисенка Лу</li>
            </ul>
            <p className={'text-2xl text-center text-[#0C6BC5] font-bold pb-150px'}>449₽/мес</p>
        </>

    );
};

export default Month;