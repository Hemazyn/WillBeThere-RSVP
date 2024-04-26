import { faBookmark as notBookmarked } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import EventCardIcon from "../EventCardIcon";
import { useState } from "react";

function BookmarkIcon() {
  const [isBookmarked, setIsBookmarked] = useState(false);

  return (
    <EventCardIcon onClick={() => setIsBookmarked(!isBookmarked)}>
      {isBookmarked ? (
        <FontAwesomeIcon icon={faBookmark} />
      ) : (
        <FontAwesomeIcon icon={notBookmarked} />
      )}
    </EventCardIcon>
  );
}

export default BookmarkIcon;
