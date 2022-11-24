import api from '../../../services/api';

interface Login{
  email: string;
  password: string;
}

class LoginMemberService {
  async postLogin({ email, password }:Login) {
    const { data } = await api.post('/auth/login', {
      email,
      password,
    });

    return data;
  }
}

export default new LoginMemberService();
