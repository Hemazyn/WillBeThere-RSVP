import {
  faAngleDown,
  faCirclePlus,
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../Avatar";
import styles from "./nav.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import SubMenu from "../SubMenu";

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navigate = useNavigate()

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to="/">will be there</Link>
      </div>
      <div className={styles.input}>
        <input
          type="search"
          name="search event"
          id="sd"
          placeholder="search for events"
        />
        <span>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
      </div>
      <div className={styles.icons}>
        <span className={styles.mobile}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </span>
        <FontAwesomeIcon
          icon={faSliders}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
        <FontAwesomeIcon icon={faCirclePlus} onClick={() => navigate("/app/event/create")} />
        <div className={styles.profile} onClick={() => navigate("/app/profile")}>
          <Avatar className={styles.avatar} />
        </div>
      </div>
      {isMenuVisible && <SubMenu />}
    </nav>
  );
}

export default Nav;
