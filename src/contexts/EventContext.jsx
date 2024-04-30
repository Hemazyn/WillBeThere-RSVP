import { createContext, useContext, useState } from 'react';
import { useGetEvents } from '../services/events';

const EventContext = createContext();

const EventContextProvider = ({ children }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);
  const { data: events, isPending: isLoading, isError, error } = useGetEvents();

  return (
    <EventContext.Provider
      value={{
        events,
        isFiltered,
        setIsFiltered,
        filteredEvents,
        setFilteredEvents,
        isLoading,
        isError,
        error,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useEventContext = () => {
  return useContext(EventContext);
};

export { EventContext, EventContextProvider };
