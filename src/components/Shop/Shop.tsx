import styles from './Shop.module.scss';
import ShopElement from "./Shop.Element";
import { motion } from "framer-motion";
import {IShop} from "../../types";

import image1 from './static/images/1.png'
import image2 from './static/images/2.png'
import image3 from './static/images/3.png'
import image4 from './static/images/4.png'
import image5 from './static/images/5.png'
import image6 from './static/images/6.png'
import image7 from './static/images/7.png'
import image8 from './static/images/8.png'
import image9 from './static/images/9.png'
import image10 from './static/images/10.png'
import image11 from './static/images/11.png'
import image12 from './static/images/12.png'
import image13 from './static/images/13.png'

const Shop = () => {
    const items: IShop[] = [
        { id: 0, title: "Товар 1", imageUrl: image1, link: "/", price: 100},
        { id: 1, title: "Товар 2", imageUrl: image2, link: "/", price: 100},
        { id: 2, title: "Товар 3", imageUrl: image3, link: "/", price: 100},
        { id: 3, title: "Товар 4", imageUrl: image4, link: "/", price: 100},
        { id: 4, title: "Товар 5", imageUrl: image5, link: "/", price: 100},
        { id: 5, title: "Товар 6", imageUrl: image6, link: "/", price: 100},
        { id: 6, title: "Товар 7", imageUrl: image7, link: "/", price: 100},
        { id: 7, title: "Товар 7", imageUrl: image8, link: "/", price: 100},
        { id: 8, title: "Товар 8", imageUrl: image9, link: "/", price: 100},
        { id: 9, title: "Товар 9", imageUrl: image10, link: "/", price: 100},
        { id: 10, title: "Товар 10", imageUrl: image11, link: "/", price: 100},
        { id: 11, title: "Товар 11", imageUrl: image12, link: "/", price: 100},
        { id: 12, title: "Товар 12", imageUrl: image13, link: "/", price: 100},
    ];
    const itemsJSX = items.map(item => <ShopElement item={item}/>)
    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>{"Магазин"}</h1>
            <button>{"Перейти в магазин"}</button>
        </div>
        <motion.div className={styles.content} style={{ y: 50, x: '-10%' }}>
            {itemsJSX}
        </motion.div>

        <motion.div className={styles.content} style={{ y: 400,x: '-10%' }}>
            {itemsJSX}
        </motion.div>
    </div>
};

export default Shop;