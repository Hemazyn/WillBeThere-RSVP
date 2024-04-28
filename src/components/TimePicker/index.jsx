import useInput from "../../hooks/useInput"
import PropTypes from "prop-types"

function TimePicker({label}){
    const [selectedTime, setSelectedTime] = useInput()

    return (
        <div>
            <label htmlFor="timePicker">{label}</label>
            <input type="time" id="timePicker" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
        </div>
    )
}

export default TimePicker

TimePicker.propTypes = {
    label: PropTypes.string.isRequired,
}
