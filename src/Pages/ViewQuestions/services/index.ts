import api from '../../../services/api';

class ViewQuestionsService {
  async getQuestions() {
    const { data } = await api.get('/unvalidated-questions');
    return data;
  }

  async validateQuestion(id: number) {
    const { data } = await api.patch(`/validate-question/${id}`);
    return data;
  }

  async deleteQuestion(id: number) {
    const { data } = await api.delete(`/questions/${id}`);
    return data;
  }
}

export default new ViewQuestionsService();
