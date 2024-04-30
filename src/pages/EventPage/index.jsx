import moment from 'moment';
import { Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useParams } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';
import { useGetEvent } from '../../services/events';
import { useGetRsvpsForEvent } from '../../services/rsvp';

const EventPage = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [showGuestInfo, setShowGuestInfo] = useState(true);

  const { data: event, isPending: isLoading, isError, error } = useGetEvent(id);

  const {
    fetchRsvps,
    data: rsvps,
    isPending: isRsvpLoading,
    isError: isRsvpError,
    error: rsvpError,
  } = useGetRsvpsForEvent(id);

  useEffect(() => {
    if (event?.userId === user?.id) fetchRsvps();
  }, [event, fetchRsvps, user?.id]);

  useEffect(() => {
    if (isLoading || isRsvpLoading) Loading.hourglass();
    else Loading.remove();
  }, [isLoading, isRsvpLoading]);

  useEffect(() => {
    if (isError) {
      Notify.failure(error?.response?.data?.message || 'Unable to fetch event');
    }
    if (isRsvpError) {
      Notify.failure(
        rsvpError?.response?.data?.message || 'Unable to fetch rsvps'
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, isRsvpError]);

  return (
    <main className="container mt-14 lg:mt-20 mx-auto">
      <div className="flex flex-col">
        <div className="flex flex-wrap w-full">
          <h1 className="ml-5 lg:ml-0 w-1/4 text-white text-3xl px-3 border-b-2 border-white">
            Event
          </h1>
        </div>

        {!event && (
          <div className="mx-auto my-10">
            <h2 className="text-3xl text-white">No Event found</h2>
          </div>
        )}
        {event && (
          <div className="flex flex-col lg:flex-row justify-evenly w-full p-5">
            <div className="lg:w-2/5 h-full">
              <img
                src={event.image}
                alt="image_name.jpg"
                className="w-full max-h-64 lg:max-h-full lg:w-80 xl:h-full object-cover rounded-xl my-9"
              />
              {event.cancelled && (
                <p className="text-red">Note: This Event Has Been Cancelled</p>
              )}
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
              {event?.userId === user?.id && (
                <>
                  <hr />
                  <div className="p-3">
                    <p className="text-slate text-sm">Location</p>
                    <h2 className="text-xl text-white">{event.location}</h2>
                  </div>
                  {event?.locationReleaseDate && (
                    <div className="p-3">
                      <p className="text-slate text-sm">
                        Location Release Date
                      </p>
                      <h2 className="text-2xl text-white">
                        {moment(event.locationReleaseDate).format(
                          'D MMM[,] HH:mm [GMT] Z'
                        )}
                      </h2>
                    </div>
                  )}
                  <div className="p-3">
                    <p className="text-slate text-sm">Visibility</p>
                    <h2 className="text-xl text-white">{event.visibility}</h2>
                  </div>

                  <div className="relative">
                    <hr />
                    {showGuestInfo ? (
                      <>
                        <div className="p-3">
                          <p className="text-slate text-sm">Max Guests</p>
                          <h2 className="text-xl text-white">
                            {event.maxGuests || 0}
                          </h2>
                        </div>
                        <div className="p-3">
                          <p className="text-slate text-sm">
                            Max Guests Per Attendee
                          </p>
                          <h2 className="text-xl text-white">
                            {event.maxGuestsPerAttendee || 0}
                          </h2>
                        </div>
                        <div className="p-3">
                          <p className="text-slate text-sm">
                            Total Confirmed Guests
                          </p>
                          <h2 className="text-xl text-white">
                            {event.guestCount}
                          </h2>
                        </div>

                        <div className="p-3">
                          <p className="text-slate text-sm">Guests</p>
                          <ul>
                            {rsvps?.map((rsvp) => {
                              return (
                                <li className="text-white mb-2" key={rsvp.id}>
                                  <h2
                                    key={rsvp.id}
                                    className="text-xl text-white"
                                  >
                                    {rsvp.name}
                                  </h2>

                                  {rsvp.guests && rsvp.guests.length > 0 && (
                                    <p className="ml-2 text-sm font-normal">
                                      Plus Ones: {rsvp.guests.join(', ')}
                                    </p>
                                  )}
                                  {rsvp.congratulatoryMessage && (
                                    <p className="ml-2 text-sm font-normal">
                                      Congratulatory Message:{' '}
                                      {rsvp.congratulatoryMessage}
                                    </p>
                                  )}
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </>
                    ) : (
                      <p className="p-3 text-slate">Guest Info Hidden</p>
                    )}

                    <button
                      className="absolute top-5 right-3"
                      title={
                        showGuestInfo ? 'Hide guest info' : 'Show guest info'
                      }
                      onClick={() => setShowGuestInfo(!showGuestInfo)}
                    >
                      {showGuestInfo ? (
                        <FiEyeOff className="stroke-white" />
                      ) : (
                        <FiEye className="stroke-white" />
                      )}
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default EventPage;
