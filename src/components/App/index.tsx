import { createContext } from 'react';
import { BrowserRouter } from 'react-router-dom';

import io from 'socket.io-client';
import Routes from '../../routes';
import InputProvider from '../../contexts/InputContext';

import '../../styles/main.css';

interface SocketProps{
  socket: any;
}

export const SocketContext = createContext({} as SocketProps);

const socket = io('https://thisorthat-api.herokuapp.com');

function App() {
  return (
    <div className="bg-base bg-no-repeat bg-cover h-[100vh]">
      <SocketContext.Provider value={{ socket }}>
        <InputProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </InputProvider>
      </SocketContext.Provider>

    </div>
  );
}

export default App;
