import styles from "./BetaSection.module.scss";
import { GetInvite } from "components";

export const BetaSection = () => {
    return (
        <section aria-label="we are in beta" className={styles.section_beta}>
            <div className={styles.beta_container}>
                <h2>We’re in beta. Get your invite today!</h2>
                <GetInvite title="get an invite" theme="dark" />
            </div>
        </section>
    );
};
