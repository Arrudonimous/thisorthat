import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { motion as m } from 'framer-motion';

import jwtDecode from 'jwt-decode';
import Container from '../../components/Container/Index';
import HomeMemberService from './services';
import { EnterTransition } from '../../styles/EnterTransition';

export default function HomeMember() {
  const [name, setName] = useState('');
  const token = localStorage.getItem('token');

  if (!token) {
    toast.error('Token não encontrado');
  }

  useEffect(() => {
    (async () => {
      const userDecoded:{id: string} = await jwtDecode(String(token));
      const { user } = await HomeMemberService.getName(Number(userDecoded.id));
      setName(user.name);
    })();
  }, []);

  return (
    <m.div
      className="w-full h-full"
      {...EnterTransition}
    >
      <Container title={`Bem vindo(a), ${name}`} backPath="/">
        <div className=" flex flex-row mt-6 rounded-lg px-6 py-4 text-text">
          <div className="w-full px-16 py-4 rounded-lg mt-8 flex flex-col items-center text-lg font-bold gap-2">
            <a href="/questions" className="bg-light w-full items-center justify-center flex py-3 rounded-lg">
              Jogar
            </a>
            Ou...
            <a href="/send/questions" className="bg-light w-full items-center justify-center flex py-3 rounded-lg">
              Perguntar
            </a>
          </div>
        </div>
      </Container>
    </m.div>

  );
}
