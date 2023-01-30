import { useState } from "react";
import styles from "./PriceCards.module.scss";

import { prices } from "data/pricing_cards.js";

import { Card } from "./Card/Card";

export const PriceCards = () => {
    const [isChecked, setIsChecked] = useState(false);

    const allCards = prices.map((card, index) => (
        <Card key={index} plan={card} checked={isChecked} />
    ));

    function handleToggle() {
        setIsChecked(prevValue => !prevValue);
    }
    return (
        <div className={styles.price_cards_containter}>
            <div className={styles.toggle_container}>
                <button
                    type="button"
                    title="monthly"
                    className={`${styles.btn_check}  ${styles.checked}  ${
                        isChecked && styles.not_checked
                    }`}
                    onClick={() => setIsChecked(false)}
                >
                    Monthly
                </button>
                <div
                    className={`${styles.toggle} ${
                        isChecked && styles.toggle_yearly
                    } 	`}
                    onClick={handleToggle}
                >
                    <div
                        className={`${styles.toggle_circle} ${
                            isChecked && styles.toggle_circle_yearly
                        } 	`}
                    ></div>
                </div>
                <button
                    type="button"
                    title="yearly"
                    className={`${styles.btn_check}  ${
                        !isChecked ? styles.not_checked : styles.checked
                    }`}
                    onClick={() => setIsChecked(true)}
                >
                    Yearly
                </button>
            </div>

            <div className={styles.cards_wrap}>{allCards}</div>
        </div>
    );
};
