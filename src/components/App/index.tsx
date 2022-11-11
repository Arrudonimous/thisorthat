import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import '../../styles/main.css';

function App() {
  return (
    <div className="bg-base bg-no-repeat bg-cover h-[100vh]">
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
