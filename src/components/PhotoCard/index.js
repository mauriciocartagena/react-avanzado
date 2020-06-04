import React, { useContext } from 'react';
import { ImgWrapper, Img, Article } from './style';
import { FavButton } from '../FavButton';
import { Context } from '../../Context';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';
import { Link } from '@reach/router';
import { useNearScreen } from '../../hooks/useNearScreen';
import PropTypes from 'prop-types';

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';


export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {

  const [show, element] = useNearScreen();
  const { isAuth } = useContext(Context);


  return (
    <Article ref={element}>
      {
        show &&
        <React.Fragment>
          <Link
            to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  if (isAuth) return toggleLike({ variables: { input: { id } } })
                  window.location.href = '/login'
                };
                return <FavButton
                  liked={liked} likes={likes} onClick={handleFavClick}
                ></FavButton>
              }
            }
          </ToggleLikeMutation>


        </React.Fragment>

      }

    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName];
    if (propValue === undefined) {
      return new Error(`${propName}  Value must be defined`);
    }
    if (propValue < 0) {
      return new Error(`${propName}  Value must be greater than 0`);
    }
  }
}