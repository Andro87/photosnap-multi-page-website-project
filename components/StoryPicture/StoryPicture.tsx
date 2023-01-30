import React from "react";

import Link from "next/link";

import styles from "./StoryPicture.module.scss";

interface Props {
    readonly large: string;
    readonly small: string;
    readonly date?: string;
    readonly header: string;
    readonly author: string;
}

export const StoryPicture: React.FunctionComponent<Props> = props => {
    const { large, small, date, header, author } = props;
    const medium = 720;
    return (
        <Link href="/stories" className={styles.container}>
            <picture className={styles.picture_container}>
                <source srcSet={large} media={`(min-width:${medium}px)`} />
                <img src={small} alt="" />
            </picture>

            <div className={styles.story_info}>
                <p>{date}</p>
                <h3>{header}</h3>
                <p>{author}</p>

                <div className={styles.link_wrap}>
                    read story
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="43"
                            height="14"
                            className="s"
                        >
                            <g fill="none" fill-rule="evenodd" stroke="#ffffff">
                                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                            </g>
                        </svg>
                    </span>
                </div>
            </div>
        </Link>
    );
};
