import PropTypes from "prop-types";
import EventCard from "../EventCard";
import MenuIcon from "../MenuIcon";
import styles from "./tab-panel.module.css";
import BookmarkIcon from "../BookmarkIcon";

function TabPanel({ label, activeTab, events }) {

  const cname = label === activeTab ? `${styles.panel}` : `${styles.hidden}`;

  const CardIcon =
    activeTab === "my events" ? (
      <MenuIcon />
    ) : (
      <BookmarkIcon />
    );

  return (
    <section className={cname} value={label}>
      {events.map((event) => (
        <EventCard
          key={event}
          event={event}
          Icon={CardIcon}
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
