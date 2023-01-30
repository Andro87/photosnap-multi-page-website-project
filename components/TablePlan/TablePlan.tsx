import styles from "./TablePlan.module.scss";

import { features } from "data/features_table";

import { Feature } from "./Feature/Feature";

export const TablePlan = () => {
    const allFeatures = features.map((feature, index) => (
        <Feature key={index} feature={feature} />
    ));

    return (
        <div className={styles.table_plan_container}>
            <h2>compare</h2>
            <div className={styles.table_plan}>
                <div className={styles.header}>
                    <h4>the features</h4>
                    <div className={styles.option_wrap}>
                        <h4>basic</h4>
                        <h4>pro</h4>
                        <h4>business</h4>
                    </div>
                </div>

                {allFeatures}
            </div>
        </div>
    );
};
