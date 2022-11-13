import { BsTriangleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface SecondaryButtonProps{
  title: string;
}

export default function SecondaryButton({ title }:SecondaryButtonProps) {
  const navigate = useNavigate();
  function handleNavigate() {
    return navigate('/register/player');
  }

  return (
    <button
      type="submit"
      className="flex text-3xl p-2 pr-4 pl-8 bg-secondary items-center gap-6 text-text rounded-full hover:bg-[#002437] active:bg-[#001723] ease-in duration-150"
      onClick={handleNavigate}
    >
      <h1>{title}</h1>
      <BsTriangleFill className="rotate-90" size={25} />
    </button>
  );
}
