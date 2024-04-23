import Button from "../Button";
import styles from "./tab.module.css";

function Tab({ tab, activeTab }) {
    const style = `${styles.tab} ${
        activeTab === tab.label ? styles.active : ""
    }`;

    return (
        <Button id={tab.id} value={tab.label} className={style}>
            {tab.label} <span>2</span>
        </Button>
    );
}

export default Tab;
