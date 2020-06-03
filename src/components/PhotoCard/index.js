import React, { useEffect, useRef, useState } from 'react';
import { ImgWrapper, Img, Article } from './style';
import { FavButton } from '../FavButton';
import { ToggleLikeMutation } from '../../container/ToggleLikeMutation';


const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png';

export const PhotoCard = ({ id, likes = 0, src = DEFAULT_IMAGE }) => {


  const element = useRef(null);
  const [show, setShow] = useState(false);
  const key = `like=${id}`;

  const [liked, setLiked] = useState(() => {
    try {
      const like = window.localStorage.getItem(key)
      return like;
    } catch (e) {
      return false;
    }
  });

  useEffect(function () {
    Promise.resolve(
      typeof window.IntersectionObserver !== 'undefined'
        ?
        window.IntersectionObserver
        : import('intersection-observer')
    ).then(() => {
      const observer = new window.IntersectionObserver(function (entries) {
        const { isIntersecting } = entries[0];
        if (isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      })
      observer.observe(element.current);
    })

  }, [element])

  const setLocalStorage = value => {
    try {
      window.localStorage.setItem(key, value)
      setLiked(value)
    } catch (e) {
      console.error(e);
    }
  }
  return (
    <Article ref={element}>
      {
        show &&
        <React.Fragment>
          <a
            href={`/?detail=${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </a>
          <ToggleLikeMutation>
            {
              (toggleLike) => {
                const handleFavClick = () => {
                  !liked && toggleLike({ variables: { input: { id } } })

                  setLocalStorage(!liked)
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