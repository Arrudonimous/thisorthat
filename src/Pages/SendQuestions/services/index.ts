import api from '../../../services/api';

interface PostQuestion{
  questionContent: string;
  firstOption: string;
  secondOption: string;
}

class SendQuestionsService {
  async postQuestion({ questionContent, firstOption, secondOption }: PostQuestion) {
    const { data } = await api.post('/questions', {
      questionContent,
      firstOption,
      secondOption,
    });
    return data;
  }
}

export default new SendQuestionsService();
