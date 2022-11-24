import api from '../../../services/api';

interface PlayerInfo{
  name: string;
  email: string;
  password: string;
}

class RegisterPlayerServices {
  async postPlayer({ name, email, password }: PlayerInfo) {
    const { data } = await api.post('/users', {
      name,
      email,
      password,
    });

    return data;
  }
}

export default new RegisterPlayerServices();
