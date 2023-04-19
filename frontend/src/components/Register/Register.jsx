import './Register.css'
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

  const formSubmit = (e) => {
    e.preventDefault()
    // TBD
  }

  return (
    <div>
      <form onSubmit={formSubmit}>
        <TextBox type='text' placeholder='Type your email or username ...' onChange={(e) => setUser(e.target.value)} />
        <br />
        <TextBox type='password' placeholder='Type your password ...' onChange={(e) => setPass(e.target.value)} />
        <br />
        <TextBox type='password' placeholder='Confirm your password ...' onChange={(e) => setConfirmPass(e.target.value)} />
        <br />
        <PrimaryButton>Register</PrimaryButton>
      </form>
      <a href='/'>Home</a>
    </div>
  )
}

export default Register
