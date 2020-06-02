import React from 'react';
import { ListOfCategories } from './components/ListOfCategories';
import { GlobalStyles } from './components/styles/GlobalStyles';
import { ListOfPhotoCards } from './components/ListOfPhotoCards'
import { Logo } from './components/Logo'

export const App = () => (
  <div>
    <GlobalStyles></GlobalStyles>
    <Logo></Logo>
    <ListOfCategories></ListOfCategories>
    <ListOfPhotoCards></ListOfPhotoCards>
  </div>
)

