import PropTypes from 'prop-types';
import BookmarkIcon from '../BookmarkIcon';
import EventCard from '../EventCard';
import MenuIcon from '../MenuIcon';
import styles from './tab-panel.module.css';

function TabPanel({ label, activeTab, events }) {
  const cname = label === activeTab ? `${styles.panel}` : `${styles.hidden}`;

  const CardIcon = activeTab === 'my events' ? <MenuIcon /> : <BookmarkIcon />;

  return (
    <section className={cname} value={label}>
      {events.length === 0 && <h1>No event to display at the moment</h1>}
      {events.length > 0 &&
        events.map((event) => (
          <EventCard key={event} event={event} Icon={CardIcon} />
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
