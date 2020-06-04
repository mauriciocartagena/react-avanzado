import React, { useContext } from 'react';
import { Context } from '../Context';
import { UserForm } from '../components/UserForm';
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation';

export const NotRegisteredUser = () => {

  const { activateAuth } = useContext(Context)
  return (
    <React.Fragment>
      <RegisterMutation>
        {
          (register, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables })
                .then(({ data }) => {
                  const { signup } = data;
                  activateAuth(signup);
                })
                .catch((e) => console.log(e))
            }
            const errorMsg = error && 'El Usuario ya existe o hay algún problema.';
            return <UserForm error={errorMsg} disabled={loading} onSubmit={onSubmit} title="Registrarse" />
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(({ data }) => {

                const { login } = data;
                activateAuth(login)

              }).catch((e) => console.log(e))
            }
            //mostramos si ahy algun error
            const errorMsg = error && 'La contraseña no es correcta o el usuario no existe.';
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title="Iniciar Seccion" />
          }
        }

      </LoginMutation>

    </React.Fragment>
  )
}



