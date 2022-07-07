import React from "react";
import { useState } from "react";
import Popup from "./Popup/Popup";
import classNames from "classnames";
import styles from "./Projects.module.css";
import ProjectsTabs from "../ProjectsTabs/ProjectsTabs";

const Projects = () => {
    const [isOpenPopup, setIsOpenPopup] = useState(false);
    const [activeTab, setActiveTab] = useState(1);

    const setActiveTabHandler = (e) => {
        const target = e.currentTarget;
        const index = +target.lastChild.dataset.index;
        setActiveTab(index);
        if (index === activeTab) {
            setActiveTab(null);
        }
    };

    return (
        <section className={classNames(styles.jobs, styles.jobs__portfolio)}>
            {isOpenPopup && <Popup setIsOpen={setIsOpenPopup} />}
            <div className="container">
                <h1 className={styles.jobs__title}>Посмотрите наши работы</h1>
                <ProjectsTabs />
                <div className={styles.jobs__items}>
                    <div className={styles.job__item}>
                        <img
                            className={styles.job__item_img}
                            src="/images/jobs-img.png"
                            alt="Картинка проекта"
                        />
                        <div className={styles.job__info}>
                            <h6 className={styles.job__title}>
                                Проект "Венеция"
                            </h6>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Размер</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Размер</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Материал
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Материал
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Облицовка
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Облицовка
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Печка</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Печка</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Дымоход</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Дымоход
                                </p>
                            </div>
                            <div className={styles.job__price}>
                                <p>Стоимость:</p>
                                <div className={styles.job__dots}></div>
                                <p>280 000 руб.</p>
                            </div>
                            <p className={styles.job__descr}>
                                В стоимость камина, входил монтаж, <br />
                                установка, отделка, проводка + работа <br />
                                фывфыаыпывопыапаопфоапыв
                            </p>
                        </div>
                        <div
                            onClick={() => setIsOpenPopup(!isOpenPopup)}
                            className={styles.job__btn}
                        >
                            <p>Подробнее о проекте</p>
                            <img src="/images/job-arrow.png" />
                        </div>
                    </div>
                    <div className={styles.job__item}>
                        <img
                            className={styles.job__item_img}
                            src="/images/jobs-img.png"
                            alt="Картинка проекта"
                        />
                        <div className={styles.job__info}>
                            <h6 className={styles.job__title}>
                                Проект "Венеция"
                            </h6>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Размер</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Размер</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Материал
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Материал
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Облицовка
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Облицовка
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Печка</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Печка</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Дымоход</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Дымоход
                                </p>
                            </div>
                            <div className={styles.job__price}>
                                <p>Стоимость:</p>
                                <div className={styles.job__dots}></div>
                                <p>280 000 руб.</p>
                            </div>
                            <p className={styles.job__descr}>
                                В стоимость камина, входил монтаж, <br />
                                установка, отделка, проводка + работа <br />
                                фывфыаыпывопыапаопфоапыв
                            </p>
                        </div>
                        <div
                            onClick={() => setIsOpenPopup(!isOpenPopup)}
                            className={styles.job__btn}
                        >
                            <p>Подробнее о проекте</p>
                            <img src="/images/job-arrow.png" />
                        </div>
                    </div>
                    <div className={styles.job__item}>
                        <img
                            className={styles.job__item_img}
                            src="/images/jobs-img.png"
                            alt="Картинка проекта"
                        />
                        <div className={styles.job__info}>
                            <h6 className={styles.job__title}>
                                Проект "Венеция"
                            </h6>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Размер</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Размер</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Материал
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Материал
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Облицовка
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Облицовка
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Печка</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Печка</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Дымоход{" "}
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Дымоход{" "}
                                </p>
                            </div>
                            <div className={styles.job__price}>
                                <p>Стоимость:</p>
                                <div className={styles.job__dots}></div>
                                <p>280 000 руб.</p>
                            </div>
                            <p className={styles.job__descr}>
                                В стоимость камина, входил монтаж, <br />
                                установка, отделка, проводка + работа <br />
                                фывфыаыпывопыапаопфоапыв
                            </p>
                        </div>
                        <div
                            onClick={() => setIsOpenPopup(!isOpenPopup)}
                            className={styles.job__btn}
                        >
                            <p>Подробнее о проекте</p>
                            <img src="/images/job-arrow.png" />
                        </div>
                    </div>
                    <div className={styles.job__item}>
                        <img
                            className={styles.job__item_img}
                            src="/images/jobs-img.png"
                            alt="Картинка проекта"
                        />
                        <div className={styles.job__info}>
                            <h6 className={styles.job__title}>
                                Проект "Венеция"
                            </h6>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Размер</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Размер</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Материал
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Материал
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Облицовка
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Облицовка
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Печка</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Печка</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Дымоход{" "}
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Дымоход{" "}
                                </p>
                            </div>
                            <div className={styles.job__price}>
                                <p>Стоимость:</p>
                                <div className={styles.job__dots}></div>
                                <p>280 000 руб.</p>
                            </div>
                            <p className={styles.job__descr}>
                                В стоимость камина, входил монтаж, <br />
                                установка, отделка, проводка + работа <br />
                                фывфыаыпывопыапаопфоапыв
                            </p>
                        </div>
                        <div
                            onClick={() => setIsOpenPopup(!isOpenPopup)}
                            className={styles.job__btn}
                        >
                            <p>Подробнее о проекте</p>
                            <img src="/images/job-arrow.png" />
                        </div>
                    </div>
                    <div className={styles.job__item}>
                        <img
                            className={styles.job__item_img}
                            src="/images/jobs-img.png"
                            alt="Картинка проекта"
                        />
                        <div className={styles.job__info}>
                            <h6 className={styles.job__title}>
                                Проект "Венеция"
                            </h6>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Размер</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Размер</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Материал
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Материал
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Облицовка
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Облицовка
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Печка</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Печка</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Дымоход{" "}
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Дымоход{" "}
                                </p>
                            </div>
                            <div className={styles.job__price}>
                                <p>Стоимость:</p>
                                <div className={styles.job__dots}></div>
                                <p>280 000 руб.</p>
                            </div>
                            <p className={styles.job__descr}>
                                В стоимость камина, входил монтаж, <br />
                                установка, отделка, проводка + работа <br />
                                фывфыаыпывопыапаопфоапыв
                            </p>
                        </div>
                        <div
                            onClick={() => setIsOpenPopup(!isOpenPopup)}
                            className={styles.job__btn}
                        >
                            <p>Подробнее о проекте</p>
                            <img src="/images/job-arrow.png" />
                        </div>
                    </div>
                    <div className={styles.job__item}>
                        <img
                            className={styles.job__item_img}
                            src="/images/jobs-img.png"
                            alt="Картинка проекта"
                        />
                        <div className={styles.job__info}>
                            <h6 className={styles.job__title}>
                                Проект "Венеция"
                            </h6>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Размер</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Размер</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Материал
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Материал
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Облицовка
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Облицовка
                                </p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>Печка</p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>Печка</p>
                            </div>
                            <div className={styles.job__text_flex}>
                                <p className={styles.job__text_left}>
                                    Дымоход{" "}
                                </p>
                                <div className={styles.job__dots}></div>
                                <p className={styles.job__text_right}>
                                    Дымоход{" "}
                                </p>
                            </div>
                            <div className={styles.job__price}>
                                <p>Стоимость:</p>
                                <div className={styles.job__dots}></div>
                                <p>280 000 руб.</p>
                            </div>
                            <p className={styles.job__descr}>
                                В стоимость камина, входил монтаж, <br />
                                установка, отделка, проводка + работа <br />
                                фывфыаыпывопыапаопфоапыв
                            </p>
                        </div>
                        <div
                            onClick={() => setIsOpenPopup(!isOpenPopup)}
                            className={styles.job__btn}
                        >
                            <p>Подробнее о проекте</p>
                            <img src="/images/job-arrow.png" />
                        </div>
                    </div>
                </div>
                <div className={styles.jobs__more}>
                    <p>Показать больше проектов</p>
                    <img src="/images/arrow-more.png" alt="" />
                </div>
            </div>
        </section>
    );
};

export default Projects;
