import styles from "./card-menu.module.css"

function CardMenu({children}) {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

export default CardMenu
