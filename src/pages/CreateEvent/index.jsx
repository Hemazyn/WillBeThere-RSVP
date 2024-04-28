import styles from "./create-event.module.css"
import { useNavigate } from "react-router-dom"
import { TextField, TextArea, DatePicker, TimePicker, Button } from "../../components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faCalendarDays, faClock } from "@fortawesome/free-regular-svg-icons"

function CreateEvent(){
    const navigate = useNavigate()

    return (
        <section className={styles.wrapper}>
            <div className={styles.img}></div>
            <form className={styles.form}>
                <div className={styles.about}>
                    <h2>About Event</h2>
                    <TextField type="text" label="event name" id="event-name" placeholder="enter event name" />
                    <TextArea label="event description" id="event-desc" placeholder="describe the event" />
                </div>
                <div className={styles.details}>
                    <h2>details</h2>
                    <TextField type="text" id="location" label="event location" placeholder="enter event location" icon={<FontAwesomeIcon icon={faLocationDot} />} />
                    <div className={styles.duration}>
                        <DatePicker label="start date" icon={<FontAwesomeIcon icon={faCalendarDays} />} />
                        <TimePicker label="start time" icon={<FontAwesomeIcon icon={faClock} />} />
                        <DatePicker label="end date" icon={<FontAwesomeIcon icon={faCalendarDays} />} />
                        <TimePicker label="end time" icon={<FontAwesomeIcon icon={faClock} />} />
                    </div>
                </div>
            </form>
            <Button onClick={() => navigate("app/event/create/preview")}>continue</Button>
        </section>
    )
}

export default CreateEvent
