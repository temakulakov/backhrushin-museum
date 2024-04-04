import styles from "./Column.module.scss";
import {IFooterColumns} from "../../../types";

interface ColumnProps {
    column: IFooterColumns;
}

const Column = ({ column }: ColumnProps) => {
    return (
        <div className={styles.container}>
            <div>
                <h1>{column.title}</h1>
                <div className={styles.body}>
                    {column.link.map((link, index) => <a href={`/${link.src}`} key={index}>{link.title}</a>)}
                </div>
            </div>
            <div className={styles.bottom}>
                {column.elements && column.elements?.map((element, index) => <div key={index}>{element}</div>)}
            </div>
        </div>
    )
};

export default Column;