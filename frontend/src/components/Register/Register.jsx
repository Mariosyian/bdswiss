import './Register.css'
import axios from 'axios'
import md5 from 'md5'

import { useState } from 'react'
import { PrimaryButton } from '../Common/Buttons'
import { useNavigate } from 'react-router-dom'
import { TextBox } from '../Common/TextFields'

const Register = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate('/')
  }

  const [user, setUser] = useState('')
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')

  const [hasErrors, setHasErrors] = useState({
    nameLength: false,
    passwordLength: false,
    passwordRegex: false,
    passwordsMatch: false,
  })
  const passwordRegex = /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/

  const formSubmit = (e) => {
    e.preventDefault()
    let newErrorState = {}
    newErrorState['passwordsMatch'] = pass !== confirmPass
    newErrorState['nameLength'] = !user.includes(' ') || user.length < 6
    newErrorState['passwordLength'] = pass.length < 8
    newErrorState['passwordRegex'] = !passwordRegex.test(pass)
    setHasErrors({ ...hasErrors, ...newErrorState })

    if (
      !newErrorState['passwordsMatch'] &&
      !newErrorState['nameLength'] &&
      !newErrorState['passwordLength'] &&
      !newErrorState['passwordRegex']
    ) {
      axios.post('/register', { fullName: user, password: md5(pass), email: email })
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <TextBox type='text' name='fullName' placeholder='Type your full name ...' onChange={(e) => setUser(e.target.value)} required />
        {hasErrors.nameLength && (
          <>
            <br />
            <strong className='error-text'>A full name must be at least 6 characters long (including the space)!</strong>
          </>
        )}
        <br />
        <TextBox type='email' name='email' placeholder='Type your email ...' onChange={(e) => setEmail(e.target.value)} required />
        <br />
        <TextBox type='password' name='password' placeholder='Type your password ...' onChange={(e) => setPass(e.target.value)} required />
        {hasErrors.passwordLength && (
          <>
            <br />
            <strong className='error-text'>Password must be at least 8 characters in length!</strong>
          </>
        )}
        {hasErrors.passwordRegex && (
          <>
            <br />
            <strong className='error-text'>Password must contain at least one character and one number!</strong>
          </>
        )}
        <br />
        <TextBox type='password' placeholder='Confirm your password ...' onChange={(e) => setConfirmPass(e.target.value)} required />
        {hasErrors.passwordsMatch && (
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
