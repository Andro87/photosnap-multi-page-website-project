import styles from "./Header.module.scss";

import { useState } from "react";

import Link from "next/link";

import Logo from "svgr/logo.svg";
import Menu from "svgr/menu.svg";
import Close from "svgr/close.svg";

export const Header = () => {
    const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

    function handleIsMenuMobileOpen() {
        setIsMenuMobileOpen(prevValue => !prevValue);
    }

    return (
        <header className={styles.header}>
            <div className={styles.header_container}>
                <Link href="/" aria-label="home logo">
                    <Logo />
                </Link>

                <nav
                    className={`${styles.navigation} ${
                        isMenuMobileOpen && styles.navigation_mobile
                    }`}
                >
                    <ul className={styles.nav_list}>
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/stories">
                                stories
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/features">
                                features
                            </Link>
                        </li>
                        <li className={styles.nav_item}>
                            <Link className={styles.nav_link} href="/pricing">
                                pricing
                            </Link>
                        </li>
                    </ul>
                    <hr />
                    <Link href="#" className={styles.btn_invite}>
                        get an invite
                    </Link>
                </nav>
                <button
                    type="button"
                    title="menu"
                    className={styles.btn_menu}
                    onClick={handleIsMenuMobileOpen}
                >
                    {!isMenuMobileOpen ? <Menu /> : <Close />}
                </button>
            </div>
        </header>
    );
};
