import { Routes as Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import LoginAdmin from './Pages/LoginAdmin';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Home />} />
      <Route path="/login/admin" element={<LoginAdmin />} />
    </Switch>
  );
}
