import styles from "./Footer.module.scss";

import Link from "next/link";

import { GetInvite } from "components";

import Logo from "svgr/logo.svg";
import Facebook from "svgr/facebook.svg";
import YouTube from "svgr/youtube.svg";
import Twitter from "svgr/twitter.svg";
import Pinterest from "svgr/pinterest.svg";
import Instagram from "svgr/instagram.svg";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.col_wrap_right}>
                    <Logo className={styles.logo} />
                    <div className={styles.socials_container}>
                        <Link href="https://it-it.facebook.com/">
                            <Facebook />
                        </Link>
                        <Link href="https://www.youtube.com/?gl=it&hl=it">
                            <YouTube />
                        </Link>
                        <Link href="https://twitter.com/?lang=it">
                            <Twitter />
                        </Link>
                        <Link href="https://www.pinterest.com/">
                            <Pinterest />
                        </Link>
                        <Link href="https://www.instagram.com/">
                            <Instagram />
                        </Link>
                    </div>
                    <div className={styles.links_container}>
                        <ul className={styles.links_list}>
                            <li className={styles.list_item}>
                                <Link className={styles.list_link} href="/">
                                    home
                                </Link>
                            </li>
                            <li className={styles.list_item}>
                                <Link
                                    className={styles.list_link}
                                    href="/stories"
                                >
                                    stories
                                </Link>
                            </li>
                            <li className={styles.list_item}>
                                <Link
                                    className={styles.list_link}
                                    href="/features"
                                >
                                    features
                                </Link>
                            </li>
                            <li className={styles.list_item}>
                                <Link
                                    className={styles.list_link}
                                    href="/pricing"
                                >
                                    pricing
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={styles.col_wrap_left}>
                    <GetInvite title="get an invite" theme="dark" />
                    <p>Copyright 2019. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};
