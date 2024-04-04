import React from 'react';
import styles from "styles/Loader.module.scss";
import {ISlide} from "../../types";

interface LoaderProps {
    progress: number; // Прогресс загрузки от 0 до 100
    active: boolean;
    keyy: number;
    slider: ISlide;
}

const Loader: React.FC<LoaderProps> = ({ progress, active, keyy, slider }) => {
    const styless: React.CSSProperties = {
        width: `${progress}%`,
        height: '3px',
        borderRadius: '1px',
        backgroundColor: 'white',
        transition: 'width 0.3s ease-in-out', // Добавляем анимацию при изменении ширины
    };


    return (
        <div className={styles.root} style={active ? {width: "150px"} : {width: "50px", backgroundColor: keyy < slider.id ? "white" : "rgba(255, 255, 255, 0.52)"}}>
            {active && <div style={styless}></div>}
        </div>
    );
};

export default Loader;