import React, { useEffect, useState } from 'react';
import { Category } from '../Category';
import { Item, List } from './styles';

function useCategoriesData() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function () {
    setLoading(true)
    window.fetch('https://petgram-server-mauricio-2dkf8kvj1.now.sh/categories')
      .then(res => res.json())
      .then(response => {
        setCategories(response)
        setLoading(false)
      })
  }, []);
  return { categories, loading }
}

const ListOfCategoriesComponent = () => {
  const { categories, loading } = useCategoriesData();
  const [showFixed, setShowFixed] = useState(false);

  useEffect(function () {

    const onScroll = e => {
      const newShowFixed = window.scrollY >
        200
      showFixed !== newShowFixed && setShowFixed(newShowFixed)
    }
    document.addEventListener('scroll', onScroll)

    return () => { document.removeEventListener('scroll', onScroll) }

  }, [showFixed])

  const renderList = (fixed) => (
    <List fixed={fixed}>
      {
        loading ? <Item key='loading'>  <Category /></Item>
          :
          categories.map(category => <Item key={category.id}>
            <Category {...category} path={`/pet/${category.id}`} />
          </Item>)
      }
    </List>
  )
  if (loading) {
    return 'Cargando....'
  }
  return (
    <React.Fragment>
      {renderList()}
      {showFixed && renderList(true)}
    </React.Fragment>

  )
}

export const ListOfCategories = React.memo(ListOfCategoriesComponent);