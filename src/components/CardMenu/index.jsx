import { faPen, faXmark } from "@fortawesome/free-solid-svg-icons"
import styles from "./card-menu.module.css"
import Button from "../Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function CardMenu() {
  return (
    <div className={styles.wrapper}>
         <Button className={styles.btn}>    <span><FontAwesomeIcon icon={faPen} /></span>edit event
                                        </Button>
                                        <Button className={styles.btn}>
                                            <span><FontAwesomeIcon icon={faXmark} /></span>cancel event
                                        </Button>
</div>
  )
}

export default CardMenu
