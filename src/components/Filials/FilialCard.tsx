import {useEffect, useRef, useState} from 'react';
import styles from "./FilialCard.module.scss";
import {AnimatePresence, motion, useInView} from "framer-motion";
import {getTextColorBasedOnBgColor} from "../../helpers/getTextColorBasedOnBgColor";
import {IFilials} from "../../types";

interface FilialCardProps {
    filial: IFilials
}



const FilialCard = ({ filial }: FilialCardProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref);


    const [ hover, setHover ] = useState(false);
    const [ buttonHover, setButtonHover ] = useState(false);

    const textColor = getTextColorBasedOnBgColor(filial.backgroundColor);

    useEffect(() => {
        console.log("Element is in view: ", isInView)
    }, [isInView])

    return  <motion.div
            ref={ref}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            initial={{opacity: 1}} // Начальное состояние анимации
            animate={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? "none" : "translateY(-20px)"
            }} // Конечное состояние анимации
            exit={{opacity: 0}}
            transition={{duration: 0.3}} // Продолжительность анимации
            className={styles.wrapper}
        >
            <motion.div
                style={{backgroundImage: `url('${filial.imageUrl}')`}}
                initial={{opacity: 0}}
                animate={{backgroundSize: hover ? 'auto 115%' : 'auto 100%', opacity: 1, }}
                transition={{ duration: 0.2 }}
                className={styles.image}
            >

                <motion.div
                    animate={{backgroundColor: hover ? filial.backgroundColor : 'rgba(0,0,0,0)'}}
                    className={styles.background}
                >
                    <motion.h1
                        animate={{ color: hover ? getTextColorBasedOnBgColor(filial.backgroundColor) : 'white' , y: hover && filial.id === 7 ? -40 : 0}}
                    >{filial.title}</motion.h1>
                    <AnimatePresence>
                        {
                            hover && <motion.button
                            onMouseEnter={() => setButtonHover(true)}
                            onMouseLeave={() => setButtonHover(false)}
                                initial={{opacity: 0, transform: "translateY(0px)"}}
                                animate={{opacity: 1, transform: "translateY(35px)", color: buttonHover ? filial.backgroundColor : textColor, borderColor: textColor, backgroundColor: buttonHover ? textColor : 'transparent'}}
                                exit={{opacity: 0, transform: "translateY(0px)"}}
                            >{`Перейти в ${filial.type === 'quarter' ? 'Здание' : 'Филиал'}`}</motion.button>
                        }
                    </AnimatePresence>
                    <AnimatePresence>
                        {
                            hover && <motion.img
                            src={filial.imageAddUrl}
                            initial={{opacity: 0, transform: "translateY(40px)"}}
                            animate={{opacity: 1, transform: "translateY(0px)"}}
                            exit={{opacity: 0, transform: "translateY(40px)"}}
                            className={styles.addImage}
                            >
                            </motion.img>
                        }
                    </AnimatePresence>
                </motion.div>

            </motion.div>
    </motion.div>
};

export default FilialCard;