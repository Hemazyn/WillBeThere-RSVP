import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { faBookmark as notBookmarked } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./event-card.module.css";
import moment from "moment";

function EventCard({ event }) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <article className={styles.card}>
      <div
        className={styles.bookmark}
        onClick={() => {
            const bookmarks = JSON.parse(
                localStorage.getItem("bookmarks") || "[]"
              );
          if (isBookmarked) {
            bookmarks.push(event);
            localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
          } else {
            const newBookmarks = bookmarks.filter((item) => item.id !== event.id);
            localStorage.setItem("bookmarks", JSON.stringify(newBookmarks))
          }
          setIsBookmarked(!isBookmarked);
        }}
      >
        {isBookmarked ? (
          <FontAwesomeIcon icon={faBookmark} />
        ) : (
          <FontAwesomeIcon icon={notBookmarked} />
        )}
      </div>
      <img src={event.image} alt="" />
      <div className={styles.details}>
        <h2 className="text-white">{event.name}</h2>
        <p className="text-slate">
          {moment(event.date).format("D MMM HH:mm [GMT] Z")} <br />{" "}
          {event.location}
        </p>
      </div>
    </article>
  );
}

export default EventCard;
