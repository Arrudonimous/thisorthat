import { Routes as Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomeMember from './pages/HomeMember';
import LoginAdmin from './pages/LoginAdmin';
import LoginMember from './pages/LoginMember';
import RegisterPlayer from './pages/RegisterPlayer';
import ViewQuestions from './pages/ViewQuestions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/login/member" element={<LoginMember />} />
      <Route path="/view/questions" element={<ViewQuestions />} />
      <Route path="/register/player" element={<RegisterPlayer />} />
      <Route path="/home-player" element={<HomeMember />} />
    </Switch>
  );
}
