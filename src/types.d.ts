import React from "react";

interface ILink {
    title: string;
    src: string;
};

interface IHeaderLink {
    title: string;
    src: string;
    description: string;
}

interface IFooterColumns {
    title: string;
    link: ILink[];
    elements?: React.ReactNode[];
};

interface IHeaderColumn {
    head: IHeaderLink;
    link?: IHeaderColumn[];
};

interface ISlide {
    id: number;
    type: 'image' | 'video';
    src: string;
};

interface IEntity {
    id: number;
    title: string;
    link: string;
}

// События
interface IEvent extends IEntity {
    imageUrl: string;
    duration: IDuration;
    position: string;
}

// Экскурсии

interface IExcursions extends IEntity {
    imageUrl: string;
    duration: IDuration;
    position: string;
    type?: string;
}

// Выставки

interface IExhibition extends IEntity {
    imageUrl: string;
    duration: IDuration;
    position: string;
    type?: string;
}

// Экспозиции

interface IExposition extends IEntity{
    imageUrl: string;
    duration: IDuration;
    position: string;
    type?: string;
}

interface IFilials extends IEntity {
    imageUrl: string;
    imageAddUrl: string;
    backgroundColor: string;
    position: string;
    type: "quarter" | "filial";
}

// Товары

interface IProduct extends IEntity {
    imageUrl: string;
}

interface IWidget extends IEntity {
    imageUrl: string;
    description: string;
    backgroundColor: string;
    buttonText: string;
    type?: string;
}

interface INews extends IEntity {
    imageUrl: string;
    description: string;
    type: "compact" | "full";
    date: Dayjs;
}

interface IShop extends IEntity {
    imageUrl: string;
    price: number;
}

interface IBottom extends IEntity {
    menus: IEntity[];
}



/* Элементы сущностей

 Продолжительность */
interface IDuration {
    from: Dayjs;
    to: Dayjs;
}

interface INavElemenet {
    title: string;
    description?: string;
    link?: string;
    imageUrl?: string;
    subTitle?: INavElemenet[];
};