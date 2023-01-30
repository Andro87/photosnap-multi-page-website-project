import styles from "./Feature.module.scss";

import Check from "svgr/check.svg";

interface Props {
    readonly feature: {
        header: string;
        plan: {
            basic: boolean;
            pro: boolean;
            business: boolean;
        };
    };
}

export const Feature: React.FunctionComponent<Props> = props => {
    const { feature } = props;
    return (
        <div className={styles.feature_container}>
            <h4>{feature.header}</h4>
            <div className={styles.container}>
                <div className={styles.wrap}>
                    <h5>basic</h5>
                    <Check
                        className={
                            !feature.plan.basic && styles.check_icon_none
                        }
                    />
                </div>

                <div className={styles.wrap}>
                    <h5>pro</h5>
                    <Check
                        className={!feature.plan.pro && styles.check_icon_none}
                    />
                </div>

                <div className={styles.wrap}>
                    <h5>business</h5>
                    <Check
                        className={
                            !feature.plan.business && styles.check_icon_none
                        }
                    />
                </div>
            </div>
        </div>
    );
};
