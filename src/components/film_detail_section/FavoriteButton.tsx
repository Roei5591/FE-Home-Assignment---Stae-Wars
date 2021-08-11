
import { AddOrRemoveFromFavoriteButton } from '../styled/button.style';
import { FavoriteIcon } from '../styled/img.style';
import { getIsInFavorites, toggleIsInFavorites } from '../../helpers/localForage'
import { useEffect, useState } from 'react';
import { useCallback } from 'react';



export default function FavoriteButton({ filmId }: { filmId: number }) {

  const [isFavorite, setIsFavorite] = useState(false)

  const initButton = useCallback(() => {
    getIsInFavorites(filmId).then(isFavorite => setIsFavorite(isFavorite))
  }, [filmId])

  useEffect(() => {
    initButton();
  }, [initButton])


  const handleClick = () => {
    toggleIsInFavorites(filmId);
    setIsFavorite(prevValue => !prevValue);
  }

  return <AddOrRemoveFromFavoriteButton onClick={handleClick}>
    <FavoriteIcon src={isFavorite ? "hole_death_star.png" : "half_death_star.png"} />
    {isFavorite ? "Remove" : "Add"} to Favorite
  </AddOrRemoveFromFavoriteButton>


}

