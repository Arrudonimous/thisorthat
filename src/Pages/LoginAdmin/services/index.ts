import api from '../../../services/api';

interface Login{
  email: string;
  password: string;
}

class LoginAdminService {
  async postLogin({ email, password }:Login) {
    const { data } = await api.post('/auth/admin-login', {
      email,
      password,
    });

    return data;
  }
}

export default new LoginAdminService();
