import { MdMail, MdLock } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { InputContext } from '../../contexts/InputContext';

import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';
import RegisterPlayerServices from './services';

export default function RegisterPlayer() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const context = useContext(InputContext);

  async function handleRegister() {
    setIsLoading(true);
    try {
      const data = await RegisterPlayerServices.postPlayer({
        name: context.name,
        email: context.email,
        password: context.password,
      });

      const login = await RegisterPlayerServices.postLogin({
        email: context.email,
        password: context.password,
      });

      toast.success(data.message, {
        position: 'bottom-center',
      });

      api.defaults.headers.common.Authorization = login.token;
      localStorage.setItem('token', login.token);
      setTimeout(() => navigate('/home-player'), 2700);
    } catch (error : any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container title="Registre-se como jogador" backPath="/">
      <div className=" flex flex-col gap-4 mt-8 px-16">
        <Input placeholder="Nome..." text="name" type="text">
          <BsFillPersonFill size={35} />
        </Input>
        <Input placeholder="E-mail..." text="email" type="text">
          <MdMail size={35} />
        </Input>
        <Input placeholder="Senha..." text="password" type="password">
          <MdLock size={35} />
        </Input>
        <div
          className="mt-4 bg-secondary rounded-lg hover:bg-[#002437] active:bg-[#001723] ease-in duration-150"
          onClick={handleRegister}
        >
          <Button title="Registrar" loading={isLoading} />
        </div>
        <div className="flex justify-center font-extrabold opacity-50 gap-1">
          <h1>Já tem uma conta? </h1>
          <a href="/login/member" className="hover:text-[#BBFE7D] duration-150 ease-in">Conecte-se</a>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
