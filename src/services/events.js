import axios from "axios";
const uri = "https://will-be-there-main-server.onrender.com";

const getEvents = async () => {
  return await axios
    .get(`${uri}/events`)
    .then((res) => ({ response: res.data }))
    .catch((err) => ({ error: err }));
};

export { getEvents };
