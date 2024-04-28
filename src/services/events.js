import axios from 'axios';
const uri = 'https://will-be-there-main-server.onrender.com';

const getEvents = () =>
  new Promise((resolve, reject) => {
    return axios
      .get(`${uri}/events`)
      .then((res) => resolve({ response: res.data }))
      .catch((err) => reject({ error: err }));
  });

const getEventById = (id) =>
  new Promise((resolve, reject) => {
    return axios
      .get(`${uri}/events/id/${id}`)
      .then((res) => resolve({ response: res.data }))
      .catch((err) => reject({ error: err }));
  });

const createEvent = (data) => {};

export { getEvents, getEventById };
