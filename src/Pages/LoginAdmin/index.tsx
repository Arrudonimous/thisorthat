import { MdMail, MdLock } from 'react-icons/md';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { InputContext } from '../../contexts/InputContext';

import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';
import PasswordInput from '../../components/PasswordInput';

export default function LoginAdmin() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const context = useContext(InputContext);

  const input = document.getElementById('passwordInput');

  async function handleLogin() {
    setIsLoading(true);
    try {
      const { data } = await api.post('/auth/admin-login', {
        email: context.email,
        password: context.password,
      });

      toast.success(data.message, {
        position: 'bottom-center',
      });

      localStorage.setItem('token', data.token);

      setTimeout(() => navigate('/view/questions'), 2700);
    } catch (error : any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsLoading(false);
    }
  }

  input?.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      const button = document.getElementById('button');

      button?.click();
    }
  }, { once: true });

  return (
    <Container title="Conecte-se como admin">
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
      </div>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
