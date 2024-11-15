import React from 'react';
import {Link} from "react-router-dom";


const Game = () => {
    const items = [
        {img:'/img/Coin.svg', title: 'День 1'},
        {img:'/img/Coin.svg', title: 'День 2'},
        {img:'/img/Coin.svg', title: 'День 3'},
        {img:'/img/Coin.svg', title: 'День 4'},
        {img:'/img/Coin.svg', title: 'День 5'},
        {img:'/img/Coin.svg', title: 'День 6'},
        {img:'/img/Coin.svg', title: 'День 7'},
    ]
    return (
        <div className={'relative w-full h-screen  mx-auto items-center'}>
            <div className={' rounded-t-[40px] mt-60  absolute bottom-0 w-full text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4eb1fb]  to-[#1882f2]'}>
                <div className={'flex flex-col justify-center items-center text-white'}>
                    <p className={'pt-10 pb-6 text-2xl max-[360px]:text-sm'}>Поздравляем!</p>
                    <img className={'pb-6 '} width={150} height={150}  src="/img/MonetaBig.svg" alt=""/>
                    <p className={'pb-14 text-base max-[360px]:text-sm'} ><span className={'max-[360px]:text-sm text-2xl'}>+50 монет</span> <br/> за ежедневный вход в приложение</p>
                </div>
                <div className='flex pb-16 justify-center gap-2  text-white font-medium  max-[360px]:gap-1'>
                    {items.map((item, index) => (
                        <div className={'grid gap-1'} key={index}>
                            <img src={item.img} alt={item.title}/>
                            <p className={'text-[10px]'}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <button className={'items-center max-[360px]:text-sm max-[360px]:py-2 max-[360px]:px-4 shadow-2xl gap-2 font-semibold text-xl rounded-full mb-20 px-20 py-4 mx-auto flex bg-white'}><Link to={'/profile'}> Получить 50 </Link><img width={26} src="/img/Coin.svg" alt=""/></button>
            </div>

        </div>
    );
};

export default Game;