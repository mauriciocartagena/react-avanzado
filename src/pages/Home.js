import React from 'react';
import { ListOfCategories } from '../components/ListOfCategories';
import { ListOfPhotoCards } from '../container/ListOfPhotoCards'
import { Layout } from '../components/Layout';

const HomePage = ({ categoryId }) => {
  return (
    <Layout title='Tu app de fotos de mascotas' subtitle='Con petgram puedes encontrara fotos de animales domésticos muy bonitos'>
      <ListOfCategories></ListOfCategories>
      <ListOfPhotoCards categoryId={categoryId}></ListOfPhotoCards>
    </Layout>
  )
}
export const Home = React.memo(HomePage, (PrevProps, props) => {
  //Compara si el anterior render es igual si no volvera a  renderizarse
  return PrevProps.categoryId === props.categoryId
});