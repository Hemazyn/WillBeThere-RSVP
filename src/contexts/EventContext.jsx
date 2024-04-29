import { createContext, useContext, useState } from 'react';
import { useGetEvents } from '../services/events';

const EventContext = createContext();

const EventProvider = ({ children }) => {
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [filterText, setFilterText] = useState('');
  const { data: events, isPending: isLoading, isError, error } = useGetEvents();

  return (
    <EventContext.Provider
      value={{
        events,
        filterText,
        setFilterText,
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

export { EventContext, EventProvider };
