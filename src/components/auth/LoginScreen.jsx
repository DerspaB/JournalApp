import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { startLoginEmailPassword } from '../../actions/authAction'
import { useForm } from '../../hooks/useForm'

export const LoginScreen = () => {

  const {values, handleInputChange} = useForm({
    email: 'derspab2501@gmail.com',
    password: '123456'
  })

  const {email, password} = values

  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch( startLoginEmailPassword('jparrado@hotmail.com', '2501') )
  }

  return (
    <>
      <h3 className='auth__title'>Login</h3>

      <form>

        <input
          className='auth__input'
          type="text"
          placeholder='Email'
          name='email'
          value={ email }
          onChange={handleInputChange}
          autoComplete='off'
        />

        <input
          className='auth__input'
          type="password"
          value={password}
          onChange={handleInputChange}
          placeholder='Password'
          name='password'
        />

        <button
          type='submit'
          className='btn btn-primary btn-block'
          onClick={handleLogin}
        >
          Login
        </button>


        <div className='auth__social_networks'>
          <p><strong>Login with social networks</strong></p>
        </div>

        <div
          className="google-btn"
        >
          <div className="google-icon-wrapper">
            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
          </div>
          <p className="btn-text">
            <b>Sign in with google</b>
          </p>
        </div>

        <Link className='link' to="/auth/register">
          Create new account
        </Link>

      </form>
    </>
  )
}
