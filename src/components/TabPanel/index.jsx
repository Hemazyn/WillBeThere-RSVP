import EventCard from "../EventCard";
import styles from "./tab-panel.module.css";

function TabPanel({ label, activeTab, events }) {
      const cname = label === activeTab ? `${styles.panel}` : `${styles.hide}`;

  return (
    <section className={cname} value={label}>
      {events.map((event) => (
             <EventCard key={event} event={event} /> ))}
    </section>
  );
}

export default TabPanel;
