import React, { useState, useCallback } from 'react';
import styles from "./Filials.module.scss";
// Предполагаем, что FilialCard уже оптимизирован или обернут в React.memo, если это не так, следует добавить оптимизацию
import FilialCard from "./FilialCard";
import {IEntity, IFilials} from "../../types";

import dop1 from './static/filials/ermolova_dop.png'
import dop2 from './static/filials/meirhold_dop.png'
import dop3 from './static/filials/mironova_dop.png'

const types: IEntity[] = [
    { id: 0, title: "Бахрушинский квартал", link: "" },
    { id: 1, title: "Филиалы", link: "" },
];

const data: IFilials[] = [
    { id: 0, title: "Квартал 1", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 1", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 1, title: "Квартал 2", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 2", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 2, title: "Квартал 3", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 3", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 3, title: "Квартал 4", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 4", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 4, title: "Квартал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 5", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
    { id: 5, title: "Дом-музей Ермоловой", imageUrl: "https://gctm.ru/img/ermolova.jpg", imageAddUrl: dop1, position: "Адрес Филиала 6", link: "/", type: "filial", backgroundColor: 'rgb(187, 133, 171)'},
    { id: 6, title: "Музей-квартира мейерхольда", imageUrl: "https://gctm.ru/img/meirhold.jpg", imageAddUrl: dop2, position: "Адрес Филиала 7", link: "/", type: "filial", backgroundColor: 'rgb(225, 8, 0)'},
    { id: 7, title: "Музей-квартира мироновы-менкареа", imageUrl: "https://gctm.ru/img/mironova.jpg", imageAddUrl: dop3, position: "Адрес Филиала 8", link: "/", type: "filial", backgroundColor: 'rgb(224, 192, 159)'},
    { id: 8, title: "Филиал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес Филиала 9", link: "/", type: "filial", backgroundColor: 'rgb(255,255,255)'},
    { id: 9, title: "Филиал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 10", link: "/", type: "filial", backgroundColor: 'rgb(255,255,255)'},
    { id: 10, title: "Квартал 5", imageUrl: "https://placehold.jp/600x600.png", imageAddUrl: dop1, position: "Адрес квартала 11", link: "/", type: "quarter", backgroundColor: 'rgb(255,255,255)'},
];

const Filials = () => {

    const [selectType, setSelectType] = useState<number>(1);

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

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <div className={styles.title}>
                    {types.map(type => (
                        <h1 key={type.id} style={type.id === selectType ? { color: "white" } : {}} onClick={() => setSelectType(type.id)}>
                            {type.title}
                        </h1>
                    ))}
                </div>
                <button>{selectType === 1 ? "Все филиалы" : "Все здания"}</button>
            </div>
            <div className={styles.content} ref={scrollContainerRef}>
                {data.filter(filial => filial.type === (selectType === 1 ? 'filial' : 'quarter')).map(filial => (
                    <FilialCard key={filial.id} filial={filial}/>
                ))}
            </div>
        </div>
    );
};

export default React.memo(Filials); // Используйте React.memo для предотвращения ненужных ререндеров, если пропсы не изменились
