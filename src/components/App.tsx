import { useEffect, useState } from 'react';
import { getFilmsList } from '../helpers/localForage'
import { AppContiner } from './styled/div.style'
import SideMenu from './side_menu/sideMenu'




function App() {
  return (
    <AppContiner>
      <SideMenu></SideMenu>
    </AppContiner>

  );
}
export default App;
