import classNames from "classnames";
import React from "react";
import styles from "./TabItem.module.css";

const TabItem = ({ label, content, index, active, setActive }) => {
    const setActiveTabHandler = (e) => {
        setActive(index);
        if (index === active) {
            setActive(null);
        }
    };

    return (
        <>
            <div
                className={classNames({
                    [styles.header__tab]: true,
                    [styles.header__tab__active]: index === active,
                })}
                onClick={setActiveTabHandler}
            >
                {label}
                <div
                    className={classNames({
                        [styles.header__tab_menu]: true,
                        [styles.header__tab_menu__active]: index === active,
                    })}
                >
                    <div className={styles.header__menu_inner}>
                        {content.map(({ category, items }, index) => {
                            return (
                                <div
                                    key={items[0] + index}
                                    className={styles.header__menu_col}
                                >
                                    <h5 className={styles.header__menu_title}>
                                        {category}
                                    </h5>
                                    {items.map((item) => {
                                        return (
                                            <p
                                                key={item + index}
                                                className={
                                                    styles.header__menu_text
                                                }
                                            >
                                                {item}
                                            </p>
                                        );
                                    })}
                                </div>
                            );
                        })}
                    </div>
                    <p className={styles.header__menu_custom}>
                        Авторские камины
                    </p>
                </div>
            </div>
        </>
    );
};

export default TabItem;
