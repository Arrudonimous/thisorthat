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
}

export const InputContext = createContext({} as DataTypes);

export default function InputProvider({ children }: InputProviderProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const value = useMemo(() => ({
    email, password, setEmail, setPassword,
  }), [email, password]);

  return (
    <InputContext.Provider value={value}>
      {children}
    </InputContext.Provider>
  );
}
