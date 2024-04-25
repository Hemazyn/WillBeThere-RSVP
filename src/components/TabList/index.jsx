import PropTypes from 'prop-types';
import styles from './tab-list.module.css';

function TabList({ children, handleClick }) {
  return (
    <ul className={styles.tabs} onClick={(e) => handleClick(e.target.value)}>
      {children}
    </ul>
  );
}

TabList.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default TabList;
