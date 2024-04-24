import styles from "./event-card-details.module.css";

function EventCardDetails({ name, date }) {
  return (
    <div className={styles.details}>
      <h2>{name}</h2>
      <p>{date}</p>
    </div>
  );
}

export default EventCardDetails;
