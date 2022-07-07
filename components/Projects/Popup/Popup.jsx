import React, { useEffect } from "react";
import styles from "./Popup.module.css";
import classNames from "classnames";

const ProjectPopup = ({ setIsOpen }) => {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        };
    }, []);

    return (
        <div
            onClick={(e) => {
                if (e.target.childNodes[0].className === "popup__inner") {
                    setIsOpen(false);
                }
            }}
            className={styles.popup}
        >
            <div className={styles.popup__inner}>
                <div className={styles.popup__inner_flex}>
                    <div>
                        <h4 className={styles.popup__title}>
                            Проект "Венеция"
                        </h4>
                        <div className={styles.characteristics}>
                            <div className={styles.characteristics__items}>
                                <p
                                    className={classNames(
                                        styles.characteristics__item,
                                        styles.characteristics__item__gray
                                    )}
                                >
                                    Размер
                                </p>
                                <p className={styles.characteristics__item}>
                                    5х24
                                </p>
                            </div>
                            <div className={styles.characteristics__items}>
                                <p
                                    className={classNames(
                                        styles.characteristics__item,
                                        styles.characteristics__item__gray
                                    )}
                                >
                                    Размер
                                </p>
                                <p className={styles.characteristics__item}>
                                    Дерево
                                </p>
                            </div>
                            <div className={styles.characteristics__items}>
                                <p
                                    className={classNames(
                                        styles.characteristics__item,
                                        styles.characteristics__item__gray
                                    )}
                                >
                                    Материал
                                </p>
                                <p className={styles.characteristics__item}>
                                    Дерево
                                </p>
                            </div>
                            <div className={styles.characteristics__items}>
                                <p
                                    className={classNames(
                                        styles.characteristics__item,
                                        styles.characteristics__item__gray
                                    )}
                                >
                                    Облицовка
                                </p>
                                <p className={styles.characteristics__item}>
                                    Мрамор
                                </p>
                            </div>
                            <div className={styles.characteristics__items}>
                                <p
                                    className={classNames(
                                        styles.characteristics__item,
                                        styles.characteristics__item__gray
                                    )}
                                >
                                    Печка
                                </p>
                                <p className={styles.characteristics__item}>
                                    Чугун из нержавейки
                                </p>
                            </div>
                            <div className={styles.characteristics__items}>
                                <p
                                    className={classNames(
                                        styles.characteristics__item,
                                        styles.characteristics__item__gray
                                    )}
                                >
                                    Дымоход
                                </p>
                                <p className={styles.characteristics__item}>
                                    Стальной
                                </p>
                            </div>
                        </div>
                        <div className={styles.description}>
                            <h4 className={styles.popup__title}>Описание</h4>
                            <p className={styles.description__text}>
                                Новичку, впервые задумавшемуся о том, как
                                сложить камин из кирпича своими руками, схема
                                кладки потребуется в первуюочередь. Она
                                называется порядовкой и позволяет даже
                                дилетантам решить эту сложную задачу, не
                                вдаваясь в расчётыи не углубляясь в нормативные
                                документы.
                            </p>
                            <p className={styles.description__text}>
                                Самостоятельно «изобретать» камин, не будучи
                                специалистом в этом деле, не стоит. Но кроме
                                готовой порядовки домашнему мастеру понадобятся
                                и теоретические знания об.
                            </p>
                        </div>
                        <h5 className={styles.popup__title}>
                            Хотите такой же проект ? Оставьте заявку
                        </h5>
                    </div>
                    <div className={styles.popup__images}>
                        <img
                            className={styles.popup__img}
                            src="/images/popup-img.png"
                            alt=""
                        />
                        <img
                            className={styles.popup__img}
                            src="/images/popup-img2.png"
                            alt=""
                        />
                    </div>
                </div>
                <form className={styles.popup__form}>
                    <input type="text" placeholder="Введите ваше имя" />
                    <input type="text" placeholder="Введите ваш телефон" />
                    <button>
                        <p>Заказать звонок</p>
                        <div className={styles.popup__button_arrow}>
                            <img src="/images/button-arrow.png" alt="" />
                        </div>
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectPopup;
