import { MdMail, MdLock } from 'react-icons/md';
// import { useContext } from 'react';
import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';
// import { InputContext } from '../../contexts/InputContext';
// import api from '../../services/api';

export default function LoginAdmin() {
  // const context = useContext(InputContext);

  // async function handleLogin() {
  //   const res = await api.post('/auth/admin-login', {
  //     email: context.email,
  //     passwod: context.password,
  //   });
  //   console.log(res);
  // }

  return (
    <Container title="Conecte-se como admin">
      <div className=" flex flex-col gap-4 mt-20 px-16">
        <Input placeholder="E-mail..." type="email">
          <MdMail size={35} />
        </Input>
        <Input placeholder="Senha..." type="password">
          <MdLock size={35} />
        </Input>
        <div
          className="mt-4 bg-secondary rounded-lg hover:bg-[#002437] active:bg-[#001723] ease-in duration-150"
          // onClick={handleLogin}
        >
          <Button />
        </div>
      </div>
    </Container>
  );
}
