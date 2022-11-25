import { useEffect, useState } from 'react';
import { Question } from '../../types/Question';

import QuestionsService from './services';

export default function Questions() {
  const [questions, setQuestions] = useState<Question[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const data = await QuestionsService.getQuestions();
        setQuestions(data.questions);
        console.log(questions);
      } catch (error: any) {
        console.log(error.response.data.message);
      }
    })();
  }, []);

  return (
    <div className="flex flex-row h-full text-text ">
      <div className="absolute bg-light w-4/6 left-2/4 -translate-x-2/4 top-8 py-4 items-center justify-center flex rounded-2xl">
        <h1 className="text-black font-extrabold text-5xl">
          Você prefere...
        </h1>
      </div>
      <button className="flex flex-1 bg-firstOption ease-out duration-150 hover:bg-current text-5xl hover:text-[3.02rem] items-center justify-center" type="button">
        <h1 className="font-black">Ter visão de raio-x</h1>
      </button>
      <div
        className="absolute top-2/4 left-2/4 w-28 h-28 bg-light -translate-x-2/4 -translate-y-2/4 rounded-full items-center justify-center flex"
      >
        <h1 className="text-4xl font-bold text-black">OU</h1>
      </div>
      <button className="flex flex-1 bg-secondOption ease-out duration-150 hover:bg-current text-5xl hover:text-[3.02rem] items-center justify-center" type="button">
        <h1 className="font-black">Ter visão de raio laser</h1>
      </button>
    </div>
  );
}
