import React, {useEffect, useState} from 'react';
import styles from "./Header.module.scss";
import {IHeaderColumn} from "../../types";
import arrow from "./icons/arrow.svg";
import { motion} from "framer-motion";

import BMLogoLeft from "./icons/BMLogoLeft.svg";
import BMLogoLine from "./icons/BMLogoLine.svg";
import BMLogoRight from "./icons/BMLogoRight.svg";
import BMText from "./icons/BMText.svg";

import eye from './icons/eye.svg';
import search from './icons/search.svg';
import translate from './icons/translate.svg';
import Panel from "./Panel/Panel";
import {Link} from "react-router-dom";


const Header: React.FC = () => {
    const [panel, setPanel] = React.useState<IHeaderColumn | null>(null);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [ up, setUp] = useState<boolean>(false);

    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            // Скрыть/показать заголовок
            if (window.scrollY > lastScrollY) { // Если прокрутка вниз
                setIsVisible(false);
                setUp(false);
            } else { // Если прокрутка вверх
                if (window.scrollY > 200) {
                    setIsVisible(true);
                    setUp(true);
                }
            }
            // Обновить последнюю позицию прокрутки
            setLastScrollY(window.scrollY);
        }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar);

            return () => {
                window.removeEventListener('scroll', controlNavbar);
            };
        }
    }, [lastScrollY]);

    return <>
        <div style={{width: '1470px' }}>
            <motion.div className={styles.container}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{
                            opacity: 1, backgroundColor: panel ? '#8B1635' : 'rgba(138, 22, 53, 0.69)',
                            width: lastScrollY > 499 ? '90%' : '95%',
                            // position: lastScrollY > 100 ? 'fixed' : 'absolute',
                            y: lastScrollY > 100  && !up ? '-110px' : '0' }}
                        exit={{ opacity: 0, y: 20 }}>
                <div className={styles.top}>
                    <Link to={'/'} className={styles.logoWrapper}>
                        <motion.img
                            initial={{opacity: 0, x: 30}}
                            animate={{opacity: 1, x: 0}}
                            src={BMLogoLeft}
                            alt="BMLogoLeft"
                            draggable={false}
                        />
                        <motion.img
                            initial={{opacity: 0}}
                            animate={{opacity: 1}}
                            src={BMLogoLine}
                            alt="BMLogoLine"
                            draggable={false}
                        />
                        <motion.img
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            src={BMLogoRight}
                            alt="BMLogoRight"
                            draggable={false}
                        />
                        <motion.img
                            className={styles.stylesLogo}
                            initial={{opacity: 0, x: -30}}
                            animate={{opacity: 1, x: 0}}
                            src={BMText}
                            alt="BMText"
                            draggable={false}
                        />
                    </Link>
                    <div className={styles.btnGroup}>
                        <button className={styles.btn}>{"Магазин"}</button>
                        <button className={styles.btn}>{"Купить билет"}</button>
                        <img src={eye} alt={eye} className={styles.button}/>
                        <img src={search} alt={search} className={styles.button}/>
                        <img src={translate} alt={translate} className={styles.button}/>
                        <button className={styles.btn}>{"РУС"}
                            <svg xmlns="http://www.w3.org/2000/svg" width={"14px"} height={"19px"} fill="none"
                                 stroke="currentColor"
                                 strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                 viewBox="0 0 24 24">
                                <path d="m6 9 6 6 6-6"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className={styles.bottom} onMouseLeave={() => setPanel(null)}>
                    {menu.map((item, index) => (<a
                        className={styles.item}
                        href={item.head.src}
                        key={index}
                        onMouseEnter={() => setPanel(item)}
                    >
                        {item.head.title}{item.link && <img src={arrow}/>}
                    </a>))}
                    {panel && <Panel panel={panel}/>}
                </div>

            </motion.div>
        </div>
    </>
};

export default Header;

const menu: IHeaderColumn[] = [
    {
        head: {
            title: "Посетителям",
            src: "",
            description: "Краткая и общая информация ( фото музея, адрес и часы работы, билеты, о музее, как добраться ) + разводная с разделами"
        }, link: [
            {
                head: {
                    title: "Здания и часы работы",
                    src: "",
                    description: "Все здания на одной странице, есть разделение на \"Бахрушинский квартал\" и \"Филиалы\""
                }
            },
            {
                head: {
                    title: "Билеты и льготы",
                    src: "",
                    description: "- Правила покупки билетов - Правила и условия посещения"
                }
            },
            {
                head: {
                    title: "Карты лояльности (Не в MVP)",
                    src: "",
                    description: "Описательная страница с вариантами карта лояльности и условиями покупки, контактами отдела продаж"
                }
            },
            {
                head: {
                    title: "Кафе и рестораны",
                    src: "",
                    description: "Описательная страница с информацией о ресторанах/кафе/буфете, внизу шахматка с фото, названием ресторана и его контактами."
                }
            },
            {
                head: {
                    title: "Экскурсии",
                    src: "",
                    description: "- описательная страница с информацией, как заказать экскурсию и контактами отдела продаж -подборка из мероприятий, на которые доступны экскурсии"
                }
            },
            {
                head: {
                    title: "Добро День",
                    src: "",
                    description: "Описательная страница о благотворительном проекте музея, краткое описание проекта, лого партнеров (если есть), контакты, форма обратной связи."
                }
            },
            {
                head: {
                    title: "Доступный музей (Не в MVP)",
                    src: "",
                    description: "Описательная страница с информацией на сколько музей приспособлен к инклюзии"
                }
            },
        ]
    },
    {
        head: {title: "Выставки и события", src: "", description: "Разводная страница с разделами."}, link: [
            {
                head: {
                    title: "Выставки", src: "", description: ""
                }, link: [
                    {
                        head: {
                            title: "Ближайшая выставка #1",
                            src: "",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                    {
                        head: {
                            title: "Ближайшая выставка #2",
                            src: "",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                    {
                        head: {
                            title: "Ближайшая выставка #3",
                            src: "",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                ]
            },
            {
                head: {
                    title: "Постоянные экспозиции", src: "", description: ""
                },
                link: [
                    {
                        head: {
                            title: "Постоянная экспозиция #1",
                            src: "",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                    {
                        head: {
                            title: "Постоянная экспозиция #2",
                            src: "",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                    {
                        head: {
                            title: "Постоянная экспозиция #3",
                            src: "",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                ]
            },
            {
                head: {
                    title: "События",
                    src: "https://www.gctm.ru/wp-content/uploads/2019/01/IMG_6827-e1547123113206.jpg",
                    description: "Страница со всеми Событиями, внутри разделение на разные события, на первом этапе: 1.текущие, 2. будущее, 3. архив",
                },
                link: [
                    {
                        head: {
                            title: "Событие #1",
                            src: "https://www.gctm.ru/wp-content/uploads/2019/02/KP-238272-1546.jpg",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                    {
                        head: {
                            title: "Событие #2",
                            src: "https://www.gctm.ru/wp-content/uploads/2019/02/Zelenyiy-chelovechek-e1549022103784.png",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                    {
                        head: {
                            title: "Событие #3",
                            src: "https://www.gctm.ru/wp-content/uploads/2019/02/museum_history_3-e1550734753217.jpg",
                            description: "Страница с постоянными экспозициями (как у Третьяковки)"
                        }
                    },
                ]
            },
            {
                head: {
                    title: "Экскурсии",
                    src: "",
                    description: "Описательная страница с информацией, как заказать экскурсию и контактами отдела продаж- подборка из мероприятий, на которые доступны экскурсии"
                }
            },
            {
                head: {
                    title: "Онлайн выставки",
                    src: "",
                    description: "Разводная страница с переходом на лендинги с онлайн выставками"
                }
            },
            {
                head: {
                    title: "Новости",
                    src: "",
                    description: "Страница со всеми новостями музея- вкладка \"СМИ о нас\", где даются лого изданий и их статьи о музее"
                }
            },
        ]
    },
    {
        head: {title: "Узнавайте сами", src: "", description: "Разводная страница с разделами."}, link: [
            {
                head: {
                    title: "Лекторий \"Бахрушинская академия\"",
                    src: "",
                    description: "Страница со всеми лекционными программами и возможностью купить абонемент (как у Третьяковки)"
                }
            },
            {
                head: {
                    title: "Издания",
                    src: "",
                    description: "Описательная страница об издательской деятельности, форма обратной связи и контакты издательского отдела, внизу список изданий Музея с фотографиями. - при клике на каждое издание переход на описательную страницу издания с информацией, переходом для покупки в интернет-магазин или возможностью скачать для чтения."
                }
            },
            {head: {title: "Коллекции онлайн", src: "", description: "Сайт сателлит - Колекции онлайн"}},
            {
                head: {
                    title: "Научная библиотека",
                    src: "",
                    description: "Описательная страница о научной библиотеке, форма обратной связи и контакты библиотеки- поставить пометку \"ПРО\""
                }
            },
            {
                head: {
                    title: "Бахрушинские чтения",
                    src: "",
                    description: "- описательная страница  с общей информацией о конференции с фото/видео материалами, контакты организаторов, форма обратной связи с кнопкой \"принять участие\", программа будущей конференции, возможность перейти к архиву конференций, кнопкой перейти к онлайн трансляции (если такая будет)" +
                        "- отдельная страница по каждой конференции из архива с описанием, программой, фото/видео отчетом." +
                        "- поставить пометку \"ПРО\""
                }
            },
            {
                head: {
                    title: "Конференции и форумы",
                    src: "",
                    description: "Разводная страница с общей информацией о разделе и разделением вглубь на \"конференции и форумы\" с возможностью перехода на каждый подраздел" +
                        "- подраздел \"конференции\" страница с перечнем всех конференций и возможностью перехода на страницу каждой отдельной конференции" +
                        "- подраздел \"форумы\" страница с перечнем всех форумов и возможностью перехода на страницу каждой отдельного форума" +
                        "- поставить пометку \"ПРО\""
                }
            },
        ]
    },
    {
        head: {title: "Бахрушинский детям", src: "", description: "Разводная страница с разделами."}, link: [
            {
                head: {
                    title: "Детский центр",
                    src: "",
                    description: "Описательная страница с информацией о детском центре, его возможностях и программах, контакты, карта с указанием где находится."
                }
            },
            {
                head: {
                    title: "Мастер-классы",
                    src: "",
                    description: "Страница со всеми текущими мастер-классами (как в разделе события)"
                }
            },
            {
                head: {
                    title: "Экскурсии",
                    src: "",
                    description: "Страница со всеми текущими экскурсиями (как в разделе события)"
                }
            },
            {
                head: {
                    title: "Игротека",
                    src: "",
                    description: "Разводная страница с разными квизами/тестами для детей на театральную тематику, переход на страницу каждого отдельного квиза."
                }
            },
        ]
    },
    {
        head: {
            title: "Театральная лаболатория",
            src: "",
            description: "Описательная страница, где рассказывается о театральной лаборатории, сотрудничестве с вузами, есть форма обратной связи и контакты театральной лаборатории, карта яндекс с указанием, где находится."
        }
    },
    {
        head: {title: "Бахрушинский онлайн", src: "", description: "Разводная страница с разделами."}, link: [
            {head: {title: "ГОРОД | ТЕАТР", src: "", description: ""}},
            {head: {title: "Виртуальные туры", src: "", description: ""}},
            {head: {title: "Лекции онлайн", src: "", description: ""}},
            {head: {title: "Сериал \"Бахрушин\"", src: "", description: ""}},
            {head: {title: "Telegram", src: "", description: ""}},
            {head: {title: "ВКонтакте", src: "", description: ""}},
            {head: {title: "Одноклассники", src: "", description: ""}},
            {head: {title: "Rutube", src: "", description: ""}},
            {head: {title: "Youtube", src: "", description: ""}},
        ]
    },
    {
        head: {title: "Про театр", src: "", description: "Разводная страница с разделами."}, link: [
            {head: {title: "Театральные музеи и Архивы", src: "", description: "Переход на сайт-сателлит"}},
            {
                head: {
                    title: "Театральный словарь",
                    src: "",
                    description: "Cтраница театрально словаря, как в Википедия. Из алфавита можно выбрать букву, выбрать слово или через поисковую строку сразу найти нужное слово. Для каждого слова своя страничка с текстовым описанием и фотографией"
                }
            },
            {head: {title: "Экспозиции и Выставки в музеях театров", src: "", description: ""}},
            {head: {title: "Семинары, мастер-классы, круглые столы", src: "", description: ""}},
            {head: {title: "Школа музейного дела", src: "", description: ""}},
            {head: {title: "Стажировки", src: "", description: ""}},
        ]
    },
    {
        head: {title: "Поддержать музей", src: "", description: "Разводная страница с разделами."}, link: [
            {head: {title: "Сделать пожертвование", src: "", description: "Переход на сайт-сателлит"}},
            {
                head: {
                    title: "Стать волонтером",
                    src: "",
                    description: "Cтраница театрально словаря, как в Википедия. Из алфавита можно выбрать букву, выбрать слово или через поисковую строку сразу найти нужное слово. Для каждого слова своя страничка с текстовым описанием и фотографией"
                }
            },
            {
                head: {
                    title: "Попечительский совет (Не в MVP)",
                    src: "",
                    description: "Описание деятельности попечительского совета, состав попечительского совета"
                }
            },
            {
                head: {
                    title: "Фонд развития Бахрушинского музея",
                    src: "",
                    description: "- перелинковка на отдельный сайт-сателлит с 3мя разделами: Проекты, О фонде, Контакты."
                }
            },
            {
                head: {
                    title: "Корпоративные программы (Не в MVP)",
                    src: "",
                    description: "Описательная страница с возможными программ для компаний, контактами отдела по работе с партнерами."
                }
            },
            {
                head: {
                    title: "Сотрудничество",
                    src: "",
                    description: "писательная страница \"Купить изображение\"- описательная страница \"Организация мероприятий\" (на площадке музея или сторонних площадках) - описательная страница \"Багетная мастерская\" с формой обратной связи."
                }
            },
        ]
    },

]
