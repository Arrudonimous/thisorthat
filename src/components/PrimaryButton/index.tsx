import { BsTriangleFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface PrimaryButtonProps{
  title: string;
}

export default function PrimaryButton({ title }:PrimaryButtonProps) {
  const navigate = useNavigate();
  function handleNavigate() {
    return navigate('/login/admin');
  }

  return (
    <button
      type="submit"
      className="flex text-3xl p-2 pr-4 pl-8 bg-main items-center gap-6 text-text rounded-full"
      onClick={handleNavigate}
    >
      <h1>{title}</h1>
      <BsTriangleFill className="rotate-90" size={25} />
    </button>
  );
}
