import {
  faAngleDown,
  faCirclePlus,
  faMagnifyingGlass,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../Avatar";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import SubMenu from "../SubMenu";

function Nav() {
  const [isMenuVisible, setIsMenuVisible] = useState();

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
          placeholder="search for people and events"
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
        <FontAwesomeIcon icon={faCirclePlus} />
        <div className={styles.profile}>
          <Avatar className={styles.avatar} />
          <span>
            <FontAwesomeIcon icon={faAngleDown} />
          </span>
        </div>
      </div>
      {isMenuVisible && <SubMenu />}
    </nav>
  );
}

export default Nav;
