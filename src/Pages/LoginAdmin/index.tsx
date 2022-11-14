import { MdMail, MdLock } from 'react-icons/md';
import { useContext, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';
import { InputContext } from '../../contexts/InputContext';
import api from '../../services/api';

import 'react-toastify/dist/ReactToastify.css';

export default function LoginAdmin() {
  const navigate = useNavigate();
  const context = useContext(InputContext);
  const [isLoading, setIsLoading] = useState(false);

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

      console.log(localStorage.getItem('token'));

      setTimeout(() => navigate('/view/questions'), 2700);
    } catch (error : any) {
      toast.error(error.response.data.message, {
        position: 'bottom-center',
      });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Container title="Conecte-se como admin">
      <div className=" flex flex-col gap-4 mt-20 px-16">
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
          <Button title="Entrar" loading={isLoading} />
        </div>
      </div>
      <ToastContainer autoClose={2000} />
    </Container>
  );
}
