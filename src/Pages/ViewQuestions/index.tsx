import { useEffect, useState } from 'react';
import { TbSquareCheck } from 'react-icons/tb';
import { BsFillTrashFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';
import { Navigation, Pagination } from 'swiper';

import Container from '../../components/Container/Index';
import OR from '../../assets/OU.svg';
import ViewInput from '../../components/ViewInput';
import api from '../../services/api';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Question{
  id: number;
  user_id: number;
  question: string;
  first_option: string;
  second_option: string;
  first_option_chosen_count: number;
  second_option_chosen_count: number;
  is_validated: boolean;
  user:{
    name: string;
  }
}

export default function ViewQuestions() {
  const [nonValidatedQuestions, setNonValidatedQuestions] = useState<Question[]>([]);
  const [isValidating, setIsValidating] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await api.get('/unvalidated-questions');
        setNonValidatedQuestions(data.questions);
      } catch (error: any) {
        toast.error(error.response.data.message, {
          position: 'bottom-center',
        });
      }
    })();
  }, [isValidating, isDeleting, isDeleted]);

  async function handleValidateQuestion(id: number) {
    setIsValidating(true);
    try {
      const { data } = await api.patch(`/validate-question/${id}`);
      toast.success(data.message, {
        position: 'bottom-center',
      });
    } catch (error: any) {
      toast.error(error.data.response.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsValidating(false);
    }
  }

  async function handleDeleteQuestion(id: number) {
    setIsDeleting(true);
    try {
      const { data } = await api.delete(`/questions/${id}`);
      toast.success(data.message, {
        position: 'bottom-center',
      });
    } catch (error: any) {
      toast.error(error.data.response.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsDeleting(false);
      if (isDeleted) {
        setIsDeleted(false);
      }
      if (!isDeleted) {
        setIsDeleted(true);
      }
    }
  }

  return (
    <>
      <Container title="Visualizar perguntas">
        <div className=" flex flex-row mt-6 rounded-lg px-6 py-4 text-text">
          {nonValidatedQuestions.length ? (
            <Swiper
              navigation
              modules={[Navigation, Pagination]}
              pagination
              loop
              className="flex flex-row gap-2"
            >
              {nonValidatedQuestions.map((question) => (
                <SwiperSlide className="px-11" key={question.id}>
                  <div className="bg-secondary px-6 py-4 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="text-base font-bold">{question.question}</h1>

                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="ease-in duration-100 hover:scale-105"
                          onClick={() => handleValidateQuestion(question.id)}
                        >
                          {isValidating ? (
                            <div role="status" className="flex justify-center py-2 items-center">
                              <svg className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#45C4B0]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            <TbSquareCheck size={25} className="text-[#45C4B0]" />
                          )}
                        </button>
                        <button
                          type="submit"
                          className="ease-in duration-100 hover:scale-105"
                          onClick={() => handleDeleteQuestion(question.id)}
                        >
                          {isDeleting ? (
                            <div role="status" className="flex justify-center py-2 items-center">
                              <svg className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-[#C54646]" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                              </svg>
                              <span className="sr-only">Loading...</span>
                            </div>
                          ) : (
                            <BsFillTrashFill size={22} className="text-[#C54646]" />
                          )}

                        </button>
                      </div>
                    </div>

                    <ViewInput text={question.first_option} />

                    <div className="flex justify-center my-2">
                      <img src={OR} alt="" />
                    </div>

                    <ViewInput text={question.second_option} />

                    <div className="flex justify-end mt-3 font-bold">
                      <h1>
                        Enviada por:
                        {' '}
                        {question.user.name}
                      </h1>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <h1 className="text-lg font-bold">Não há questões para serem verificadas :(</h1>
          )}
        </div>
      </Container>
      <ToastContainer />

    </>
  );
}
