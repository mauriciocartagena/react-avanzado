import React, { useContext } from 'react';
import { Context } from '../Context';
import { SubmitButton } from '../components/SubmitButton'
export const User = () => {
  const { removeAuth } = useContext(Context)
  return <React.Fragment>

    <h1>Users</h1>

    <SubmitButton onClick={removeAuth}>Cerrar session</SubmitButton>

  </React.Fragment>
}