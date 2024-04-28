import useInput from "../../hooks/useInput"
import PropTypes from "prop-types"
import styles from "./date-picker.module.css"

// Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

function DatePicker({label, icon}){
    const [selectedDate, setSelectedDate] = useInput()

    return (
        <div className={styles.wrapper}>
            <label htmlFor="datePicker">{label}</label>
            <input type="time" id="datePicker" min={currentDate} value={selectedDate} className={icon && [styles.padleft]} onChange={(e) => setSelectedDate(e.target.value)} />
            {icon && <span>{icon}</span>}
        </div>
    )
}

export default DatePicker

DatePicker.propTypes = {
    label: PropTypes.string.isRequired,
}
