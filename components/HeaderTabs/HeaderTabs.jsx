import React from "react";
import { useState } from "react";
import styles from "./HeaderTabs.module.css";

import TabItem from "./TabItem/TabItem";

const HeaderTabs = ({ tabsJSON }) => {
    const [activeTab, setActiveTab] = useState(null);


    return (
        <div className={styles.header__tabs}>
            {tabsJSON.map(({ label, content }, index) => (
                <TabItem
                    key={label + index}
                    label={label}
                    content={content}
                    index={index}
                    active={activeTab}
                    setActive={setActiveTab}
                />
            ))}
        </div>
    );
};

export default HeaderTabs;
