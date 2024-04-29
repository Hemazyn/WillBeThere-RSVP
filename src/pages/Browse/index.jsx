import { useContext } from "react";
import { EventCard } from "../../components";
import styles from "./browse.module.css";
import { EventContext } from "../../contexts/eventContext";

const Browse = () => {
  const { filteredEvents, isLoading } = useContext(EventContext);

  return (
    <div className={styles.wrapper}>
      {!isLoading && filteredEvents.length === 0 ? (
        <h1 className="text-white text-4xl">
          No event to display at the moment
        </h1>
      ) : (
        filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      )}
    </div>
  );
};

export default Browse;
