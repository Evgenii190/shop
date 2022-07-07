import classNames from "classnames";
import React from "react";
import styles from "./TabItem.module.css";

const TabItem = ({ active, index, setActive, title }) => {
    const setActiveHandler = (e) => {
        setActive(index);
    };

    return (
        <div
            className={classNames({
                [styles.jobs__tab]: true,
                [styles.jobs__tab__active]: index === active,
            })}
            onClick={setActiveHandler}
        >
            {title}
        </div>
    );
};

export default TabItem;
