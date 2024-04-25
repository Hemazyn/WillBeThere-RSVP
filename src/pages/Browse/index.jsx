import { EventCard } from '../../components';
// import Header from "../components/Header";
import styles from "./browse.module.css";
import { getEvents } from "../../services/events";
import { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const Browse = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getEvents()
      .then((res) => {
        const { response } = res;
        setEvents(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {/* <Header /> */}
      <div className={styles.wrapper}>
        {isLoading ? (
          <RotatingLines
          visible={true}
          height="110"
          width="110"
          strokeColor="white"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          />
        ) : (
          <>
            {events.length === 0 ? (
              <h1 className="text-white text-4xl">
                No event to display at the moment
              </h1>
            ) : (
              events.map((event) => <EventCard key={event.id} event={event} />)
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Browse;
