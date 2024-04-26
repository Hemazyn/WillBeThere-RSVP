import moment from "moment";
import { Loading, Notify } from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/events";
import { Button } from "../../components";
import { faCaretUp, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventPage = () => {
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [event, setEvent] = useState(null);
  const [open, setOpen] = useState(false);
  const [inputs, setInputs] = useState({});

  const userId = "1c24450d-405e44bf-a94b-b61c4e779aa6"; // Remove this when auth is completed

  useEffect(() => {
    Loading.hourglass();

    getEventById(id)
      .then(({ response }) => {
        setEvent(response);
      })
      .catch(() => {
        Notify.failure(
          "Unable to fetch this event at this time, please try again later"
        );
      })
      .finally(() => {
        setIsLoading(false);
        Loading.remove();
      });
  }, [id]);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((fields) => ({ ...fields, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    // Send POST request to RSVP endpoint
  };

  return (
    <>
      <main className="container mt-14 lg:mt-20 mx-auto">
        <div className="flex flex-col">
          <div className="flex flex-wrap w-full justify-between">
            <h1 className="ml-5 lg:ml-0 w-1/4 text-white text-3xl px-3 border-b-2 border-white">
              Event
            </h1>
            <div className="flex w-1/4 self-end justify-center items-center p-2 gap-3">
              <Button
                as={"button"}
                className="text-white text-2xl p-3"
                onClick={() => setOpen(!open)}
              >
                {open ? (
                  <FontAwesomeIcon icon={faCaretDown} />
                ) : (
                  <FontAwesomeIcon icon={faCaretUp} />
                )}
              </Button>
              <Button
                as={"button"}
                className="text-white text-2xl p-3"
                onClick={() => setOpen(!open)}
              >
                {userId !== event?.userId ? "Join" : "Edit"}
              </Button>
            </div>
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
                    {moment(event.date).format("D MMM[,] HH:mm [GMT] Z")}
                  </h1>
                </div>
                <div className="p-3">
                  <p className="text-slate text-sm">Duration</p>
                  <h1 className="text-xl text-white">
                    {event.duration.days === 0 ? (
                      ""
                    ) : (
                      <>Days: {event.duration.days} -</>
                    )}{" "}
                    Hours: {event.duration.hours} - Min:{" "}
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
              {open && (
                <form
                  action=""
                  onSubmit={handleSubmit}
                  className="lg:w-2/5 flex flex-col md:pl-20 md:border-white md:border-l-2"
                >
                  <div className="p-3">
                    <p className="text-slate text-sm">First name</p>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name"
                      value={inputs.firstName || ""}
                      className="p-2 rounded-md"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Last name</p>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name"
                      value={inputs.lastName || ""}
                      className="p-2 rounded-md"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Email Address</p>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={inputs.email || ""}
                      className="p-2 rounded-md"
                      required
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex p-3 gap-3">
                    <p className="text-slate text-sm">Will be attending? </p>
                    <input
                      type="radio"
                      name="attending"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">
                      Items bringing along: {"[ 'drinks', 'souvenier' ]"}
                    </p>
                    <input
                      type="text"
                      name="items"
                      className="p-1 rounded-md"
                      value={inputs.items || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">
                      Additional Guests: {"[ 'John', 'Ada' ]"}
                    </p>
                    <input
                      type="text"
                      name="guests"
                      className="p-1 rounded-md"
                      value={inputs.guests || ""}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-slate text-sm">Message to host</p>
                    <textarea
                      type="message"
                      name="message"
                      placeholder="Thanks for the invitation"
                      value={inputs.message || ""}
                      rows={3}
                      className="p-2 rounded-md"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="p-3">
                    <input type="submit" name="submit" value="Join" className="p-2 w-24 h-12 rounded-md bg-primary-light"/>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default EventPage;
