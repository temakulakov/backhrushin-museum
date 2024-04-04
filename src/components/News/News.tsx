import styles from  './News.module.scss';
import NewsElement from "./News.Element";
import NewsElementCompact from "./News.Element.Compact";
import {INews} from "../../types";
import dayjs from "dayjs";
import {Link} from "react-router-dom";

const news: INews[] = [
    { id: 0, title: "Здесь большая белая новость на целых 2 строки", imageUrl: "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-030.jpg", date: dayjs(), description: "Адрес Новость 1", link: "/", type: "full"},
    { id: 1, title: "Новость 2", imageUrl: "https://cdn.fstoppers.com/styles/full/s3/media/2019/12/04/nando-jpeg-quality-030.jpg", date: dayjs(), description: "Адрес Новость 2", link: "/", type: "compact"},
    { id: 2, title: "Новость 3", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 3", link: "/", type: "full"},
    { id: 3, title: "Новость 4", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 4", link: "/", type: "full"},
    { id: 4, title: "Новость 5", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 5", link: "/", type: "full"},
    { id: 5, title: "Новость 6", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 6", link: "/", type: "compact"},
    { id: 6, title: "Новость 7", imageUrl: "https://placehold.jp/515x375.png", date: dayjs(), description: "Адрес Новость 7", link: "/", type: "full"},
];

const News = () => {



    const newsJSX = news.map(newsItem => newsItem.id < 3 && (newsItem.type === 'compact' ? <NewsElementCompact
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.link}
            view={newsItem.type}
        /> : <NewsElement
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.link}
            view={newsItem.type}
        />
    ));


    const newsJSX1 = news.map(newsItem => newsItem.id < 6 && newsItem.id >= 3 && (newsItem.type === 'compact' ? <NewsElementCompact
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.link}
            view={newsItem.type}
        /> : <NewsElement
            key={newsItem.id}
            title={newsItem.title}
            description={newsItem.description}
            date={newsItem.date}
            image={newsItem.imageUrl}
            href={newsItem.link}
            view={newsItem.type}
        />
    ));

    return <div className={styles.wrapper}>
        <div className={styles.header}>
            <h1>{"Новости"}</h1>
            <Link to={'/ticket'}>{"Все новости"}</Link>
        </div>
        <div className={styles.content}>
            {newsJSX}
        </div>
        <div className={styles.content}>
            {newsJSX1}
        </div>
    </div>
};

export default News;