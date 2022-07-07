import React from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import styles from "./HeaderTop.module.css";
import HeaderTabs from "../HeaderTabs/HeaderTabs";

const HeaderTop = ({ marginMobile }) => {
    const tabsJSON = [
        {
            label: "Камины",
            content: [
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
        {
            label: "Печи",
            content: [
                {
                    category: "Дровяные камины2",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
        {
            label: "Бербекю",
            content: [
                {
                    category: "Дровяные камины3",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
        {
            label: "Тандыры",
            content: [
                {
                    category: "Дровяные камины4",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
        {
            label: "Котлы",
            content: [
                {
                    category: "Дровяные камины5",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
        {
            label: "Дымоходы",
            content: [
                {
                    category: "Дровяные камины6",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
        {
            label: "Разное",
            content: [
                {
                    category: "Дровяные камины7",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
                {
                    category: "Дровяные камины",
                    items: [
                        "Чугунные",
                        "Металлические",
                        "Ручной работы",
                        "Пристенные (фронтальные)",
                        "Кирпичные",
                    ],
                },
            ],
        },
    ];

    return (
        <div className="header__inner">
            {
                <div className={styles.header__top}>
                    <Link href="/">
                        <a>
                            <img
                                className={styles.header__top_logo}
                                src="/images/logo.png"
                                alt="Логотип"
                            />
                        </a>
                    </Link>
                    <nav className={styles.header__top_nav}>
                        <ul className={styles.header__nav_list}>
                            <li className={styles.header__nav_item}>
                                <Link href="/services">
                                    <a>Услуги</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/portfolio">
                                    <a>Авторские работы</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/about">
                                    <a>О компании</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/blog">
                                    <a>Блог</a>
                                </Link>
                            </li>
                            <li className={styles.header__nav_item}>
                                <Link href="/contacts">
                                    <a>Контакты</a>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={styles.header__top_tel}>
                        <a href="tel:+88006353535">8 800 635 35 35</a>
                        <p>Заказать звонок</p>
                    </div>
                    <div
                        className={classNames({
                            [styles.header__top_mobile]: true,
                            [styles.header__top_mobile__margin]: marginMobile,
                        })}
                    >
                        <div
                            className={classNames(
                                styles.header__top_cirlce,
                                styles.header__top_tel__mobile
                            )}
                        >
                            <img src="./images/call.png" alt="Телефон" />
                        </div>
                        <div
                            className={classNames(
                                styles.header__top_cirlce,
                                styles.header__top_menu__mobile
                            )}
                        >
                            <img src="./images/menu-mobile.png" alt="Меню" />
                        </div>
                        <Link href="/basket">
                            <a>
                                <div className={styles.header__top_cirlce}>
                                    <img
                                        src="./images/basket.png"
                                        alt="Корзина"
                                    />
                                    <p className={styles.header__basket_count}>
                                        11
                                    </p>
                                </div>
                            </a>
                        </Link>
                    </div>
                </div>
            }
            <div className={styles.header__bottom}>
                <HeaderTabs tabsJSON={tabsJSON} />
            </div>
        </div>
    );
};

export default HeaderTop;
