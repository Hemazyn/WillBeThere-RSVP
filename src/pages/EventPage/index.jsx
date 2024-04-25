import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

const EventPage = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    const getEvent = async (url) => {
      await axios
        .get(url)
        .then((res) => {
          setItem(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getEvent(`https://will-be-there-main-server.onrender.com/events/id/${id}`);
  }, [id]);

  return (
    <>
      <main className="container mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap w-full">
            <h1 className="w-1/4 text-white text-3xl p-3 border-b-2 border-white">
              Event
            </h1>
          </div>
          {item?.name ? (
            <>
              <div className="flex justify-evenly w-full p-5">
                <div className="w-2/5 h-full flex justify-center">
                  <img
                    src={item.image}
                    alt="image_name.jpg"
                    className="w-80 h-full object-cover rounded-xl my-9"
                  />
                </div>
                <div className="w-2/5 flex flex-col justify-evenly">
                  <div className="p-3">
                    <p className="text-slate text-sm">Name</p>
                    <h1 className="text-2xl text-white">{item.name}</h1>
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Event Info</p>
                    <h1 className="text-2xl text-white">{item.description}</h1>
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Date</p>
                    <h1 className="text-2xl text-white">
                      {moment(item.date).format("D MMM[,] HH:mm [GMT] Z")}
                    </h1>
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Duration</p>
                    <h1 className="text-xl text-white">
                      {item.duration.days === 0 ? (
                        ""
                      ) : (
                        <>Days: {item.duration.days} -</>
                      )}{" "}
                      Hours: {item.duration.hours} - Min:{" "}
                      {item.duration.minutes}
                    </h1>
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Type</p>
                    <h1 className="text-xl text-white">{item.type}</h1>
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Items</p>
                    <div className="">
                      {item.items.map((ele, i) => (
                        <h1 key={i} className="text-xl text-white">
                          {ele}
                        </h1>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
            </>
          ) : (
            <div className="mx-auto my-10">
              <h1 className="text-3xl text-white">No Event found</h1>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default EventPage;
