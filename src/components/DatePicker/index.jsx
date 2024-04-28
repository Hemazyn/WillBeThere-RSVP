import useInput from "../../hooks/useInput"
import PropTypes from "prop-types"

// Get the current date in YYYY-MM-DD format
  const currentDate = new Date().toISOString().split('T')[0];

function DatePicker({label}){
    const [selectedDate, setSelectedDate] = useInput()

    return (
        <div>
            <label htmlFor="datePicker">{label}</label>
            <input type="time" id="datePicker" min={currentDate} value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        </div>
    )
}

export default DatePicker

DatePicker.propTypes = {
    label: PropTypes.string.isRequired,
}
