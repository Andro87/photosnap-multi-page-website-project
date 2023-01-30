import styles from "./Layout.module.scss";

import { GetInvite } from "components";

interface Props {
    readonly small: string;
    readonly medium: string;
    readonly large: string;
    readonly header: string;
    readonly paragraph: string;
    readonly theme: string;
    readonly direction: string;
    readonly getInvite?: boolean;
    readonly title: string;
}

export const Layout: React.FunctionComponent<Props> = props => {
    const {
        small,
        medium,
        large,
        header,
        paragraph,
        theme,
        direction,
        getInvite,
        title
    } = props;
    const desktop = 1180;
    const tablet = 720;
    return (
        <div
            className={`${styles.container} ${
                theme === "dark"
                    ? styles.container_dark
                    : styles.container_ligth
            } ${styles[direction]}`}
        >
            <picture className={styles.container_img}>
                <source srcSet={large} media={`(min-width:${desktop}px)`} />
                <source srcSet={medium} media={`(min-width:${tablet}px)`} />
                <img src={small} alt="" />
            </picture>
            <div
                className={`${styles.container_info} ${
                    theme === "dark" && styles.container_info_dark
                }`}
            >
                <div className={styles.info}>
                    <h1>{header} </h1>
                    <p>{paragraph}</p>
                    {getInvite && <GetInvite title={title} theme={theme} />}
                </div>
            </div>
        </div>
    );
};
