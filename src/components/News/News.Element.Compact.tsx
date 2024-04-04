import {useState} from 'react';
import styles from './News.Element.Compact.module.scss';
import {Dayjs} from "dayjs";
import {motion} from "framer-motion";

interface NewsElementProps {
    view: "compact" | "full";
    title: string;
    description: string;
    href: string;
    date: Dayjs;
    image: string;
}

const NewsElementCompact = ({date, title, image}: NewsElementProps) => {
    const [hover, setHover] = useState(false);

    return <motion.div
        className={styles.wrapper}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        animate={{
            backgroundColor: hover ? "#52565A" : "rgba(255,255,255,0)",
            transform: hover ? "scale(1.01)" : "scale(1)",
            // height: hover ? "calc(100% + 3px)" : "100%",
            width: hover ? "310px" : "250px"
        }}
    >
        <div
            className={styles.content}
        >
            <motion.div
                className={styles.imageWrapper}
                animate={{
                    width: hover ? 'fit-content' : '225px',
                    height: hover ? 'fit-content' : 'fit-content',
                    paddingTop: hover ? '15px' : '0'
                }}
            >
                <img src={image} alt={title}/>
            </motion.div>
            <div className={styles.text}>
                <motion.p
                    animate={{color: hover ? 'white' : '#52565A'}}
                >
                    {date.format('D MMMM')}

                </motion.p>
                <motion.h4
                    animate={{color: hover ? 'white' : '#52565A', marginBottom: hover ? '15px' : '0'}}
                >{title}</motion.h4>
            </div>
        </div>
    </motion.div>
};

export default NewsElementCompact;