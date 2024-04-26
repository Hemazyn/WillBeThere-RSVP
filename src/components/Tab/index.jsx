import PropTypes from 'prop-types';
import Button from '../Button';
import styles from './tab.module.css';

function Tab({ tab, activeTab }) {
  const style = `${styles.tab} ${activeTab === tab.label ? styles.active : ''}`;

  return (
    <Button id={tab.id} value={tab.label} className={style}>
      {tab.label}
    </Button>
  );
}

Tab.propTypes = {
  tab: PropTypes.object.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tab;
