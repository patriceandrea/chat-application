
import './App.css';
import UserContext from './Components/AccountContext';
import ToggleColorMode from './Components/ToggleColorMode';
import Views from './Components/Views';
import socket from "./socket"

function App() {
  socket.connect()

  return (
    <UserContext>
      <Views />
      <ToggleColorMode />
    </UserContext>
  );
}

export default App;
