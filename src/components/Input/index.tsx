import { ReactNode } from 'react';

interface InputProps{
  placeholder: string;
  children: ReactNode;
}

export default function Input({ placeholder, children }: InputProps) {
  return (
    <div className="bg-[#D9D9D9] text-secondary flex flex-row gap-3 px-3 py-2 items-center rounded-lg drop-shadow-3xl">
      {children}
      <input type="text" placeholder={placeholder} className="w-full bg-transparent text-secondary font-bold text-lg outline-0 placeholder:text-secondary placeholder:opacity-80" />
    </div>
  );
}
