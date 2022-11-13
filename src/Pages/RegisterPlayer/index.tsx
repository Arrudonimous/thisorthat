import { MdMail, MdLock } from 'react-icons/md';
import { BsFillPersonFill } from 'react-icons/bs';
import { useContext } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';
import { InputContext } from '../../contexts/InputContext';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPlayer() {
  const navigate = useNavigate();
  const context = useContext(InputContext);

  async function handleLogin() {
    try {
      const { data } = await api.post('/auth/admin-login', {
        email: context.email,
        password: context.password,
      });

      toast.success(data.message, {
        position: 'bottom-center',
      });

      api.defaults.headers.common.Authorization = data.token;
      setTimeout(() => navigate('/view/questions'), 2700);
    } catch (error : any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    }
  }

  return (
    <Container title="Registre-se como jogador">
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
          onClick={handleLogin}
        >
          <Button title="Registrar" />
        </div>
        <div className="flex justify-center font-extrabold opacity-50 gap-1">
          <h1>Já tem uma conta? </h1>
          <a href="/" className="hover:text-[#BBFE7D] duration-150 ease-in">Conecte-se</a>
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
