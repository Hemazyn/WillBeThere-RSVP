import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import moment from 'moment';
import { Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Button, Nav } from '../../components';
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetEvent } from '../../services/events';
import { useGetRsvpsForEvent, useUploadEventImages } from '../../services/rsvp';
import RespondToEventModal from './modals/RespondToEventModal';
import UpdateResponseModal from './modals/UpdateResponseModal';

const InvitationPage = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const [openRsvpModal, setOpenRsvpModal] = useState(false);
  const [openUpdateRsvpModal, setOpenUpdateRsvpModal] = useState(false);

  const [response, setResponse] = useState();
  const { data: event, isPending: isLoading, isError, error } = useGetEvent(id);

  const {
    fetchRsvps,
    data: rsvps,
    isPending: isRsvpLoading,
    isError: isRsvpError,
    error: rsvpError,
  } = useGetRsvpsForEvent(id);

  const {
    uploadImages,
    isSuccess,
    isPending: isUploadImagesLoading,
    isError: isUploadImagesError,
    error: uploadImagesError,
  } = useUploadEventImages(id);

  const handleClick = () => {
    if (response) setOpenUpdateRsvpModal(true);
    else setOpenRsvpModal(true);
  };

  const handleUpload = (e) => {
    uploadImages(e.target.files);
  };

  // useEffect(() => {
  //   if (event && event.userId === user?.id) navigate(`/dashboard/event/${id}`);
  // }, [user, event, navigate, id]);

  useEffect(() => {
    if (isSuccess) {
      Notify.success('Images uploaded successfully');
      fetchRsvps();
    }
  }, [fetchRsvps, isSuccess]);

  useEffect(() => {
    if (rsvps && rsvps.length > 0)
      setResponse(rsvps.find((rsvp) => rsvp.userId === user?.id));
  }, [rsvps, user?.id]);

  useEffect(() => {
    fetchRsvps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLoading || isRsvpLoading || isUploadImagesLoading)
      Loading.hourglass();
    else Loading.remove();
  }, [isLoading, isRsvpLoading, isUploadImagesLoading]);

  useEffect(() => {
    if (isError) {
      Notify.failure(error?.response?.data?.message || 'Unable to fetch event');
    }
    if (isRsvpError) {
      Notify.failure(
        rsvpError?.response?.data?.message || 'Unable to fetch rsvps'
      );
    }
    if (isUploadImagesError) {
      Notify.failure(
        uploadImagesError?.response?.data?.message || 'Unable to upload images'
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isRsvpError, isUploadImagesError]);

  return (
    <>
      {user && <Nav />}

      <main className="container mt-14 lg:mt-20 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap w-full">
            <h1 className="ml-5 lg:ml-0 w-1/4 text-white text-3xl px-3 border-b-2 border-white">
              Event Invitation
            </h1>
          </div>

          {!event && (
            <div className="mx-auto my-10">
              <h2 className="text-3xl text-white">This event does not exist</h2>
            </div>
          )}
          {event && (
            <div className="flex flex-col lg:flex-row justify-evenly w-full p-5">
              <div className="lg:w-2/5 h-full">
                <img
                  src={event.image}
                  alt=""
                  className="w-full max-h-64 lg:max-h-full lg:w-80 xl:h-full object-cover rounded-xl my-9"
                />
              </div>
              <div className="lg:w-2/5 flex flex-col justify-evenly">
                <div className="p-3">
                  <p className="text-slate text-sm">Name</p>
                  <h2 className="text-2xl text-white">{event.name}</h2>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Event Info</p>
                  <h2 className="text-2xl text-white">{event.description}</h2>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Date</p>
                  <h2 className="text-2xl text-white">
                    {moment(event.date).format('D MMM[,] HH:mm [GMT] Z')}
                  </h2>
                </div>
                {event.duration && (
                  <div className="p-3">
                    <p className="text-slate text-sm">Duration</p>
                    <h2 className="text-xl text-white">
                      {event.duration.days === 0 ? (
                        ''
                      ) : (
                        <>Days: {event.duration.days} -</>
                      )}{' '}
                      Hours: {event.duration.hours} - Min:{' '}
                      {event.duration.minutes}
                    </h2>
                  </div>
                )}
                <div className="p-3">
                  <p className="text-slate text-sm">Type</p>
                  <h2 className="text-xl text-white">{event.type}</h2>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Items</p>
                  <div className="">
                    {event.items.map((ele, i) => (
                      <h2 key={i} className="text-xl text-white">
                        {ele}
                      </h2>
                    ))}
                  </div>
                </div>

                {response && (
                  <>
                    <hr />
                    <div className="p-3">
                      <p className="text-slate text-sm">Attending</p>
                      <h2 className="text-2xl text-white">
                        {response.attending ? 'Yes' : 'No'}
                      </h2>
                    </div>
                    {response.congratulatoryMessage && (
                      <div className="p-3">
                        <p className="text-slate text-sm">
                          Congratulatory Message
                        </p>
                        <h2 className="text-2xl text-white">
                          {response.congratulatoryMessage}
                        </h2>
                      </div>
                    )}
                    {response.items.length > 0 && (
                      <div className="p-3">
                        <p className="text-slate text-sm">
                          Items you will be bringing
                        </p>
                        <h2 className="text-2xl text-white">
                          {response.items.join(', ')}
                        </h2>
                      </div>
                    )}
                    {response.guests.length > 0 && (
                      <div className="p-3">
                        <p className="text-slate text-sm">Plus ones</p>
                        <h2 className="text-2xl text-white">
                          {response.guests.join(', ')}
                        </h2>
                      </div>
                    )}
                  </>
                )}

                <Button
                  className="w-full bg-primary-light uppercase rounded-10 py-2 md:py-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  onClick={handleClick}
                  title={
                    event?.cancelled
                      ? 'This event has been cancelled'
                      : new Date(event.date) < new Date()
                      ? 'Event has already taken place'
                      : ''
                  }
                  disabled={
                    event?.cancelled || new Date(event.date) < new Date()
                  }
                >
                  {user && rsvps && response ? 'Update RSVP' : 'RSVP'}
                </Button>
              </div>
            </div>
          )}
        </div>

        {user && response && (
          <div className="my-10 px-5">
            <div className="flex justify-between">
              <h2 className="text-3xl text-white">Your Uploads</h2>
              <label
                className="cursor-pointer flex p-2 items-center gap-2 rounded-full bg-primary-light"
                tabIndex={0}
              >
                <span>Upload Images</span>
                <FontAwesomeIcon icon={faPlus} />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleUpload}
                  aria-label="Upload event images"
                  multiple
                  hidden
                />
              </label>
            </div>

            {response?.uploads.length > 0 ? (
              <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-5">
                {response.uploads.map((upload) => (
                  <img
                    key={upload}
                    src={upload}
                    alt=""
                    className="max-w-full h-full object-cover rounded-xl"
                  />
                ))}
              </div>
            ) : (
              <h2 className="text-white">You have not uploaded any images</h2>
            )}
          </div>
        )}
      </main>

      <RespondToEventModal
        open={openRsvpModal}
        onClose={() => setOpenRsvpModal(false)}
        event={event}
        user={user}
      />
      {response && (
        <UpdateResponseModal
          open={openUpdateRsvpModal}
          onClose={() => setOpenUpdateRsvpModal(false)}
          event={event}
          response={response}
          user={user}
        />
      )}
    </>
  );
};

export default InvitationPage;
