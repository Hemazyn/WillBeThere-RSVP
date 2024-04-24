import { EventCard, EventCardIcon, EventCardDetails, EventCardImage } from "../../components";
// import Header from "../components/Header";
import styles from "./browse.module.css"

const Browse = () => {
    const events = Array.from({length: 12}, (_, i) => `Event ${i + 1}`)

  return (
    <>
      {/* <Header /> */}
      <div className={styles.wrapper}>
        {events.map((event) => (
          <EventCard key={event}>
                    <EventCardIcon onClick={() => setIsBookmarked(!isBookmarked)}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </EventCardIcon>
          <EventCardImage src={imageUrl} />
          <EventCardDetails name={event} date={"Event Date"} />
</EventCard>
        ))}
      </div>
    </>
  );
};

export default Browse;
