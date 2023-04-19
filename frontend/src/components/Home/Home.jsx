import './Home.css';
import { PrimaryButton, SecondaryButton } from '../Common/Buttons';
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate()

  const [user, setUser] = useState('')
  useEffect(() => {
    if (isLoggedIn) {
      fetch('/')
        .then((res) => console.log(res))
        .catch((err) => console.error(err))
    }
  }, [isLoggedIn])

  return (
    <div>
      {isLoggedIn && <h1>Welcome, {user}!</h1>}
      <PrimaryButton onClick={() => navigate('/login')}>Login</PrimaryButton>
      <SecondaryButton onClick={() => navigate('/register')}>Register</SecondaryButton>
    </div>
  );
}

export default Home;
