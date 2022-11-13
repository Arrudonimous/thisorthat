import { TbSquareCheck } from 'react-icons/tb';
import { BsFillTrashFill } from 'react-icons/bs';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import Container from '../../components/Container/Index';
import OR from '../../assets/OU.svg';

import 'swiper/css';
import 'swiper/css/navigation';
import ViewInput from '../../components/ViewInput';

export default function ViewQuestions() {
  return (
    <Container title="Visualizar perguntas">
      <div className=" flex flex-row mt-16 rounded-lg px-6 py-4 text-text">
        <Swiper navigation modules={[Navigation]} className="flex flex-row gap-2">

          <SwiperSlide className="px-11">
            <div className="bg-secondary px-6 py-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-base font-bold">Descrição da pergunta</h1>

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

              <ViewInput text="Ter visão de raio-x" />

              <div className="flex justify-center my-2">
                <img src={OR} alt="" />
              </div>

              <ViewInput text="Ter visão de raio-x" />

              <div className="flex justify-end mt-3 font-bold">
                <h1>Enviada por: Nome do usuário</h1>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="px-11">
            <div className="bg-secondary px-6 py-4 rounded-lg">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-base font-bold">Descrição da pergunta</h1>

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

              <ViewInput text="Ter visão de raio-x" />

              <div className="flex justify-center my-2">
                <img src={OR} alt="" />
              </div>

              <ViewInput text="Ter visão de raio-x" />

              <div className="flex justify-end mt-3 font-bold">
                <h1>Enviada por: Nome do usuário</h1>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>
      </div>
    </Container>
  );
}
