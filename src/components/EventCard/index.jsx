import styles from "./event-card.module.css";


function EventCard({ children, ...props }) {

    return (
        <article className={styles.card} {...props}>
            {children}
                    </article>
    );
}

export default EventCard;
