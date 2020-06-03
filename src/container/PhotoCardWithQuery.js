import React from 'react';
import { PhotoCard } from '../components/PhotoCard';
import { gql } from 'apollo-boost';
import { Query } from 'react-apollo';

const GET_SINGLE_PHOTO = gql`
    query getSinglePhoto($id:ID!){
    photo(id:$id){
      id
      categoryId
      src
      likes
      userId
      liked
  }
}
`

const renderProp = ({ loading, error, data }) => {
  if (loading) {
    return <p>loading</p>
  }
  if (error) {
    return <p>Error!</p>
  }
  const { photo = {} } = data || {};
  console.log(photo)
  return < PhotoCard {...photo} />
}
export const PhotoCardWithQuery = ({ id }) => (
  <Query query={GET_SINGLE_PHOTO} variables={{ id }} >

    {
      renderProp
    }
  </Query >

)