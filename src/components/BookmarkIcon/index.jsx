import { faBookmark as notBookmarked } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

function BookmarkIcon({ isBookmarked }) {
  return (
    <>
      {isBookmarked ? (
        <FontAwesomeIcon icon={faBookmark} />
      ) : (
        <FontAwesomeIcon icon={notBookmarked} />
      )}
    </>
  );
}

export default BookmarkIcon;
