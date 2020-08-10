import React from 'react';
import { CheckboxOpenMusic,HeaderOpenMusic } from './components/HeaderOpenMusic';
import LogoOpenMusic from './components/LogoOpenMusic';
import AvatarOpenMusic from './components/AvatarOpenMusic';
import SearchOpenMusic from './components/SearchOpenMusic';
import ContentOpenMusic from './components/ContentOpenMusic';
import { VerticalBarOpenMusic, UlOpenMusic, ListOpenMusic } from './components/VerticalBarOpenMusic';
import TitleOpenMusic from './components/TitleOpenMusic';
import { SpaceOpenMusic,AlbumOpenMusic } from './components/AlbumOpenMusic';
import MainOpenMusic from './components/MainOpenMusic';

function App() {
  return (
    <>
      <HeaderOpenMusic>
        <CheckboxOpenMusic />
        <AvatarOpenMusic />
        <LogoOpenMusic />
        <SearchOpenMusic />
      </HeaderOpenMusic>

      <ContentOpenMusic>
        <VerticalBarOpenMusic>
          <UlOpenMusic>
            <h1>Suas Músicas</h1>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
          </UlOpenMusic>

          <UlOpenMusic>
            <h1>Mais Populares</h1>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
            <ListOpenMusic>asdasddasdas as ads</ListOpenMusic>
          </UlOpenMusic>
        </VerticalBarOpenMusic>
        <MainOpenMusic>
          <TitleOpenMusic>Recomendamos....</TitleOpenMusic>
          <SpaceOpenMusic>
            <AlbumOpenMusic></AlbumOpenMusic>
            <AlbumOpenMusic></AlbumOpenMusic>
            <AlbumOpenMusic></AlbumOpenMusic>
            </SpaceOpenMusic>

          <TitleOpenMusic>Seus álbuns preferidos</TitleOpenMusic>
          <SpaceOpenMusic>
            <AlbumOpenMusic></AlbumOpenMusic>
            <AlbumOpenMusic></AlbumOpenMusic>
            <AlbumOpenMusic></AlbumOpenMusic>
          </SpaceOpenMusic>
        </MainOpenMusic>

      </ContentOpenMusic>
    </>
  );
}

export default App;
