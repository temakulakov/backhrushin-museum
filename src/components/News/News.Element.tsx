import {useState} from 'react';
import styles from './News.Element.module.scss';
import 'dayjs/locale/ru';
import dayjs, {Dayjs} from "dayjs";
import { motion } from "framer-motion";

dayjs.locale('ru');


interface NewsElementProps {
    view: "compact" | "full";
    title: string;
    description: string;
    href: string;
    date: Dayjs;
    image: string;
}

const NewsElement = ({ date, title, image}: NewsElementProps) => {
    const [ hover, setHover ] = useState(false);

    return <motion.div
        className={styles.wrapper}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
            backgroundColor: hover ? "#52565A" : "rgba(255,255,255,0)",
            transform: hover ? "scale(1.01)" : "scale(1)",
        }}
    >
        <div
            className={styles.content}
        >
            <motion.div
                className={styles.imageWrapper}
                animate={{ width: hover ? 'fit-content' : '300px', height: hover ? 'fit-content' : 'fit-content', paddingTop: hover ? '25px' : '0' }}
            >
                <img src={image} alt={title}/>
            </motion.div>
            <div className={styles.text}>
            <motion.p
                animate={{ color: hover ? 'white' : '#52565A'}}>
                {date.format('D MMMM')}

            </motion.p>
            <motion.h1
                animate={{color: hover ? 'white' : '#52565A', marginBottom: hover ? '15px' : '0'}}
            >{title}</motion.h1>
            </div>
        </div>
    </motion.div>
};

export default NewsElement;