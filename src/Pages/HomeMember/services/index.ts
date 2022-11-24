import api from '../../../services/api';

class HomeMemberServices {
  async getName(id: number) {
    const { data } = await api.get(`/users/${id}`);
    return data;
  }
}

export default new HomeMemberServices();
