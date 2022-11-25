import { useState, useContext } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { motion as m } from 'framer-motion';
import { InputContext } from '../../contexts/InputContext';

import Container from '../../components/Container/Index';
import OR from '../../assets/OU.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import SendQuestionsService from './services';
import { EnterTransition } from '../../styles/EnterTransition';

export default function SendQuestions() {
  const [loading, setLoading] = useState(false);
  const context = useContext(InputContext);
  const [questionTitle, setQuestionTitle] = useState('');

  function clearInputs() {
    context.setFirstOption('');
    context.setSecondOption('');
    setQuestionTitle('');
  }

  async function handleSendQuestion() {
    if (!context.firstOption.trim()
    || !context.secondOption.trim()
    || !questionTitle.trim()) {
      return toast.error('Insira todos os campos antes de enviar a pergunta', {
        position: 'bottom-center',
      });
    }

    try {
      setLoading(true);
      const data = await SendQuestionsService.postQuestion({
        questionContent: questionTitle,
        firstOption: context.firstOption,
        secondOption: context.secondOption,
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
              />
            </div>
            <Input placeholder="Opção 1" type="text" text="firstOption" />

            <div className="flex justify-center my-2">
              <img src={OR} alt="" />
            </div>

            <Input placeholder="Opção 2" type="text" text="secondOption" />

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
