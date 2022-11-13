import { MdMail, MdLock } from 'react-icons/md';
import Button from '../../components/Button';
import Container from '../../components/Container/Index';
import Input from '../../components/Input';

export default function LoginAdmin() {
  return (
    <Container title="Conecte-se como admin">
      <div className=" flex flex-col gap-4 mt-20">
        <Input placeholder="E-mail..." type="email">
          <MdMail size={35} />
        </Input>
        <Input placeholder="Senha..." type="password">
          <MdLock size={35} />
        </Input>
        <div className="mt-4 bg-secondary rounded-lg hover:bg-[#002437] active:bg-[#001723] ease-in duration-150">
          <Button />
        </div>
      </div>
    </Container>
  );
}
