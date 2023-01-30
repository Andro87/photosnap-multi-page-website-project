import styles from "./GetInvite.module.scss";

import Link from "next/link";

import Arrow from "svgr/arrow.svg";

interface Props {
    readonly title: string;
    readonly theme: string;
}

export const GetInvite: React.FunctionComponent<Props> = props => {
    const { title, theme } = props;
    return (
        <div className={styles.container}>
            <Link
                href="#"
                className={`${styles.btn_getInvite} ${styles[theme]}`}
            >
                {title}
            </Link>
            {theme === "dark" ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                    <g fill="none" fill-rule="evenodd" stroke="#ffffff">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                </svg>
            ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                    <g fill="none" fill-rule="evenodd" stroke="#000">
                        <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                </svg>
            )}
        </div>
    );
};
