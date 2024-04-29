import { createContext, useState, useEffect } from "react";
import { getEvents } from "../services/events";
import { Notify, Loading } from "notiflix";

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Loading.hourglass();
    getEvents()
      .then(({ response }) => {
        setEvents(response);
        setFilteredEvents(response);
      })
      .catch(() => {
        Notify.failure(
          "Unable to fetch events at this time, please try again later"
        );
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, []);
  return (
    <EventContext.Provider
      value={{ events, filteredEvents, setFilteredEvents, isLoading}}
    >
      {children}
    </EventContext.Provider>
  );
};

export { EventProvider, EventContext };
