import moment from 'moment';
import { useContext } from 'react';
import { EventContext } from '../../contexts/EventContext';
import Button from '../Button';
import styles from './sub-menu.module.css';

function SubMenu() {
  const { events, setIsFiltered, filteredEvents, setFilteredEvents } =
    useContext(EventContext);

  const handleFilter = (e) => {
    setIsFiltered(true);

    switch (e.target.name) {
      case '':
        setIsFiltered(false);
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
      <Button name="" onClick={handleFilter}>
        any day
      </Button>
      <Button name="today" onClick={handleFilter}>
        today
      </Button>
      <Button name="tomorrow" onClick={handleFilter}>
        tomorrow
      </Button>
      <Button name="this" onClick={handleFilter}>
        this week
      </Button>
      <Button name="next" onClick={handleFilter}>
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
