import PropTypes from 'prop-types';
import EventCard from '../EventCard';
import styles from './tab-panel.module.css';

function TabPanel({ label, activeTab, events }) {
  const cname = label === activeTab ? `${styles.panel}` : `${styles.hidden}`;

  return (
    <section className={cname} value={label}>
      {events.length === 0 && <h1>No event to display at the moment</h1>}
      {events.length > 0 &&
        events.map((event) => (
          <EventCard
            key={event.id}
            event={event}
            browse={activeTab === 'saved'}
          />
        ))}
    </section>
  );
}

TabPanel.propTypes = {
  label: PropTypes.string.isRequired,
  activeTab: PropTypes.string.isRequired,
  events: PropTypes.array.isRequired,
};

export default TabPanel;
