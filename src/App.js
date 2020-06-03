import React, { Fragment } from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuery } from './container/PhotoCardWithQuery'


export const App = () => {
  const urlParams = new window.URLSearchParams(window.location.search);
  const detailId = urlParams.get('detail');
  return (
    <div>
      <GlobalStyles></GlobalStyles>
      <Logo></Logo>
      {
        detailId
          ? <PhotoCardWithQuery id={detailId}></PhotoCardWithQuery>
          :
          <Fragment>
            <ListOfCategories></ListOfCategories>
            <ListOfPhotoCards categoryId={1}></ListOfPhotoCards>
          </Fragment>
      }

    </div>
  )
}

