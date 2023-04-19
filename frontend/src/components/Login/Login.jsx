import './Login.css'
import { useState } from 'react'
import { PrimaryButton, SecondaryButton } from '../Common/Buttons'
import { useNavigate } from 'react-router-dom'
import { TextBox } from '../Common/TextFields'

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate()

  if (isLoggedIn) {
    navigate('/')
  }

  const [user, setUser] = useState('')
  const [pass, setPass] = useState('')

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
        <PrimaryButton>Login</PrimaryButton>
      </form>
      <a href='/'>Home</a>
    </div>
  )
}

export default Login
