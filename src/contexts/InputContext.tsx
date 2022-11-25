import {
  createContext, useMemo, useState, ReactNode,
} from 'react';

interface InputProviderProps{
  children: ReactNode;
}

interface DataTypes{
  email: string;
  setEmail: any;
  password: string;
  setPassword: any;
  name: string;
  setName: any;
  firstOption: string;
  setFirstOption: any;
  secondOption: string;
  setSecondOption: any;
}

export const InputContext = createContext({} as DataTypes);

export default function InputProvider({ children }: InputProviderProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [firstOption, setFirstOption] = useState('');
  const [secondOption, setSecondOption] = useState('');

  const value = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    name,
    setName,
    firstOption,
    setFirstOption,
    secondOption,
    setSecondOption,
  }), [email, password, name, firstOption, secondOption]);

  return (
    <InputContext.Provider value={value}>
      {children}
    </InputContext.Provider>
  );
}
