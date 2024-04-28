import useInput from "../../hooks/useInput"
import PropTypes from "prop-types"
import styles from "./time-picker.module.css"

function TimePicker({label, icon}){
    const [selectedTime, setSelectedTime] = useInput()

    return (
        <div className={styles.wrapper}>
            <label htmlFor="timePicker">{label}</label>
            <input type="time" id="timePicker" value={selectedTime} className={icon && [styles.padleft]} onChange={(e) => setSelectedTime(e.target.value)} />
            {icon && <span>{icon}</span>}
        </div>
    )
}

export default TimePicker

TimePicker.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.element,
}
