import { ReactNode } from 'react';

import BackButton from '../BackButton';

import LargeName from '../../assets/LargeName.svg';

interface ContainerProps{
  title: string;
  children: ReactNode;
  backPath: string;
}

export default function Container({ title, children, backPath }: ContainerProps) {
  return (
    <div
      className="flex mx-auto items-center justify-center text-text flex-row h-full"
    >
      <div className="flex flex-row max-h-[30rem] h-full w-full max-w-4xl rounded-3xl overflow-hidden">
        <div className="w-1/3 bg-light flex items-center justify-between bg-gradient-container bg-cover flex-col p-5 ">
          <div className="flex w-full">
            <BackButton backPath={backPath} />
          </div>
          <div className="flex flex-1">
            <img src={LargeName} alt="" className="" />
          </div>
        </div>
        <div className="w-2/3 bg-secondary flex flex-col pt-14 items-center bg-gradient-container bg-cover">
          <h1 className="font-extrabold text-4xl">
            {title}
          </h1>
          <div className="w-full">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
