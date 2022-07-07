import classNames from "classnames";
import React from "react";
import HeaderTop from "../../components/HeaderTop/HeaderTop";
import MainLayout from "../../layouts/MainLayout";
import styles from "../../styles/basket.module.css";

const BasketPage = () => {
    return (
        <MainLayout>
            <section className={styles.basket}>
                <div className="container">
                    <HeaderTop />
                    <div className={styles.catalog__location}>
                        <p className={styles.catalog__location_item}>Главная</p>
                        <p className={styles.catalog__location_item}>Корзина</p>
                    </div>
                    <h4 className={styles.catalog__title}>
                        2 товара в корзине
                    </h4>
                    <div className={styles.basket__inner}>
                        <div className={styles.basket__items}>
                            <div className={styles.catalog__item}>
                                <div className={styles.catalog__item_img}>
                                    <img src="/images/basket-img.png" alt="" />
                                </div>
                                <div className={styles.catalog__item_info}>
                                    <h4 className={styles.catalog__item_title}>
                                        Камин Stovax Georgian Cast Iron
                                    </h4>
                                    <div
                                        className={
                                            styles.catalog__item_characteristics
                                        }
                                    >
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Отапливаемый объем
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                192 см
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Мощность
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                110 см
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Диапазон мощности
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                93 см
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Материал топки
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                1.6 кум. м
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Варочная поверхность
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                192 см
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        styles.catalog__item_order,
                                        styles.catalog__item_order__basket
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            styles.catalog__item_price,
                                            styles.catalog__item_price__basket
                                        )}
                                    >
                                        <p className={styles.catalog__price}>
                                            259 950 руб.
                                        </p>
                                        <p
                                            className={
                                                styles.catalog__item_discount
                                            }
                                        >
                                            -34 000р
                                        </p>
                                    </div>
                                    <p className={styles.catalog__code}>
                                        Код товара: 9319
                                    </p>
                                    <div
                                        className={styles.catalog__item_buttons}
                                    >
                                        <div
                                            className={styles.basket__btn_count}
                                        >
                                            <div
                                                className={
                                                    styles.basket__count_item
                                                }
                                            >
                                                -
                                            </div>
                                            <div
                                                className={
                                                    styles.basket__count_item
                                                }
                                            >
                                                1
                                            </div>
                                            <div
                                                className={
                                                    styles.basket__count_item
                                                }
                                            >
                                                +
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.basket__btn_delete
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.basket__delete_text
                                                }
                                            >
                                                Удалить
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.catalog__item}>
                                <div className={styles.catalog__item_img}>
                                    <img src="/images/basket-img.png" alt="" />
                                </div>
                                <div className={styles.catalog__item_info}>
                                    <h4 className={styles.catalog__item_title}>
                                        Камин Stovax Georgian Cast Iron
                                    </h4>
                                    <div
                                        className={
                                            styles.catalog__item_characteristics
                                        }
                                    >
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Отапливаемый объем
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                192 см
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Мощность
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                110 см
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Диапазон мощности
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                93 см
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Материал топки
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                1.6 кум. м
                                            </p>
                                        </div>
                                        <div
                                            className={
                                                styles.catalog__item_characteristic
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.catalog__characteristic_left
                                                }
                                            >
                                                Варочная поверхность
                                            </p>
                                            <div className="dots"></div>
                                            <p
                                                className={
                                                    styles.catalog__characteristic_right
                                                }
                                            >
                                                192 см
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className={classNames(
                                        styles.catalog__item_order,
                                        styles.catalog__item_order__basket
                                    )}
                                >
                                    <div
                                        className={classNames(
                                            styles.catalog__item_price,
                                            styles.catalog__item_price__basket
                                        )}
                                    >
                                        <p className={styles.catalog__price}>
                                            259 950 руб.
                                        </p>
                                        <p
                                            className={
                                                styles.catalog__item_discount
                                            }
                                        >
                                            -34 000р
                                        </p>
                                    </div>
                                    <p className={styles.catalog__code}>
                                        Код товара: 9319
                                    </p>
                                    <div
                                        className={styles.catalog__item_buttons}
                                    >
                                        <div
                                            className={styles.basket__btn_count}
                                        >
                                            <div
                                                className={
                                                    styles.basket__count_item
                                                }
                                            >
                                                -
                                            </div>
                                            <div
                                                className={
                                                    styles.basket__count_item
                                                }
                                            >
                                                1
                                            </div>
                                            <div
                                                className={
                                                    styles.basket__count_item
                                                }
                                            >
                                                +
                                            </div>
                                        </div>
                                        <div
                                            className={
                                                styles.basket__btn_delete
                                            }
                                        >
                                            <p
                                                className={
                                                    styles.basket__delete_text
                                                }
                                            >
                                                Удалить
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.basket__price}>
                                <div className={styles.basket__price_flex}>
                                    <p
                                        className={
                                            styles.basket__price_text__white
                                        }
                                    >
                                        Сумма скидки
                                    </p>
                                    <div className="dots"></div>
                                    <p
                                        className={
                                            styles.basket__price_text__white
                                        }
                                    >
                                        27 500 руб.
                                    </p>
                                </div>
                                <div className={styles.basket__price_flex}>
                                    <p
                                        className={
                                            styles.basket__price_text__gold
                                        }
                                    >
                                        Итого:
                                    </p>
                                    <div className="dots"></div>
                                    <p
                                        className={classNames(
                                            styles.catalog__item_discount,
                                            styles.basket__discount
                                        )}
                                    >
                                        111799 руб.
                                    </p>
                                    <p
                                        className={
                                            styles.basket__price_text__gold
                                        }
                                    >
                                        86 998 руб.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.basket__form}>
                            <h4 className={styles.basket__form_title}>
                                Введите контактные данные
                            </h4>
                            <input type="text" placeholder="Ваш телефон" />
                            <input type="text" placeholder="Адрес доставки" />
                            <textarea
                                className={styles.basket__form_area}
                                type="text"
                                placeholder="Комментарий к заказу"
                            />
                            <p className={styles.basket__form_subtitle}>
                                Нужен ли монтаж
                            </p>
                            <div className={styles.basket__radio_items}>
                                <label className={styles.basket__radio}>
                                    <input
                                        className=""
                                        type="radio"
                                        name=""
                                        id=""
                                    />
                                    <p className={styles.basket__radio_text}>
                                        Да
                                    </p>
                                </label>
                                <label className={styles.basket__radio}>
                                    <input
                                        className=""
                                        type="radio"
                                        name=""
                                        id=""
                                    />
                                    <p className={styles.basket__radio_text}>
                                        Нет
                                    </p>
                                </label>
                            </div>
                            <p className={styles.basket__form_subtitle}>
                                Выберите способ оплаты
                            </p>
                            <div>
                                <label className={styles.basket__radio}>
                                    <input
                                        className=""
                                        type="radio"
                                        name=""
                                        id=""
                                    />
                                    <p className={styles.basket__radio_text}>
                                        Банковской картой в офисе
                                    </p>
                                </label>
                                <label className={styles.basket__radio}>
                                    <input
                                        className=""
                                        type="radio"
                                        name=""
                                        id=""
                                    />
                                    <p className={styles.basket__radio_text}>
                                        Наличными курьеру
                                    </p>
                                </label>
                                <label className={styles.basket__radio}>
                                    <input
                                        className="a"
                                        type="radio"
                                        name=""
                                        id=""
                                    />
                                    <p className={styles.basket__radio_text}>
                                        Наличными в магазине
                                    </p>
                                </label>
                            </div>
                            <button className={styles.catalog__form_btn}>
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
};

export default BasketPage;
