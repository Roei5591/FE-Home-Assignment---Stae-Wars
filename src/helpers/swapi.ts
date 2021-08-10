import axios from 'axios';
import fechedFilmData from '../interfaces/fechedFilmData';
import Film from '../interfaces/film';

export const fetchFilmsList = async () => {
  const { data } = await axios.get('https://swapi.dev/api/films/');

  const result: Film = data.results.map(({ episode_id, title, opening_crawl, release_date, director, producer }: fechedFilmData) => {
    return { id: episode_id, title, abstract: opening_crawl, releaseDate: release_date, director, producer }
  })

  return result
}