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
}

export const InputContext = createContext({} as DataTypes);

export default function InputProvider({ children }: InputProviderProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const value = useMemo(() => ({
    email, password, setEmail, setPassword, name, setName,
  }), [email, password]);

  return (
    <InputContext.Provider value={value}>
      {children}
    </InputContext.Provider>
  );
}
