import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Loading, Notify } from 'notiflix';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import {
  Button,
  Chip,
  SelectInput,
  TextArea,
  TextField,
} from '../../../components';
import { Modal } from '../../../components/Modal';
import { useCreateRsvp } from '../../../services/rsvp';
import { respondToEventValidationSchema } from '../invitation.validation';

const RespondToEventModal = ({ open, onClose, event, user }) => {
  const initalState = {
    firstName: '',
    lastName: '',
    email: '',
    attending: false,
    congratulatoryMessage: '',
    items: [],
    guests: [],
  };
  const [form, setForm] = useState(initalState);
  const [formError, setFormError] = useState();
  const [plusOne, setPlusOne] = useState('');

  const {
    create: respondToEvent,
    isPending,
    isError,
    isSuccess,
    error,
  } = useCreateRsvp();

  const addPlusOne = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();

      if (plusOne) {
        if (!form.items.includes(plusOne))
          setForm({ ...form, guests: [...form.items, plusOne] });
        setPlusOne('');
      }
    }
  };

  const removePlusOne = (index) => {
    setForm({ ...form, items: form.items.filter((_, i) => i !== index) });
  };

  const onChange = (e) => {
    if (e.target.type === 'checkbox')
      setForm({ ...form, [e.target.id]: e.target.checked });
    else if (e.target.id === 'items')
      setForm({
        ...form,
        [e.target.id]: form.items.includes(e.target.value)
          ? form.items.filter((item) => item !== e.target.value)
          : [...form.items, e.target.value],
      });
    else setForm({ ...form, [e.target.id]: e.target.value });
    setFormError({ ...formError, [e.target.id]: '' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValidation = respondToEventValidationSchema.safeParse(form);
    if (!formValidation.success) {
      setFormError(formValidation.error.flatten().fieldErrors);
      Notify.failure('Please crosscheck all fields');
      return;
    }

    if (user) {
      delete form.firstName;
      delete form.lastName;
      delete form.email;
    }

    form.eventId = event.id;
    respondToEvent(form);
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success(
        'You have successfully responded to this event. Please refresh the page.'
      );
      onClose();
    }
  }, [isSuccess, onClose]);

  useEffect(() => {
    if (isPending) Loading.hourglass();
    else Loading.remove();
  }, [isPending]);

  useEffect(() => {
    if (isError) {
      Notify.failure(
        error?.response?.data?.message || 'Unable to respond to event'
      );
    }
  }, [error?.response?.data?.message, isError]);

  return (
    <Modal.Frame open={open} onClose={onClose}>
      <Modal.Head>RSVP</Modal.Head>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          {!user && (
            <div className="grid lg:grid-cols-2 gap-3 mb-3">
              <TextField
                type="text"
                label="First Name"
                id="firstName"
                placeholder="enter first name"
                value={form.firstName}
                onChange={onChange}
                error={formError?.firstName?.[0]}
                required
                showLabel
              />
              <TextField
                type="text"
                label="Last Name"
                id="lastName"
                placeholder="enter last name"
                value={form.lastName}
                onChange={onChange}
                error={formError?.lastName?.[0]}
                required
                showLabel
              />
              <TextField
                type="email"
                label="Email"
                id="email"
                placeholder="enter email address"
                value={form.email}
                onChange={onChange}
                error={formError?.email?.[0]}
                required
                showLabel
              />
            </div>
          )}

          <TextField
            type="checkbox"
            id="attending"
            label="Will you be attending this event?"
            placeholder="is event public"
            value={form.attending}
            onChange={onChange}
            className="flex w-full gap-5 [&>*]:my-auto [&>:first-child]:w-full mb-3"
            showLabel
          />

          {form.attending && (
            <div className="my-3">
              <div className="mb-3">
                <TextField
                  type="text"
                  id="items"
                  className="w-full"
                  label="Plus Ones"
                  placeholder="add plus one (press enter to add)"
                  icon={<FontAwesomeIcon icon={faPlusCircle} />}
                  value={plusOne}
                  onChange={(e) => setPlusOne(e.target.value)}
                  onKeyDown={(e) => addPlusOne(e)}
                  showLabel
                />
                {form.guests.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {form.guests.map((guest, i) => (
                      <Chip
                        key={guest}
                        label={guest}
                        onDelete={() => removePlusOne(i)}
                      />
                    ))}
                  </div>
                )}
              </div>

              {event?.items.length > 0 && (
                <SelectInput
                  label="Items you plan on bringing along"
                  id="items"
                  placeholder="Items you plan on bringing along"
                  value={form.items}
                  onChange={onChange}
                  error={formError?.items?.[0]}
                  className="w-full"
                  showLabel
                  multiple
                >
                  {event.items.map((item, i) => (
                    <SelectInput.Option key={i} value={item}>
                      {item}
                    </SelectInput.Option>
                  ))}
                </SelectInput>
              )}
            </div>
          )}

          <TextArea
            label="congratulatory message"
            id="congratulatoryMessage"
            placeholder="Congratulatory message"
            value={form.congratulatoryMessage}
            onChange={onChange}
            error={formError?.congratulatoryMessage?.[0]}
            showLabel
          />

          <Button className="mt-3 col-span-2 w-full bg-primary-light uppercase rounded-10 py-2">
            Submit
          </Button>
        </form>
      </Modal.Body>
    </Modal.Frame>
  );
};

RespondToEventModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.object,
  user: PropTypes.object,
};

export default RespondToEventModal;
