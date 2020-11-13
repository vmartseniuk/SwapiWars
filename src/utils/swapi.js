/* eslint-disable import/prefer-default-export */
import axios from './axios';

const swapiModule = (() => {

  const request = (url, data) => {
    return axios.get(url, data);
  }

  const getResources = () => request();


  const singularRequestGenerator = (path) => {
    return (id = '') => request(`${path}/${id}`);

  }

  const pluralRequestGenerator = (path) => {
    return (params) => request(path, { params });
  }

  return {
    getResources,
    getPerson: singularRequestGenerator("people"),
    getPeople: pluralRequestGenerator("people"),
    getFilm: singularRequestGenerator("films"),
    getFilms: pluralRequestGenerator("films"),
    getPlanet: singularRequestGenerator("planets"),
    getPlanets: pluralRequestGenerator("planets"),
    getSpecies: singularRequestGenerator("species"),
    getAllSpecies: pluralRequestGenerator("species"),
    getStarship: singularRequestGenerator("starships"),
    getStarships: pluralRequestGenerator("starships"),
    getVehicle: singularRequestGenerator("vehicles"),
    getVehicles: pluralRequestGenerator("vehicles")
  };
})();

export default swapiModule;
