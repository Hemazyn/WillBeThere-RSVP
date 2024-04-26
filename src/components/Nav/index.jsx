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
import Button from "../Button";

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
        <Button className={styles.mobile}>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
                <Button>
        <FontAwesomeIcon
          icon={faSliders}
          onClick={() => setIsMenuVisible(!isMenuVisible)}
        />
        </Button>
                <Button>
        <FontAwesomeIcon icon={faCirclePlus} onClick={() => navigate("/app/event/create")} />
        </Button>
        <Button className={styles.profile} onClick={() => navigate("/app/profile")}>
          <Avatar className={styles.avatar} />
        </Button>
      </div>
      {isMenuVisible && <SubMenu />}
    </nav>
  );
}

export default Nav;
