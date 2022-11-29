import api from '../../../services/api';

class QuestionsService {
  async getQuestions() {
    const { data } = await api.get('/available-questions');
    return data;
  }

  async patchChooseQuestion(id: number, optionChoosed: number) {
    const { data } = await api.patch(`questions/${id}`, {
      optionChoosed,
    });

    return data;
  }
}

export default new QuestionsService();
