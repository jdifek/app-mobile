import React from 'react';
import {Footer} from "../../../Footer";

const Referalka = () => {
    return (
        <div>
            <div className="pb-48 pt-16 flex mx-auto flex-col items-center  w-full min-h-screen px-[30px] py-[60px]">
                <div
                    className=" bg-white rounded-2xl py-5 px-8 text-center flex flex-col gap-8 text-stroke-text text-base font-semibold">
                    <p>Вы можете получить <b>50 монет</b> за каждого друга, который запустил приложение по вашей
                        ссылке, <b>и 300 монет</b> за оформление им подписки.</p>
                    <p>Помимо личных приглашений через мессенджеры, вы можете размещать баннеры в соцсетях, чтобы
                        охватить больше аудитории. Публикуйте макеты в сторис Instagram/Telegram/WhatsApp/Вконтакте
                        и прикрепляйте свою реферальную ссылку.
                    </p>
                    <p>Таким образом, чем больше друзей вы пригласите, тем больше баллов сможете обменять на
                        эксклюзивные награды!</p>
                </div>
                <div className={'flex flex-col gap-7 pt-7 w-full'}>
                    <button
                        className={' bg-gradient-to-r from-[#3BA4FF] to-[#007BFF] rounded-full py-4 shadow-md text-xl font-semibold text-white'}>Скачать
                        баннеры
                    </button>
                    <button
                        className={' bg-gradient-to-r from-[#3BA4FF] to-[#007BFF] rounded-full py-4 shadow-md text-xl font-semibold text-white'}>Скопировать
                        ссылку
                    </button>
                </div>
            </div>
            <Footer/>
        </div>

    );
};

export default Referalka;