import {
  faArrowUpFromBracket,
  faMagnifyingGlass,
  faPlus,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';
import styles from './landing.module.css';

function LandingPage() {
  return (
    <div className={styles.landing}>
      <nav>
        <div className={styles.logo}>
          <Link to="/">will be there</Link>
        </div>
      </nav>
      <p>
        Events&activities <span>just near you!</span>
      </p>
      <div className={styles.btns}>
        <Button>
          create events
          <FontAwesomeIcon icon={faPlus} />
        </Button>
        <Button>
          search for activities
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </Button>
        <Button>
          share meetings <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </Button>
        <Button>join events</Button>
      </div>
      <Button>get started</Button>
    </div>
  );
}

export default LandingPage;
