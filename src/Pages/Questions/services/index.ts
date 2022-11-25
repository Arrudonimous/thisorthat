import api from '../../../services/api';

class QuestionsService {
  async getQuestions() {
    const { data } = await api.get('/available-questions');
    return data;
  }
}

export default new QuestionsService();
