import styles from "./tab-list.module.css";

function TabList({ children, handleClick }) {

  return (
    <ul className={styles.tabs} onClick={(e) => handleClick(e.target.value)}>
            {children}
    </ul>
  );
}

export default TabList;
