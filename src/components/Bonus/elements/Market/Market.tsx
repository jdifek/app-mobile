import React, {useState} from 'react';
import {Footer} from "../../../Footer";


const Market = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [hovered, setHovered] = useState(false);

    return (
        <div className=" pb-48 px-[30px] py-[60px] ">
            <img src={'/img/Fox.png'} alt="" className={'flex mx-auto'}/>
            <div className={' pt-5 flex justify-center gap-2.5'}>
                <div
                    className="shadow-xl group text-base bg-gradient-to-b from-[#3BA4FF] to-[#007BFF] hover:from-white hover:to-white transition duration-300 rounded-2xl p-3"
                    onMouseEnter={() => setHovered(true)}
                    onMouseLeave={() => setHovered(false)}
                >
                    <img src="/img/stickers.svg" alt=""/>
                    <div className={'text-center text-white group-hover:text-stroke-text font-bold  pt-1.5'}>
                        <p className={'max-[360px]:text-xs'}>Эмодзи</p>
                        <span className='flex justify-center gap-1 items-center'>
                            <p className={'max-[360px]:text-sm'}>344</p>
                            <img src={hovered ? '/img/Group 2085653789-1.svg' : '/img/Group 2085653789.svg'} alt=""/>
                        </span>
                    </div>
                    <button
                        className=' font-bold mt-1.5 px-5 py-1.5 rounded-3xl bg-white  group-hover:bg-gradient-to-r group-hover:from-[#3BA4FF] group-hover:to-[#007BFF] items-center gap-1 mx-auto flex '>
                        <img src="/img/Vector.svg" alt=""/>
                        <p className='max-[360px]:text-xs text-[#0C6BC5] group-hover:text-white'>Купить</p>
                    </button>
                </div>
                <div
                    className="shadow-xl group text-base bg-gradient-to-b from-[#3BA4FF] to-[#007BFF] hover:from-white hover:to-white transition duration-300 rounded-2xl p-3"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <img src="/img/emodzi.svg" alt=""/>
                    <div className={'text-center text-white group-hover:text-stroke-text font-bold  pt-1.5'}>
                        <p className={'max-[360px]:text-xs'}>Эмодзи</p>
                        <span className='flex justify-center gap-1 items-center'>
                            <p className={'max-[360px]:text-sm'}>344</p>
                            <img src={isHovered ? '/img/Group 2085653789-1.svg' : '/img/Group 2085653789.svg'} alt=""/>
                        </span>
                    </div>
                    <button
                        className=' font-bold mt-1.5 px-5 py-1.5 rounded-3xl bg-white  group-hover:bg-gradient-to-r group-hover:from-[#3BA4FF] group-hover:to-[#007BFF] items-center gap-1 mx-auto flex '>
                        <img src="/img/Vector.svg" alt=""/>
                        <p className='max-[360px]:text-xs text-[#0C6BC5] group-hover:text-white'>Купить</p>
                    </button>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Market;