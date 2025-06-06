import React from 'react';
import "./TimingSection.css";
import TimingPoint from "./TimingPoint";

const TimingSection = () => {
    return (
        <div className='timing-section'>
            <span className='container-header'>Timing</span>
            <div className='timing-container'>
                <TimingPoint time={'10:00'}
                             text={'Хотим начать наше мероприятие с традиционного выкупа! Проходить он будет в доме невесты (ж/д станция Калейкино, ул.Гагарина, д.1)'}
                             header={'Выкуп'}/>
                <TimingPoint time={'11:00'}
                             text={'Так как наша церемония проходит в Набережных Челнах, мы предлагаем гостям трансфер прямо до места бракосочетания! Либо Вы можете добраться на собственном транспорте\n' +
                                 'Адрес: Набережные Челны,  просп. Чулман, 73'}
                             header={'Выезд в Загс'}/>
                <TimingPoint time={'13:00'}
                             text={'Приглашаем всех желающих поучаствовать в официальной части нашего дня!'}
                             header={'Регистрация'}/>
                <TimingPoint time={'16:00'}
                             text={'Для наших гостей мы организовали фуршет, где Вас будут ждать разные интерактивы и легкие закуски! \n' +
                                 'Набережные Челны, поселок Орловка, Орловская ул., 209'}
                             header={'Welcome'}/>
                <TimingPoint time={'17:00'}
                             text={'Официальное начало нашей свадьбы с насыщенной программой и вкусными блюдами!'}
                             header={'Банкет'}/>
                <TimingPoint time={'20:00'}
                             text={'Предлагаем вместе с нами насладиться этим трогательным моментом!'}
                             header={'Первый танец'}/>
                <TimingPoint time={'21:00'}
                             text={'Каждый сможет насладиться главным десертом этого дня!'}
                             header={'Вынос торта'}/>
                <TimingPoint time={'23:00'}
                             text={'Приглашаем всех гостей ярко закончить наш праздник!'}
                             header={'Дискотека'}/>
            </div>
        </div>
    );
};

export default TimingSection;