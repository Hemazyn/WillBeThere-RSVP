import styles from "./event-card-icon.module.css"

function EventCardIcon({Icon, children, ...props}) {
  return (
    <div className={styles.icon} {...props}>{children}</div>
  )
}

export default EventCardIcon
