import { useEffect, useState } from 'react';
import { TbSquareCheck } from 'react-icons/tb';
import { BsFillTrashFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ToastContainer, toast } from 'react-toastify';
import { Navigation } from 'swiper';

import Container from '../../components/Container/Index';
import OR from '../../assets/OU.svg';
import ViewInput from '../../components/ViewInput';
import api from '../../services/api';

import 'swiper/css';
import 'swiper/css/navigation';

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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    try {
      (async () => {
        const { data } = await api.get('/unvalidated-questions');
        setNonValidatedQuestions(data.questions);
      })();
    } catch (error: any) {
      toast.error(error.data.response.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      <Container title="Visualizar perguntas">
        <div className=" flex flex-row mt-12 rounded-lg px-6 py-4 text-text">
          <Swiper navigation modules={[Navigation]} className="flex flex-row gap-2">

            {nonValidatedQuestions.map((question) => (
              <SwiperSlide className="px-11" key={question.id}>
                <div className="bg-secondary px-6 py-4 rounded-lg">
                  {isLoading ? (
                    <div className="flex justify-between items-center mb-4">
                      <h1>oi</h1>
                    </div>
                  ) : (
                    <div className="flex justify-between items-center mb-4">
                      <h1 className="text-base font-bold">{question.question}</h1>

                      <div className="flex gap-2">
                        <button
                          type="submit"
                          className="ease-in duration-100 hover:scale-105"
                        >
                          <TbSquareCheck size={25} className="text-[#45C4B0]" />
                        </button>
                        <button
                          type="submit"
                          className="ease-in duration-100 hover:scale-105"
                        >
                          <BsFillTrashFill size={22} className="text-[#C54646]" />
                        </button>
                      </div>
                    </div>
                  )}

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
        </div>
      </Container>
      <ToastContainer />

    </>
  );
}
