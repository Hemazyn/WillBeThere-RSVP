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
import { useUpdateRsvp } from '../../../services/rsvp';
import { updateRsvpValidationSchema } from '../invitation.validation';

const UpdateResponseModal = ({ open, onClose, response, event }) => {
  const initalState = {
    attending: response.attending,
    congratulatoryMessage: response.congratulatoryMessage ?? '',
    items: response.items,
    guests: response.guests,
  };
  const [form, setForm] = useState(initalState);
  const [formError, setFormError] = useState();
  const [plusOne, setPlusOne] = useState('');

  const closeModal = () => {
    setForm(initalState);
    onClose();
  };

  const {
    create: updateRsvp,
    isPending,
    isError,
    isSuccess,
    error,
  } = useUpdateRsvp();

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

    const formValidation = updateRsvpValidationSchema.safeParse(form);
    if (!formValidation.success) {
      setFormError(formValidation.error.flatten().fieldErrors);
      Notify.failure('Please crosscheck all fields');
      return;
    }

    form.eventId = event.id;
    updateRsvp(form);
  };

  useEffect(() => {
    if (isSuccess) {
      Notify.success(
        'You have successfully updated your response to this event. Please refresh the page.'
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
        error?.response?.data?.message || 'Unable to update rsvp status'
      );
    }
  }, [error, isError]);

  return (
    <Modal.Frame open={open} onClose={closeModal}>
      <Modal.Head>Update Response</Modal.Head>
      <Modal.Body>
        <form onSubmit={handleSubmit}>
          <TextField
            type="checkbox"
            id="attending"
            label="Will you be attending this event?"
            placeholder="is event public"
            value={form.attending}
            checked={form.attending}
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

UpdateResponseModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  event: PropTypes.object,
  user: PropTypes.object,
  response: PropTypes.object.isRequired,
};

export default UpdateResponseModal;
