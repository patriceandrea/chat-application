
import './App.css';
import UserContext from './Components/AccountContext';
import ToggleColorMode from './Components/ToggleColorMode';
import Views from './Components/Views';

function App() {
  return (
    <UserContext>
      <Views />
      <ToggleColorMode />
    </UserContext>
  );
}

export default App;
