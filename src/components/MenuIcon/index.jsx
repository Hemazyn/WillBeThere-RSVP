import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import EventCardIcon from "../EventCardIcon";
import { useState } from "react";
import CardMenu from "../CardMenu";

function MenuIcon() {
    const [isMenuVisible, setIsMenuVisible] = useState(false)

  return (
        <>
    <EventCardIcon onClick={() => setIsMenuVisible(!isMenuVisible)}>
      <FontAwesomeIcon icon={faEllipsisVertical} />
    </EventCardIcon>
      {isMenuVisible && <CardMenu />}
      </>
  );
}

export default MenuIcon;
