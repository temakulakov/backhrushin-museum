import React, { useState, useCallback, useEffect } from 'react';
import styles from './CardList.module.scss';
import classNames from "classnames";
import Card, { ICardProps } from "./Card";
import { motion } from "framer-motion";
import {IEvent, IExcursions, IExhibition, IExposition} from "../../types";
import dayjs from "dayjs";

import exp1 from './static/expositions/exp1.jpg'
import exp2 from './static/expositions/exp2.jpg'
import exp3 from './static/expositions/exp3.png'
import exp4 from './static/expositions/exp4.jpg'



const events: IEvent[] = [
    { id: 0, title: "Событие 1", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 1", link: "ticket/"},
    { id: 1, title: "Событие 2", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 2", link: "ticket/"},
    { id: 2, title: "Событие 3", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 3", link: "ticket/"},
    { id: 3, title: "Событие 4", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 4", link: "ticket/"},
    { id: 4, title: "Событие 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 5", link: "ticket/"},
    { id: 5, title: "Событие 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 6", link: "ticket/"},
    { id: 6, title: "Событие 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес события 7", link: "ticket/"},
];

const excursions: IExcursions[] = [
    { id: 0, title: "Экскурсия 1", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 1", link: "/ticket"},
    { id: 1, title: "Экскурсия 2", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 2", link: "/ticket"},
    { id: 2, title: "Экскурсия 3", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 3", link: "/ticket"},
    { id: 3, title: "Экскурсия 4", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 4", link: "/ticket"},
    { id: 4, title: "Экскурсия 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 5", link: "/ticket"},
    { id: 5, title: "Экскурсия 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 6", link: "/ticket"},
    { id: 6, title: "Экскурсия 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экскурсии 7", link: "/ticket"},
];

const exhibitions: IExhibition[] = [
    { id: 0, title: "Выставка 1", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 1", link: "/ticket"},
    { id: 1, title: "Выставка 2", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 2", link: "/ticket"},
    { id: 2, title: "Выставка 3", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 3", link: "/ticket"},
    { id: 3, title: "Выставка 4", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 4", link: "/ticket"},
    { id: 4, title: "Выставка 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 5", link: "/ticket"},
    { id: 5, title: "Выставка 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 6", link: "/ticket"},
    { id: 6, title: "Выставка 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес выставки 7", link: "/ticket"},
];

const expositions: IExposition[] = [
    { id: 0, title: "«Семья Бахрушиных и залог счастливой жизни». 12+", imageUrl: exp1, duration: {from: dayjs(), to: dayjs()}, position: "Москва, улица Бахрушина, 31/12с1", link: "/ticket", type: "Про"},
    { id: 1, title: "Экспозиции 2", imageUrl: exp2, duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 2", link: "/ticket", type: "Про"},
    { id: 2, title: "Экспозиции 3", imageUrl: exp3, duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 3", link: "/ticket", type: "Про"},
    { id: 3, title: "Экспозиции 4", imageUrl: exp4, duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 4", link: "/ticket", type: "Про"},
    { id: 4, title: "Экспозиции 5", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 5", link: "/ticket", type: "Про"},
    { id: 5, title: "Экспозиции 6", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 6", link: "/ticket", type: "Про"},
    { id: 6, title: "Экспозиции 7", imageUrl: "https://placehold.jp/515x375.png", duration: {from: dayjs(), to: dayjs()}, position: "Адрес экспозиции 7", link: "/ticket", type: "Про"},
];

interface IType {
    id: number;
    title: string;
    link: string;
}

const types: IType[] = [
    { id: 0, title: "Выставки", link: "ticket/" },
    { id: 1, title: "Экспозиции", link: "ticket/" },
    { id: 2, title: "События", link: "ticket/" },
    { id: 3, title: "Экскурсии", link: "ticket/" },
];

const CardList: React.FC = () => {
    const [list, setList] = useState<IType>(types[1]);
    const [cardsJSX, setCardsJSX] = useState<React.ReactElement<ICardProps>[]>([]);

    // Callback ref для управления слушателями событий
    const scrollContainerRef = useCallback((node: HTMLDivElement) => {
        const handleWheel = (event: WheelEvent) => {
            if (!node) return;
            const isScrollable = node.scrollWidth > node.clientWidth;
            const atLeftEdge = node.scrollLeft === 0;
            const atRightEdge = node.scrollLeft + node.clientWidth === node.scrollWidth;

            if (!isScrollable || (event.deltaY < 0 && atLeftEdge) || (event.deltaY > 0 && atRightEdge)) {
                return;
            }

            event.preventDefault();
            node.scrollLeft += event.deltaY + event.deltaX;
        };

        if (node) {
            node.addEventListener('wheel', handleWheel);
        }

        // Очистка
        return () => {
            if (node) {
                node.removeEventListener('wheel', handleWheel);
            }
        };
    }, []);

    useEffect(() => {
        let items: React.ReactElement<ICardProps>[];
        switch (list.id) {
            case 0:
                items = exhibitions.map((item) => <Card key={item.id} {...item} />);
                break;
            case 1:
                items = expositions.map((item) => <Card key={item.id} {...item} />);
                break;
            case 2:
                items = events.map((item) => <Card key={item.id} {...item} />);
                break;
            case 3:
                items = excursions.map((item) => <Card key={item.id} {...item} />);
                break;
            default:
                items = [];
                break;
        }
        setCardsJSX(items);
    }, [list, exhibitions, expositions, events, excursions]);

    const headerJSX = types.map((type) => (
        <h1
            key={type.id}
            onClick={() => setList(type)}
            className={classNames(styles.titleElement, { [styles.active]: type.id === list.id })}
        >
            {type.title}
        </h1>
    ))

    return (
        <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.wrapper}
        >
            <div className={styles.titleWrapper}>
                <div>{headerJSX}</div>
                <button>{types[list.id].title}</button>
            </div>
            <motion.div
                key={list.id}
                initial={{ opacity: 0, width: "0%" }}
                animate={{ opacity: 1, width: "100%" }}
                transition={{ duration: 0.5 }}
                className={styles.cardsWrapper}
                ref={scrollContainerRef} // Используем callback ref здесь
            >
                {cardsJSX}
            </motion.div>
        </motion.div>
    );
};

export default CardList;