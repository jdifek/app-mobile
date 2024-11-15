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
        <div className="h-full flex flex-col mx-auto  gap-5
        px-[30px] py-[60px] w-full min-h-screen pb-[200px]">

            <div className={'bg-white rounded-2xl py-5 px-8 mt-16 flex flex-col gap-2.5 text-xl text-stroke-text '}>
                <div className='flex gap-2.5'>
                    <img src="/img/Coin.svg" alt="" />
                    <p className='flex gap-1 items-center max-[340px]:text-sm'><span>50</span><p>монет</p></p>
                </div>
                <div className='relative pt-2.5 flex gap-4 '>
                    <span><img className='absolute' src="/img/Ellipse%2058.svg" alt="" /><p className='pl-9px'>1</p></span>
                    <span className={'flex items-center max-[340px]:text-sm max-[323px]:text-xs'}>Начинающий слушатель</span>
                </div>
            </div>

            <div className={'rounded-2xl bg-gradient-to-br from-[#1075e5] to-[#60c1fe] p-5 text-sm text-white max-[320px]:text-xs'}>
                <div className={'flex items-center justify-between'}>
                    <p className={'w-[216px]'}>Приглашай друзей и получай монеты за запуск приложения и оформление подписки ими</p>
                    <button className={'h-11 w-11 rounded-full bg-[#91cefe] p-3.5 '}>
                        <img className={'w-4 h-4'} src="/img/Vector%203.svg" alt="" />
                    </button>
                </div>
                <div className='bg-white font-bold text-stroke-text text-center px-1 py-3.5 mt-3 rounded-[20px]'>
                    Пригласить друзей
                </div>
            </div>

            <div className={'flex flex-col gap-2 bg-white rounded-2xl p-5 text-stroke-text max-[324px]:p-3'}>
                <p className={'font-bold'}>Задания</p>
                {items.map((item, index) => (
                    <div className={'flex justify-between gap-2'} key={index}>
                        <div className={'flex gap-2.5  max-[329px]:gap-1'}>
                            <img src={item.img} alt="" />
                            <div className={'max-[329px]:gap-1'}>
                                <div className={'font-semibold ' +
                                    'max-[376px]:text-sm max-[359px]:text-xs'}>{item.title}</div>
                                <div className={'text-[10px] text-[#898989]'}>{item.coins} монет</div>
                            </div>
                        </div>
                        <button
                            onClick={() => handleClick(index)}
                            className={`max-[359px]:text-xs my-1 px-4 rounded-2xl text-stroke-text ${completedItems[index] ? 'bg-white  border border-stroke-text' : 'bg-[#2189F4] text-white'}`}
                        >
                            {completedItems[index] ? 'Готово' : 'Начать'}
                        </button>
                    </div>
                ))}
            </div>

            <button
                className={'font-bold text-stroke-text mx-auto w-full bg-white py-4 rounded-full shadow-lg mb-14'}
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