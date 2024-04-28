import { faCalendarDays, faClock } from '@fortawesome/free-regular-svg-icons';
import { faLocationDot, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Chip,
  DatePicker,
  TextArea,
  TextField,
  TimePicker,
} from '../../components';
import useInput from '../../hooks/useInput';
import styles from './create-event.module.css';

function CreateEvent() {
  const [value, setValue] = useInput();
  const navigate = useNavigate();
  const [items, setItems] = useState([]);

  const addItem = (e) => {
    if (e.key === 'Enter') {
      setItems((prev) => [...prev, value]);
      setValue('');
    }
  };

  const removeItem = (index) => {
    setItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.img}></div>
      <form className={styles.form}>
        <div className={styles.about}>
          <h2>About Event</h2>
          <TextField
            type="text"
            label="event name"
            id="event-name"
            placeholder="enter event name"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <TextArea
            label="event description"
            id="event-desc"
            placeholder="describe the event"
          />
        </div>
        <div className={styles.details}>
          <h2>details</h2>
          <TextField
            type="text"
            id="location"
            label="event location"
            placeholder="enter event location"
            icon={<FontAwesomeIcon icon={faLocationDot} />}
          />
          <div className={styles.duration}>
            <DatePicker
              label="start date"
              icon={<FontAwesomeIcon icon={faCalendarDays} />}
            />
            <TimePicker
              label="start time"
              icon={<FontAwesomeIcon icon={faClock} />}
            />
            <DatePicker
              label="end date"
              icon={<FontAwesomeIcon icon={faCalendarDays} />}
            />
            <TimePicker
              label="end time"
              icon={<FontAwesomeIcon icon={faClock} />}
            />
          </div>
        </div>
        <div className={styles.items}>
          <h2>other</h2>
          <TextField
            type="text"
            id="items"
            label="event items"
            placeholder="add items"
            icon={<FontAwesomeIcon icon={faPlusCircle} />}
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => addItem(e)}
          />
          <div>
            {items.map((item, i) => (
              <Chip key={item} label={item} onDelete={() => removeItem(i)} />
            ))}
          </div>
        </div>
        <Button
          className={styles.button}
          onClick={() => navigate('app/event/create/preview')}
        >
          continue
        </Button>
      </form>
    </section>
  );
}

export default CreateEvent;
