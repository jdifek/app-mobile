import React from 'react';


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
        <div className={'relative w-[430px] h-screen  mx-auto items-center'}>
            <div className={'rounded-t-[40px] mt-60  absolute bottom-0 w-full text-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#4eb1fb]  to-[#1882f2]'}>
                <div className={'flex flex-col justify-center items-center text-white'}>
                    <p className={'pt-10 pb-6 text-2xl'}>Поздравляем!</p>
                    <img className={'pb-6 '} width={150} height={150}  src="/img/MonetaBig.svg" alt=""/>
                    <p className={'pb-14 text-base'}><span className={'text-2xl'}>+50 монет</span> <br/> за ежедневный вход в приложение</p>
                </div>
                <div className='flex pb-16 justify-center gap-2  text-white font-medium'>
                    {items.map((item, index) => (
                        <div className={'grid gap-1'} key={index}>
                            <img src={item.img} alt={item.title}/>
                            <p className={'text-[10px]'}>{item.title}</p>
                        </div>
                    ))}
                </div>
                <button className={'shadow-2xl gap-2 font-semibold text-xl rounded-full mb-20 px-20 py-4 mx-auto flex bg-white'}><span>Получить 50 </span><img width={26} src="/img/Coin.svg" alt=""/></button>
            </div>

        </div>
    );
};

export default Game;