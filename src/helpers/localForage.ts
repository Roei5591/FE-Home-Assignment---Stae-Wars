import localForage from 'localforage';
import { fetchFilmsList } from './swapi'

const fileCache = localForage.createInstance({
  name: 'filmscache',
});


export const getFilmsList = async () => {

  try {
    const cachedResult = await fileCache.getItem<any>(
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

  } catch (error) {
    console.error(error)
  }

}