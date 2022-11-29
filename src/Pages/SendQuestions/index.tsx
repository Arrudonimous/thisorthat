import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { motion as m } from 'framer-motion';

import Container from '../../components/Container/Index';
import OR from '../../assets/OU.svg';
import Button from '../../components/Button';
import SendQuestionsService from './services';
import { EnterTransition } from '../../styles/EnterTransition';

export default function SendQuestions() {
  const [loading, setLoading] = useState(false);
  const [questionTitle, setQuestionTitle] = useState('');
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');

  function clearInputs() {
    setFirstOption('');
    setSecondOption('');
    setQuestionTitle('');
  }

  async function handleSendQuestion() {
    if (!firstOption.trim()
    || !secondOption.trim()) {
      return toast.error('Insira todos os campos antes de enviar a pergunta', {
        position: 'bottom-center',
      });
    }

    try {
      setLoading(true);
      const data = await SendQuestionsService.postQuestion({
        questionContent: questionTitle || 'Você prefere',
        firstOption,
        secondOption,
      });

      toast.success(data.message, {
        position: 'bottom-center',
      });
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setLoading(false);
      clearInputs();
    }

    return true;
  }

  return (
    <m.div
      className="w-full h-full"
      {...EnterTransition}
    >
      <Container title="Enviar perguntas" backPath="/home-player">
        <div className=" flex flex-col mt-6 rounded-lg px-16 text-text">
          <div className="bg-secondary px-6 pt-4 pb-10 rounded-lg w-full">
            <div className="flex justify-between items-center mb-4">
              <input
                className="text-base font-bold w-full bg-transparent outline-0"
                placeholder="Descrição da pergunta"
                onChange={(e) => setQuestionTitle(e.target.value)}
                value={questionTitle}
              />
            </div>

            <div className="bg-[#D9D9D9] text-secondary flex flex-row gap-3 px-3 py-2 items-center rounded-lg drop-shadow-3xl">
              <input
                type="text"
                placeholder="Opção 1"
                className="w-full bg-transparent text-secondary font-bold text-lg outline-0 placeholder:text-secondary placeholder:opacity-80"
                onChange={(e) => setFirstOption(e.target.value)}
                value={firstOption}
              />
            </div>

            <div className="flex justify-center my-2">
              <img src={OR} alt="" />
            </div>

            <div className="bg-[#D9D9D9] text-secondary flex flex-row gap-3 px-3 py-2 items-center rounded-lg drop-shadow-3xl">
              <input
                type="text"
                placeholder="Opção 2"
                className="w-full bg-transparent text-secondary font-bold text-lg outline-0 placeholder:text-secondary placeholder:opacity-80"
                onChange={(e) => setSecondOption(e.target.value)}
                value={secondOption}
              />
            </div>

          </div>

          <div
            className="mt-8 bg-light rounded-lg hover:bg-[#4ED7C1] active:bg-[#3EB2A0] ease-in duration-150 text-base"
            id="button"
            onClick={handleSendQuestion}
          >
            <Button title="Enviar" loading={loading} />
          </div>
        </div>
      </Container>
      <ToastContainer autoClose={1000} />
    </m.div>
  );
}
