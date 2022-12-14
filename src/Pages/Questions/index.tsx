import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import { BsCheckLg } from 'react-icons/bs';
import { GrLinkNext } from 'react-icons/gr';
import { Question } from '../../types/Question';

import QuestionsService from './services';
import RandomizeQuestions from '../../utils/RandomizeQuestions';
import CalcPercent from '../../utils/CalcPercent';

export default function Questions() {
  const [question, setQuestion] = useState<Question>();
  const [loading, setLoading] = useState(false);
  const [totalChoosed, setTotalChoosed] = useState();
  const [optionChoosed, setOptionChoosed] = useState<number>();
  const [firstChoosed, setFirstChoosed] = useState<number>();
  const [secondChoosed, setSecondChoosed] = useState<number>();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const data = await QuestionsService.getQuestions();

        setQuestion(data.questions[RandomizeQuestions(data.questions)]);
      } catch (error: any) {
        setErrorMessage(error.response.data.message);
        toast.error(error.response.data.message);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  async function handleChooseFirstOption(id: number| undefined) {
    if (!id) {
      return;
    }

    setLoading(true);

    try {
      const data = await QuestionsService.patchChooseQuestion(id, 1);

      setTotalChoosed(data.question.first_option_chosen_count
        + data.question.second_option_chosen_count);

      setOptionChoosed(1);

      setFirstChoosed(data.question.first_option_chosen_count);
      setSecondChoosed(data.question.second_option_chosen_count);
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setLoading(false);
      setOptionChoosed(2);
    }
  }

  async function handleChooseSecondOption(id: number| undefined) {
    if (!id) {
      return;
    }

    setLoading(true);
    try {
      const data = await QuestionsService.patchChooseQuestion(id, 2);

      setTotalChoosed(data.question.first_option_chosen_count
        + data.question.second_option_chosen_count);

      setOptionChoosed(2);

      setFirstChoosed(data.question.first_option_chosen_count);
      setSecondChoosed(data.question.second_option_chosen_count);
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setLoading(false);
      setOptionChoosed(1);
    }
  }

  if (loading) {
    return (
      <div className="flex flex-row h-full text-text ">
        <div className="absolute bg-light w-4/6 left-2/4 -translate-x-2/4 top-8 py-4 items-center justify-center flex rounded-2xl">
          <svg className="inline mr-2 w-9 h-9 text-light animate-spin dark:text-secondary fill-light" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </div>
        <button className="flex flex-1 bg-firstOption ease-out duration-150 hover:bg-current text-5xl hover:text-[3.02rem] items-center justify-center" type="button">
          <svg className="inline mr-2 w-9 h-9 text-light animate-spin dark:text-secondary fill-light" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </button>
        <div
          className="absolute top-2/4 left-2/4 w-28 h-28 bg-light -translate-x-2/4 -translate-y-2/4 rounded-full items-center justify-center flex"
        >
          <h1 className="text-4xl font-bold text-black">OU</h1>
        </div>
        <button className="flex flex-1 bg-secondOption ease-out duration-150 hover:bg-current text-5xl hover:text-[3.02rem] items-center justify-center" type="button">
          <svg className="inline mr-2 w-9 h-9 text-light animate-spin dark:text-secondary fill-light" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
        </button>
      </div>
    );
  }

  if (errorMessage === 'Voc?? j?? jogou todas as perguntas do jogo') {
    return (
      <div className="flex flex-row h-full text-text items-center justify-center ">
        <div className="absolute bg-light py-4 items-center justify-center flex p-4 rounded-2xl">
          <h1 className="text-black font-extrabold text-5xl">
            Voc?? j?? jogou todas as perguntas!
          </h1>
        </div>
        <ToastContainer autoClose={1000} />
      </div>
    );
  }

  if (optionChoosed) {
    return (
      <div className="flex flex-row h-full text-text ">
        <div className="absolute gap-8 bg-light w-4/6 left-2/4 -translate-x-2/4 top-8 py-4 items-center justify-center flex rounded-2xl">
          <h1 className="text-black font-extrabold text-5xl">
            {question?.question}
          </h1>
          <div
            className="bg-[#014365] p-4 text-text rounded-full hover:cursor-pointer"
            onClick={() => {
              window.location.reload();
            }}
          >
            <GrLinkNext color="white" />
          </div>
        </div>
        <div
          className="flex flex-1 bg-firstOption ease-out duration-150 hover:bg-current items-center justify-center flex-col"
        >
          {optionChoosed === 2 ? (
            <div className="absolute flex -top-24 -left-24 bg-light w-48 h-48  rounded-full items-end justify-end p-10">
              <BsCheckLg color="black" size={40} />
            </div>
          ) : null}
          <h1 className="font-bold text-9xl">
            {`${CalcPercent(firstChoosed, totalChoosed)}%`}
          </h1>
          <span className="font-extrabold">
            {`${firstChoosed} pessoas ${optionChoosed === 1 ? 'discordam' : 'concordam'}`}
          </span>
          <span className="font-extrabold text-xl">{question?.first_option}</span>
        </div>
        <div
          className="absolute top-2/4 left-2/4 w-28 h-28 bg-light -translate-x-2/4 -translate-y-2/4 rounded-full items-center justify-center flex"
        >
          <h1 className="text-4xl font-bold text-black">OU</h1>
        </div>
        <div
          className="flex flex-1 bg-secondOption ease-out duration-150 hover:bg-current items-center justify-center flex-col"
        >
          {optionChoosed === 1 ? (
            <div className="absolute flex -bottom-24 -right-24 bg-light w-48 h-48  rounded-full items-start justify-start p-10">
              <BsCheckLg color="black" size={40} />
            </div>
          ) : null}
          <h1 className="font-bold text-9xl">
            {`${CalcPercent(secondChoosed, totalChoosed)}%`}
          </h1>
          <span className="font-extrabold">

            {`${secondChoosed} pessoas ${optionChoosed === 2 ? 'discordam' : 'concordam'}`}

          </span>
          <span className="font-extrabold text-xl">{question?.second_option}</span>
        </div>
        <ToastContainer autoClose={1000} />
      </div>
    );
  }

  return (
    <div className="flex flex-row h-full text-text ">
      <div className="absolute bg-light w-4/6 left-2/4 -translate-x-2/4 top-8 py-4 items-center justify-center flex rounded-2xl">
        <h1 className="text-black font-extrabold text-5xl">
          {question?.question}
        </h1>
      </div>
      <button
        className="flex flex-1 bg-firstOption ease-out duration-150 hover:bg-current text-5xl hover:text-[3.02rem] items-center justify-center"
        type="button"
        onClick={() => handleChooseFirstOption(question?.id)}
      >
        <h1 className="font-black">{question?.first_option}</h1>
      </button>
      <div
        className="absolute top-2/4 left-2/4 w-28 h-28 bg-light -translate-x-2/4 -translate-y-2/4 rounded-full items-center justify-center flex"
      >
        <h1 className="text-4xl font-bold text-black">OU</h1>
      </div>
      <button
        className="flex flex-1 bg-secondOption ease-out duration-150 hover:bg-current text-5xl hover:text-[3.02rem] items-center justify-center"
        type="button"
        onClick={() => handleChooseSecondOption(question?.id)}
      >
        <h1 className="font-black">{question?.second_option}</h1>
      </button>
      <ToastContainer autoClose={1000} />
    </div>
  );
}
