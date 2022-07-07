import React, { useState } from "react";
import TabItem from "./TabItem/TabItem";
import styles from "./ProjectsTabs.module.css";

const ProjectsTabs = () => {
    const [active, setActive] = useState(0);

    const tabsTitles = [
        "Камины",
        "Барбекю",
        "Банные печи",
        "Русская печь",
        "Каминопечь",
    ];

    return (
        <div className={styles.jobs__tabs}>
            {tabsTitles.map((title, index) => {
                return (
                    <TabItem
                        key={title + index}
                        title={title}
                        index={index}
                        active={active}
                        setActive={setActive}
                    />
                );
            })}
        </div>
    );
};

export default ProjectsTabs;
