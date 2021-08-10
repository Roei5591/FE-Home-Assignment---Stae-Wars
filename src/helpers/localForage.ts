import localForage from 'localforage';
import { fetchFilmsList } from './swapi'
import Film from '../interfaces/film'

const fileCache = localForage.createInstance({
  name: 'filmscache',
});


export const getFilmsList = async () => {

  const cachedResult = await fileCache.getItem<Film>(
    "starWarsFilmsList"
  );

  if (cachedResult) {
    return cachedResult;
  }

  const fetchedData = await fetchFilmsList()

  await fileCache.setItem(
    "starWarsFilmsList",
    fetchedData
  );

  return fetchedData;

}