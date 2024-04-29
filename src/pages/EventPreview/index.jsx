import { useNavigate } from "react-router-dom";
import { Button, Chip } from "../../components";
import styles from "./event-preview.module.css";

function EventPreview() {
  const navigate = useNavigate();

  return (
    <section className={styles.wrapper}>
      <div className={styles.img}></div>
      <div className={styles.details}>
        <div>
          <h2>event title</h2>
          <p>date and time</p>
        </div>
        <div>
          <h2>about event</h2>
          <p>location</p>
        </div>
        <div>
          <h2>items to bring</h2>
          <div className={styles.items}>
            {["laptop", "drinks"].map((item) => (
              <Chip label={item} key={item} onDelete={() => {}} />
            ))}
          </div>
        </div>

        <Button
          className={styles.button}
          onClick={() => navigate("app/event/create")}
        >
          continue
        </Button>
      </div>
    </section>
  );
}

export default EventPreview;
