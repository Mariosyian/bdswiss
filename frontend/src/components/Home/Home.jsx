import './Home.css';
import { PrimaryButton, SecondaryButton } from '../Common/Buttons';
import { useNavigate } from 'react-router-dom'

const Home = ({ isLoggedIn, setIsLoggedIn, name }) => {
  const navigate = useNavigate()

  return (
    <div>
      {isLoggedIn && <h1>Welcome, {name}!</h1>}
      <PrimaryButton onClick={() => navigate('/login')}>Login</PrimaryButton>
      <SecondaryButton onClick={() => navigate('/register')}>Register</SecondaryButton>
      {isLoggedIn && (
        <>
          <br />
          <br />
          <PrimaryButton onClick={() => setIsLoggedIn(false)}>Logout</PrimaryButton>
        </>
      )}
    </div>
  );
}

export default Home;
