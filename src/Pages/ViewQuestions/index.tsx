import { TbSquareCheck } from 'react-icons/tb';
import { BsFillTrashFill } from 'react-icons/bs';
import Container from '../../components/Container/Index';

export default function ViewQuestions() {
  return (
    <Container title="Visualizar perguntas">
      <div className=" flex flex-row mt-16 bg-secondary rounded-lg px-6 py-4">
        <div className="flex w-full justify-between items-center">
          <h1 className="text-base font-bold">Descrição da pergunta</h1>
          <div className="flex flex-row gap-2">
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
      </div>
    </Container>
  );
}
