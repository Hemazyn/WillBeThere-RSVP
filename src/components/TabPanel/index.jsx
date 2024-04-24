import styles from "./tab-panel.module.css";

function TabPanel({ label, activeTab, children }) {
  const cname = label === activeTab ? `${styles.panel}` : `${styles.hidden}`;

  return (
    <section className={cname} value={label}>
      {children}    </section>
  );
}

export default TabPanel;
