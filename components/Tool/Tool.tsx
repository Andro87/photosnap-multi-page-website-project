import styles from "./Tool.module.scss";

import React, { ReactNode } from "react";

interface Props {
    readonly icon: ReactNode;
    readonly header: string;
    readonly paragraph: string;
}

export const Tool: React.FunctionComponent<Props> = props => {
    const { icon, header, paragraph } = props;
    return (
        <div className={styles.tool}>
            <div> {icon}</div>
            <h3>{header}</h3>
            <p>{paragraph}</p>
        </div>
    );
};
