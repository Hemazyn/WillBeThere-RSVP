import Button from "../Button"
import styles from "./event-card-icon.module.css"

function EventCardIcon({children, ...props}) {
  return (
    <Button className={styles.icon} {...props}>{children}</Button>
  )
}

export default EventCardIcon
