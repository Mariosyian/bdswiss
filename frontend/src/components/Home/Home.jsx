import './Home.css';
import { PrimaryButton, SecondaryButton } from '../Common/Buttons';
import { useNavigate } from 'react-router-dom'

const Home = ({ isLoggedIn }) => {
  const navigate = useNavigate()

  return (
    <div>
      {isLoggedIn && <h1>Welcome</h1>}
      <PrimaryButton onClick={() => navigate('/login')}>Login</PrimaryButton>
      <SecondaryButton onClick={() => navigate('/register')}>Register</SecondaryButton>
    </div>
  );
}

export default Home;
