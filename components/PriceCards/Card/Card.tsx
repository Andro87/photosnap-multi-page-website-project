import styles from "./Card.module.scss";

interface Props {
    readonly plan: {
        header: string;
        paragraph: string;
        price: {
            monthly: string;
            yearly: string;
        };
        proPlan: boolean;
    };
    readonly checked: boolean;
}

export const Card: React.FunctionComponent<Props> = props => {
    const { plan, checked } = props;
    return (
        <div className={`${styles.card} ${plan.proPlan && styles.pro_card}`}>
            <h3>{plan.header}</h3>
            <p>{plan.paragraph}</p>
            <div className={styles.price_wrap}>
                <p>${!checked ? plan.price.monthly : plan.price.yearly}</p>
                <span>{!checked ? "per month" : "per year"}</span>
            </div>

            <button
                type="button"
                title="pick a plan"
                className={`${styles.btn_plan} ${
                    plan.proPlan && styles.pro_btn_plan
                }`}
            >
                pick a plan
            </button>
        </div>
    );
};
