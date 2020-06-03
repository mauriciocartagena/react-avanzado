import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ListOfPhotoCards } from './container/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles></GlobalStyles>
    <Logo></Logo>
    <ListOfCategories></ListOfCategories>
    <ListOfPhotoCards categoryId={4}></ListOfPhotoCards>
  </div>
)

