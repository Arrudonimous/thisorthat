import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import '../../styles/main.css';
import InputProvider from '../../contexts/InputContext';

function App() {
  return (
    <div className="bg-base bg-no-repeat bg-cover h-[100vh]">
      <InputProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </InputProvider>
    </div>
  );
}

export default App;
