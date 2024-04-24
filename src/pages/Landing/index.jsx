import Button from "../../components/Button";
import styles from "./landing.module.css";

function Landing() {
  return (
    <div className={styles.landing}>
      <p>
        Events&activities <span>just near you!</span>
      </p>
      <div className={styles.btns}>
        <Button>create events</Button>
        <Button>search for activities</Button>
        <Button>share meetings</Button>
        <Button>join events</Button>
      </div>
      <Button>get started</Button>
    </div>
  );
}

export default Landing;
