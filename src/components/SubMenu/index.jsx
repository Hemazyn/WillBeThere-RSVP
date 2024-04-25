import styles from "./sub-menu.module.css";
import Button from "../Button";

function SubMenu() {
  return (
    <div className={styles.wrapper}>
      <Button>any day</Button>
      <Button>today</Button>
      <Button>tomorrow</Button>
      <Button>this week</Button>
      <Button>next week</Button>
      <div className={styles.sort}>
        <p>sort by date</p>
        <input type="checkbox" name="date" id="date" />
      </div>
    </div>
  );
}

export default SubMenu;
