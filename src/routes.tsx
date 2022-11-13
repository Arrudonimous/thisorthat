import { Routes as Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginAdmin from './Pages/LoginAdmin';
import RegisterPlayer from './Pages/RegisterPlayer';
import ViewQuestions from './Pages/ViewQuestions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/view/questions" element={<ViewQuestions />} />
      <Route path="/register/player" element={<RegisterPlayer />} />
    </Switch>
  );
}
