import moment from 'moment';
import { useContext } from 'react';
import { EventContext } from '../../contexts/EventContext';
import Button from '../Button';
import styles from './sub-menu.module.css';

function SubMenu() {
  const { events, filteredEvents, setFilteredEvents } =
    useContext(EventContext);

  const handleFilter = (e) => {
    switch (e.target.name) {
      case 'any':
        setFilteredEvents(events);
        break;
      case 'today':
        setFilteredEvents(
          events.filter(
            (event) => moment(event.date).dayOfYear() === moment().dayOfYear()
          )
        );
        break;
      case 'tomorrow':
        setFilteredEvents(
          events.filter(
            (event) =>
              moment(event.date).dayOfYear() === moment().dayOfYear() + 1
          )
        );
        break;
      case 'this':
        setFilteredEvents(
          events.filter(
            (event) => moment(event.date).week() === moment().week()
          )
        );
        break;
      case 'next':
        setFilteredEvents(
          events.filter(
            (event) =>
              moment(event.date).dayOfYear() === moment().dayOfYear() + 1
          )
        );
        break;
      default:
        setFilteredEvents(events);
    }
  };
  return (
    <div className={styles.wrapper}>
      <Button as={'Link'} to="/app/" name="any" onClick={handleFilter}>
        any day
      </Button>
      <Button as={'Link'} to="/app/" name="today" onClick={handleFilter}>
        today
      </Button>
      <Button as={'Link'} to="/app/" name="tomorrow" onClick={handleFilter}>
        tomorrow
      </Button>
      <Button as={'Link'} to="/app/" name="this" onClick={handleFilter}>
        this week
      </Button>
      <Button as={'Link'} to="/app/" name="next" onClick={handleFilter}>
        next week
      </Button>
      <div className={styles.sort}>
        <p>sort by date</p>
        <input
          type="checkbox"
          name="date"
          id="date"
          onChange={(e) => {
            if (e.target.checked) {
              setFilteredEvents(filteredEvents.sort((a, b) => a.date - b.date));
            }
          }}
        />
      </div>
    </div>
  );
}

export default SubMenu;
