import styles from './Panel.module.scss';
import {IHeaderColumn} from "../../../types";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useState} from "react";
import arrow from "../icons/arrow.svg";
// import Line from "../Line/Line.tsx";


interface Props {
    panel: IHeaderColumn
}

const Panel = ({ panel }: Props) => {
    const [ activeElement, setActiveElement ] = useState<IHeaderColumn>(panel);
    const [ activeDescription, setActiveDescription ] = useState<IHeaderColumn>(panel);
    useEffect(() => {
        setActiveDescription(panel);
        if (panel && panel.link && panel.link.length > 1) {
            setActiveElement(panel.link[0]);
        }
    }, [panel]);
    return <motion.div className={styles.wrapper}
                       initial={{ opacity: 0, y: 27, width: '95%' }}
                       animate={{ opacity: 1, y: 33, width: '100%' }}
                       exit={{ opacity: 0, y: 27, width: '95%' }}
    >
        <AnimatePresence>
            {
                panel && panel?.link && <motion.div
                    key={panel.head.title}

                    className={styles.container}
                >
                    <div className={styles.columnFirst}>
                        <AnimatePresence>
                            {panel.link.map((item, index) => {
                                return <motion.a key={index}
                                                 initial={{opacity: 0}}
                                                 animate={{opacity: 1}}
                                                 exit={{opacity: 0}}
                                                 href={item.head.src}
                                                 onMouseEnter={() => {
                                                     setActiveElement(item);
                                                     setActiveDescription(item)
                                                 }}>
                                    {item.head.title}{item.link &&
                                    <img style={{transform: 'rotate(-90deg)'}} src={arrow}/>}
                                </motion.a>
                            })}
                        </AnimatePresence>
                    </div>

                    {/*<Line background={'white'}/>*/}

                    <AnimatePresence>
                        {
                            activeElement  && <motion.div
                                // key={activeElement.head.title}
                                className={styles.columnSecond}
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 10}}
                            >
                                {
                                    activeElement && activeElement.link && <AnimatePresence>
                                        {
                                            activeElement.link.map((item, index) =>
                                                <a href={item.head.src}
                                                   key={index}
                                                   onMouseEnter={() => {
                                                       // setActiveElement(item);
                                                       setActiveDescription(item)
                                                   }}>
                                                    {item.head.title}</a>
                                            )
                                        }
                                    </AnimatePresence>

                                }
                            </motion.div>
                        }
                    </AnimatePresence>

                    {/*<Line background={'white'}/>*/}

                    <AnimatePresence>
                        {activeDescription && activeDescription.head && <>
                            <motion.div
                                key={activeDescription.head.title}
                                initial={{opacity: 0, y: 10}}
                                animate={{opacity: 1, y: 0}}
                                exit={{opacity: 0, y: 10}}
                                className={styles.columnLast}
                            >
                                {
                                    activeDescription && <AnimatePresence>
                                        <div>
                                            <h1>{activeDescription.head.title}</h1>
                                            <p>{activeDescription.head.description}</p>
                                        </div>
                                        <AnimatePresence>
                                            {
                                                activeDescription.head.src &&
                                                <img src={activeDescription.head.src} alt={activeDescription.head.title}/>
                                            }
                                        </AnimatePresence>
                                    </AnimatePresence>
                                }
                            </motion.div>
                        </>}
                    </AnimatePresence>
                </motion.div>
            }

        </AnimatePresence>
    </motion.div>
};

export default Panel;