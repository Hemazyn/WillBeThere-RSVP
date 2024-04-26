import moment from 'moment';
import { Loading, Notify } from 'notiflix';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getEventById } from '../../services/events';

const EventPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(null);

  useEffect(() => {
    Loading.hourglass();

    getEventById(id)
      .then(({ response }) => {
        setEvent(response);
      })
      .catch(() => {
        Notify.failure(
          'Unable to fetch this event at this time, please try again later'
        );
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, [id]);

  return (
    <>
      <main className="container mt-14 lg:mt-20 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap w-full">
            <h1 className="ml-5 lg:ml-0 w-1/4 text-white text-3xl px-3 border-b-2 border-white">
              Event
            </h1>
          </div>

          {isLoading && null}
          {!event && (
            <div className="mx-auto my-10">
              <h1 className="text-3xl text-white">No Event found</h1>
            </div>
          )}
          {event && (
            <div className="flex flex-col lg:flex-row justify-evenly w-full p-5">
              <div className="lg:w-2/5 h-full flex justify-center">
                <img
                  src={event.image}
                  alt="image_name.jpg"
                  className="w-full max-h-64 lg:max-h-full lg:w-80 xl:h-full object-cover rounded-xl my-9"
                />
              </div>
              <div className="lg:w-2/5 flex flex-col justify-evenly">
                <div className="p-3">
                  <p className="text-slate text-sm">Name</p>
                  <h1 className="text-2xl text-white">{event.name}</h1>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Event Info</p>
                  <h1 className="text-2xl text-white">{event.description}</h1>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Date</p>
                  <h1 className="text-2xl text-white">
                    {moment(event.date).format('D MMM[,] HH:mm [GMT] Z')}
                  </h1>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Duration</p>
                  <h1 className="text-xl text-white">
                    {event.duration.days === 0 ? (
                      ''
                    ) : (
                      <>Days: {event.duration.days} -</>
                    )}{' '}
                    Hours: {event.duration.hours} - Min:{' '}
                    {event.duration.minutes}
                  </h1>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Type</p>
                  <h1 className="text-xl text-white">{event.type}</h1>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Items</p>
                  <div className="">
                    {event.items.map((ele, i) => (
                      <h1 key={i} className="text-xl text-white">
                        {ele}
                      </h1>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default EventPage;
