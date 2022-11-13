import { BsTriangleFill } from 'react-icons/bs';

interface SecondaryButtonProps{
  title: string;
}

export default function SecondaryButton({ title }:SecondaryButtonProps) {
  return (
    <button
      type="submit"
      className="flex text-3xl p-2 pr-4 pl-8 bg-secondary items-center gap-6 text-text rounded-full hover:bg-[#002437] active:bg-[#001723] ease-in duration-150"
    >
      <h1>{title}</h1>
      <BsTriangleFill className="rotate-90" size={25} />
    </button>
  );
}
