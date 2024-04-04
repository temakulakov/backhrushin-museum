import React from "react";
import Shop from "../../components/Shop/Shop";
import Widget from "../../components/Widget/Widget";
import News from "../../components/News/News";
import CardList from "../../components/Cards/CardList";
import Filials from "../../components/Filials/Filials";
import styles from "./HomePage.module.scss"

export const HomePage = () => {
    return <div className={styles.container}>
        <CardList/>
        <Widget/>
        <News/>
        <Widget/>
        <Shop/>
        <Filials/>
    </div>
};

export default HomePage;