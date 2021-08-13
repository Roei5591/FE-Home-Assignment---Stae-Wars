import axios from 'axios';
import fetchedFilmData from '../interfaces/fetchedFilmData';
import Film from '../interfaces/film';

export const fetchFilmsList = async () => {

  const { data } = await axios.get('https://swapi.dev/api/films/');

  const result: Film[] = data.results.map(({ episode_id, title, opening_crawl, release_date, director }: fetchedFilmData) => {
    return { id: episode_id, title, abstract: opening_crawl, releaseDate: release_date, director };
  })

  return result;
}