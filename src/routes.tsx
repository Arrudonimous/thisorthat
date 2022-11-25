import { Routes as Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import HomeMember from './Pages/HomeMember';
import LoginAdmin from './Pages/LoginAdmin';
import LoginMember from './Pages/LoginMember';
import RegisterPlayer from './Pages/RegisterPlayer';
import SendQuestions from './Pages/SendQuestions';
import ViewQuestions from './Pages/ViewQuestions';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/home-player" element={<HomeMember />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
      <Route path="/login/member" element={<LoginMember />} />
      <Route path="/send/questions" element={<SendQuestions />} />
      <Route path="/view/questions" element={<ViewQuestions />} />
      <Route path="/register/player" element={<RegisterPlayer />} />
    </Switch>
  );
}
