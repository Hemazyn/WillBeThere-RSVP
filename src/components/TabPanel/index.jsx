import PropTypes from 'prop-types';
import EventCard from '../EventCard';
import styles from './tab-panel.module.css';

function TabPanel({ label, activeTab, events }) {
  const cname = label === activeTab ? `${styles.panel}` : `${styles.hidden}`;

  return (
    <section className={cname} value={label}>
      {events.map((event) => (
        <EventCard key={event} event={event} />
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
