import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import {
  faLocationDot,
  faPerson,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loading, Notify, Report } from 'notiflix';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Chip,
  DatePicker,
  TextArea,
  TextField,
} from '../../components';
import { useCreateEvent } from '../../services/events';
import styles from './create-event.module.css';
import { eventCreationValidationSchema } from './create-event.validation';

function CreateEvent() {
  const [eventImage, setEventImage] = useState();
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    if (eventImage) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewImage(e.target.result);
      };
      reader.readAsDataURL(eventImage);
    } else setPreviewImage('');
  }, [eventImage]);

  const { create, isPending, isError, isSuccess, error, data } =
    useCreateEvent();
  const [newItem, setNewItem] = useState('');

  const navigate = useNavigate();

  const initialValue = {
    name: '',
    description: '',
    date: '',
    endDate: undefined,
    type: '',
    items: [],
    isPublic: false,
    location: '',
    locationReleaseDate: undefined,
    maxGuestsPerAttendee: undefined,
    maxGuests: undefined,
  };

  const [form, setForm] = useState(initialValue);
  const [formError, setFormError] = useState();

  const onChange = (e) => {
    if (e.target.type === 'number')
      setForm({
        ...form,
        [e.target.id]: Number(e.target.value),
      });
    else setForm({ ...form, [e.target.id]: e.target.value });
    setFormError({ ...formError, [e.target.id]: '' });
  };

  const addItem = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (newItem) {
        if (!form.items.includes(newItem))
          setForm({ ...form, items: [...form.items, newItem] });
        setNewItem('');
      }
    }
  };

  const removeItem = (index) => {
    setForm({ ...form, items: form.items.filter((_, i) => i !== index) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!eventImage) return Notify.failure('Please select an image');

    const formValidation = eventCreationValidationSchema.safeParse(form);
    if (!formValidation.success) {
      setFormError(formValidation.error.flatten().fieldErrors);
      return;
    }

    if (form.endDate) {
      form.duration = calculateDuration(
        new Date(form.date),
        new Date(form.endDate)
      );
    }

    form.image = eventImage;
    form.visibility = form.isPublic ? 'PUBLIC' : 'PRIVATE';

    create(form);
  };

  const calculateDuration = (startDate, endDate) => {
    const duration = {};

    const milliseconds = endDate.getTime() - startDate.getTime();
    const days = Math.floor(milliseconds / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((milliseconds % (1000 * 60 * 60)) / (1000 * 60));

    duration.days = days;
    duration.hours = hours;
    duration.minutes = minutes;

    return duration;
  };

  useEffect(() => {
    if (isSuccess) {
      console.log('Returned data');

      Report.success(
        'Event created successfully',
        `<p>Here's your event link</p> <br />
         <p>${window.location.href}/${data?.id}</p>
         `,
        'Copy',
        () => {
          navigator.clipboard.writeText(window.location.href + '/' + data?.id);
        },
        {
          plainText: false,
          backOverlayClickToClose: true,
        }
      );
      navigate('/dashboard/profile');
    }
  }, [navigate, isSuccess, data?.id]);

  useEffect(() => {
    if (isPending) Loading.hourglass();
    else Loading.remove();
  }, [isPending]);

  useEffect(() => {
    if (isError) {
      Notify.failure(
        error?.response?.data?.message || 'Unable to create event'
      );
    }
  }, [error?.response?.data?.message, isError]);

  return (
    <section className={styles.wrapper}>
      
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.about}>
          <h2>About Event</h2>
          <TextField
            type="text"
            label="event name"
            id="name"
            placeholder="enter event name"
            value={form.name}
            onChange={onChange}
            error={formError?.name?.[0]}
            required
          />
          <TextArea
            label="event description"
            id="description"
            placeholder="describe the event"
            value={form.description}
            onChange={onChange}
            error={formError?.description?.[0]}
            required
          />
        </div>
        <div className={styles.details}>
          <h2 className="text-[20px] font-semibold">details</h2>

          <TextField
            type="text"
            label="event type"
            id="type"
            placeholder="eg. wedding"
            value={form.type}
            onChange={onChange}
            error={formError?.type?.[0]}
            showLabel
            required
          />
          <TextField
            type="text"
            id="location"
            label="event location"
            placeholder="enter event location"
            icon={<FontAwesomeIcon icon={faLocationDot} />}
            value={form.location}
            onChange={onChange}
            error={formError?.location?.[0]}
            showLabel
            required
          />
          <DatePicker
            id="locationReleaseDate"
            label="location release date"
            icon={<FontAwesomeIcon icon={faCalendarDays} />}
            value={form.locationReleaseDate || ''}
            onChange={onChange}
            error={formError?.locationReleaseDate?.[0]}
          />
          <DatePicker
            id="date"
            label="start date"
            icon={<FontAwesomeIcon icon={faCalendarDays} />}
            required
            value={form.date}
            onChange={onChange}
            error={formError?.date?.[0]}
          />
          <DatePicker
            id="endDate"
            label="end date"
            icon={<FontAwesomeIcon icon={faCalendarDays} />}
            value={form.endDate || ''}
            onChange={onChange}
            error={formError?.endDate?.[0]}
          />
        </div>
        
      </form>
        <div className={styles.details}>
          <h2 className="text-[20px] font-semibold">Extras</h2>

          <div>
            <TextField
              type="text"
              id="items"
              className="w-full"
              label="Items Guests Can Bring Along"
              placeholder="add items (press enter to add)"
              icon={<FontAwesomeIcon icon={faPlusCircle} />}
              value={newItem}
              onChange={(e) => setNewItem(e.target.value)}
              onKeyDown={(e) => addItem(e)}
              showLabel
            />
            {form.items.length > 0 && (
              <div className="mt-2 flex flex-wrap gap-1">
                {form.items.map((item, i) => (
                  <Chip
                    key={item}
                    label={item}
                    onDelete={() => removeItem(i)}
                  />
                ))}
              </div>
            )}
          </div>

          <TextField
            type="number"
            id="maxGuestsPerAttendee"
            label="Max Guests Per Attendee"
            placeholder="Max Guests Per Attendee"
            icon={<FontAwesomeIcon icon={faPerson} />}
            value={
              form.maxGuestsPerAttendee === undefined
                ? ''
                : form.maxGuestsPerAttendee
            }
            onChange={onChange}
            error={formError?.maxGuestsPerAttendee?.[0]}
            showLabel
          />

          <TextField
            type="number"
            id="maxGuests"
            label="Total Max Guests"
            placeholder="Total Max Guests"
            icon={<FontAwesomeIcon icon={faPerson} />}
            value={form.maxGuests === undefined ? '' : form.maxGuests}
            onChange={onChange}
            error={formError?.maxGuests?.[0]}
            showLabel
          />

          <TextField
            type="checkbox"
            id="isPublic"
            label="Public Event"
            placeholder="is event public"
            value={form.isPublic}
            onChange={onChange}
            className="flex w-full gap-5 [&>*]:w-fit [&>*]:my-auto"
            showLabel
          />
        </div>
        
      {/* </div> */}

        <Button className={styles.button} type="submit">
          create
        </Button>
    </section>
  );
}

export default CreateEvent;
