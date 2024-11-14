import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import {Footer} from "../../../Footer";

const MarketBonuses: React.FC = () => {
    const items = [
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '500' },
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '100' },
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '1000' },
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '200' },
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '200' },
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '200' },
        { img: '/img/Podarok.svg', title: 'Стартовый бонус', coins: '500' },
    ];

    // State to track whether each item is completed
    const [completedItems, setCompletedItems] = useState<boolean[]>(new Array(items.length).fill(false));

    const navigate = useNavigate();

    const handleClick = (index: number) => {
        // Update the completed state for the specific item
        const updatedCompletedItems = [...completedItems];
        updatedCompletedItems[index] = true;
        setCompletedItems(updatedCompletedItems);
    };

    const handleNavigate = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        navigate('/bonus');
    };

    return (
        <div className="h-full flex flex-col mx-auto max-w-[430px] px-8 gap-5 pb-48">

            <div className={'bg-white rounded-2xl py-5 px-8 mt-16 flex flex-col gap-2.5 text-xl text-stroke-text'}>
                <div className='flex gap-2.5'>
                    <img src="/img/Coin.svg" alt="" />
                    <p className='flex gap-1 items-center'><span>50</span><p>монет</p></p>
                </div>
                <div className='relative pt-2.5 flex gap-4'>
                    <span><img className='absolute' src="/img/Ellipse%2058.svg" alt="" /><p className='pl-9px'>1</p></span>
                    <span>Начинающий слушатель</span>
                </div>
            </div>

            <div className={'rounded-2xl bg-gradient-to-br from-[#1075e5] to-[#60c1fe] py-5 px-8 text-sm text-white'}>
                <div className={'flex items-center gap-12'}>
                    <p className={'w-[216px]'}>Приглашай друзей и получай монеты за запуск приложения и оформление подписки ими</p>
                    <button className={'h-11 rounded-full bg-[#91cefe] p-3.5'}>
                        <img className={'w-4 h-4'} src="/img/Vector%203.svg" alt="" />
                    </button>
                </div>
                <div className='bg-white font-bold text-stroke-text text-center px-1 py-3.5 mt-3 rounded-[20px]'>
                    Пригласить друзей
                </div>
            </div>

            <div className={'flex flex-col gap-2 bg-white rounded-2xl p-5 text-stroke-text'}>
                <p className={'font-bold'}>Задания</p>
                {items.map((item, index) => (
                    <div className={'flex justify-between gap-2'} key={index}>
                        <div className={'flex gap-2.5'}>
                            <img src={item.img} alt="" />
                            <div>
                                <div className={'font-semibold'}>{item.title}</div>
                                <div className={'text-[10px] text-[#898989]'}>{item.coins} монет</div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleClick(index)}
                            className={`my-1 px-4 rounded-2xl ${completedItems[index] ? 'bg-white text-stroke-text border border-stroke-text' : 'bg-[#2189F4] text-white'}`}
                        >
                            {completedItems[index] ? 'Готово' : 'Начать'}
                        </button>
                    </div>
                ))}
            </div>

            <button
                className={'font-bold text-stroke-text mx-auto w-[282px] bg-white py-4 rounded-full shadow-lg mb-14'}
                onClick={handleNavigate}
            >
                <img src="" alt="" />
                <p>Лавка лисенка Лу</p>
            </button>
            <Footer/>
        </div>
    );
};

export default MarketBonuses;