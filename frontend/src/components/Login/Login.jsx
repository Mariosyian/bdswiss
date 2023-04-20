import './Login.css'
import axios from 'axios'
import md5 from 'md5'

import { useState } from 'react'
import { PrimaryButton } from '../Common/Buttons'
import { useNavigate } from 'react-router-dom'
import { TextBox } from '../Common/TextFields'

const Login = ({ isLoggedIn, setIsLoggedIn, setName }) => {
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate('/')
  }

  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [hasError, setHasError] = useState({
    error: false,
    message: '',
  })

  const formSubmit = (e) => {
    e.preventDefault()
    axios.post('/login', { email: email, password: md5(pass) })
      .then((res) => {
        setName(res.data.user)
        setIsLoggedIn(true)
      })
      .catch((err) => {
        setHasError({
          error: true,
          message: err.response.data.error
        })
      })
  }

  return (
    <div>
      {hasError.error &&
        <div className='alert error' role='alert'>{hasError.message}</div>
      }
      <form onSubmit={formSubmit}>
        <TextBox type='email' name='email' placeholder='Type your email ...' onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <TextBox type='password' name='password' placeholder='Type your password ...' onChange={(e) => setPass(e.target.value)} required />
        <br />
        <PrimaryButton type='submit'>Login</PrimaryButton>
      </form>
      <a href='/'>Home</a>
    </div>
  )
}

export default Login
