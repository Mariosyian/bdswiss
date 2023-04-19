import './Register.css'
import axios from 'axios'
import { useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../Common/Buttons'
import { useNavigate } from 'react-router-dom'
import { TextBox } from '../Common/TextFields'

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate('/')
  }

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [hasError, setHasError] = useState(false)

  const formSubmit = (e) => {
    e.preventDefault()
    if (pass !== confirmPass) {
      setHasError(true)
    }
    axios.post('/register', { user, pass })
      .then((res) => console.log(res))
      .catch((err) => console.error(err))
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <TextBox type='text' placeholder='Type your full name ...' onChange={(e) => setUser(e.target.value)} required />
        <br />
        <TextBox type='text' placeholder='Type your email ...' onChange={(e) => setUser(e.target.value)} required />
        <br />
        <TextBox type='password' placeholder='Type your password ...' onChange={(e) => setPass(e.target.value)} required />
        <br />
        <TextBox type='password' placeholder='Confirm your password ...' onChange={(e) => setConfirmPass(e.target.value)} required />
        {hasError && (
          <>
            <br />
            <strong className='error-text'>Passwords do not match!</strong>
          </>
        )}
        <br />
        <PrimaryButton type='submit'>Register</PrimaryButton>
      </form>
      <a href='/'>Home</a>
    </div>
  )
}

export default Register
