import { useState } from 'react';
import styles from './Widget.module.scss';
import {IWidget} from "../../types";
import { motion } from 'framer-motion';
import {getTextColorBasedOnBgColor} from "../../helpers/getTextColorBasedOnBgColor";

const slides: IWidget[] = [
    { id: 0, title: "Виджет 1", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Сегодня в фондах музея представлено более 1,5 млн. экспонатов. Это эскизы декораций, фотографии, костюмы актёров и многое другое", backgroundColor: "rgba(245,233,188,0.99)", buttonText: "Расмотреть далее"},
    { id: 1, title: "Виджет 2", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Историческое здание флигеля стало детским досуговым центром с театральной студией. Здесь дети разных возрастов смогут получить навыки по актерскому мастер- ству, вокалу, танцу, игре на музыкальных инструментах.", backgroundColor: "rgba(138,101,182,0.98)", buttonText: "Расмотреть далее"},
    { id: 2, title: "Виджет 3", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Описание виджета 3", backgroundColor: "rgba(82,194,204,0.98)", buttonText: "Расмотреть далее"},
    { id: 3, title: "Виджет 4", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Описание виджета 4", backgroundColor: "rgba(96,222,107,0.97)", buttonText: "Расмотреть далее"},
    { id: 4, title: "Виджет 5", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Описание виджета 5", backgroundColor: "rgba(234,149,61,0.99)", buttonText: "Расмотреть далее"},
    { id: 5, title: "Виджет 6", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Описание виджета 6", backgroundColor: "rgba(203,224,50,0.97)", buttonText: "Расмотреть далее"},
    { id: 6, title: "Виджет 7", imageUrl: "https://placehold.jp/916x860.png", link: "/", type: "Про", description: "Описание виджета 7", backgroundColor: "rgba(194,172,89,0.96)", buttonText: "Расмотреть далее"},
];

const Widget = () => {
    const [currentIndex, setCurrentIndex] = useState(0); // Состояние для текущего индекса
    const [ button1, setButton1 ] = useState(false);
    const [ button2, setButton2 ] = useState(false);

    const sliderJSX = slides.map((slide) => (
        <div
            className={styles.slide}
            style={{backgroundColor: slide.backgroundColor}}
            key={slide.id}
        >
            <div className={styles.description}>
                <p style={{color: getTextColorBasedOnBgColor(slide.backgroundColor)}}>{slide.description}</p>
                <div>
                    <h1 className={styles.title} style={{color: getTextColorBasedOnBgColor(slide.backgroundColor)}}>{slide.title}</h1>
                    <div className={styles.buttonGroup}>
                        <motion.button
                            animate={{borderColor: getTextColorBasedOnBgColor(slide.backgroundColor), color: getTextColorBasedOnBgColor(slide.backgroundColor)}}
                            whileHover={{color: slide.backgroundColor, backgroundColor: getTextColorBasedOnBgColor(slide.backgroundColor) }}>{slide.buttonText}</motion.button>
                        <motion.button
                            animate={{borderColor: getTextColorBasedOnBgColor(slide.backgroundColor)}}
                            whileHover={{ backgroundColor: getTextColorBasedOnBgColor(slide.backgroundColor)}}
                            onClick={() => setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)} onMouseEnter={() => setButton1(true)} onMouseLeave={() => setButton1(false)}>
                            <svg width="10" height="11" viewBox="0 0 12 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M-3.49691e-07 7L12 0.0717978L12 13.9282L-3.49691e-07 7Z" fill={button1 ? slide.backgroundColor : '#53565A'} style={{ fill: button1 ? slide.backgroundColor : getTextColorBasedOnBgColor(slide.backgroundColor)}}/>
                            </svg>

                        </motion.button>
                        <motion.button
                            animate={{borderColor: getTextColorBasedOnBgColor(slide.backgroundColor)}}
                            whileHover={{ backgroundColor: getTextColorBasedOnBgColor(slide.backgroundColor)}}
                            onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)} onMouseEnter={() => setButton2(true)} onMouseLeave={() => setButton2(false)}>
                            <svg width="10" height="11" viewBox="0 0 13 14" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.0773 7.01951L0.0596635 13.9171L0.0949643 0.0607533L12.0773 7.01951Z"
                                      fill={button2 ? 'white' : '#53565A'} style={{ fill: button2 ? slide.backgroundColor : getTextColorBasedOnBgColor(slide.backgroundColor)}}/>
                            </svg>
                        </motion.button>
                    </div>
                </div>
            </div>
            <div
                style={{backgroundImage: `url(${slide.imageUrl})`}}
                className={styles.image}
            />
        </div>
    ));

    // Использование currentIndex для выбора текущего слайда
    const slide = sliderJSX[currentIndex];

    return <div className={styles.wrapper}>
        {slide}
    </div>;
};

export default Widget;
