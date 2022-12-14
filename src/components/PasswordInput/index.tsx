import { ReactNode, useState, useContext } from 'react';
import { InputContext } from '../../contexts/InputContext';

interface PasswordInputProps{
  placeholder: string;
  children: ReactNode;
  type: string;
  text: string;
}

export default function PasswordInput({
  placeholder, children, type, text,
}: PasswordInputProps) {
  const [value, setValue] = useState('');
  const context = useContext(InputContext);

  if (text === 'email') {
    context.setEmail(value);
  }

  if (text === 'password') {
    context.setPassword(value);
  }

  if (text === 'name') {
    context.setName(value);
  }

  return (
    <div className="bg-[#D9D9D9] text-secondary flex flex-row gap-3 px-3 py-2 items-center rounded-lg drop-shadow-3xl">
      {children}
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent text-secondary font-bold text-lg outline-0 placeholder:text-secondary placeholder:opacity-80"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        id="passwordInput"
      />
    </div>
  );
}
