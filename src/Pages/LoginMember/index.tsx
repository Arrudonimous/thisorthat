import { MdMail, MdLock } from 'react-icons/md';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
import { InputContext } from '../../contexts/InputContext';

import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';
import LoginMemberService from './services';
import PasswordInput from '../../components/PasswordInput';

import 'react-toastify/dist/ReactToastify.css';

export default function LoginMember() {
  const [isLoading, setIsLoading] = useState(false);

  // const navigate = useNavigate();
  const context = useContext(InputContext);
  const input = document.getElementById('passwordInput');

  input?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const button = document.getElementById('button');

      button?.click();
    }
  }, { once: true });

  async function handleLogin() {
    setIsLoading(true);

    try {
      const data = await LoginMemberService.postLogin({
        email: context.email,
        password: context.password,
      });

      toast.success(data.message, {
        position: 'bottom-center',
      });

      localStorage.setItem('token', data.token);

      // setTimeout(() => navigate('/view/questions'), 2200);
    } catch (error : any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container title="Conecte-se como jogador" backPath="/">
      <div className=" flex flex-col gap-4 mt-20 px-16">
        <Input placeholder="E-mail..." text="email" type="text">
          <MdMail size={35} />
        </Input>
        <PasswordInput placeholder="Senha..." text="password" type="password">
          <MdLock size={35} />
        </PasswordInput>
        <div
          className="mt-4 bg-secondary rounded-lg hover:bg-[#002437] active:bg-[#001723] ease-in duration-150"
          onClick={handleLogin}
          id="button"
        >
          <Button title="Entrar" loading={isLoading} />
        </div>
        <div className="flex justify-center font-extrabold opacity-50 gap-1">
          <h1>Não tem uma conta? </h1>
          <a href="/register/player" className="hover:text-[#BBFE7D] duration-150 ease-in">Registre-se</a>
        </div>
      </div>
      <ToastContainer autoClose={1500} />
    </Container>
  );
}
