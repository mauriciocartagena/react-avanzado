import React, { Fragment } from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
export const Home = ({ categoryId }) => {
  return (
    <Fragment>
      <ListOfCategories></ListOfCategories>
      <ListOfPhotoCards categoryId={categoryId}></ListOfPhotoCards>
    </Fragment>
  )
}