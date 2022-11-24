import { IoReturnUpBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

export default function BackButton({ backPath }: { backPath: string }) {
  const navigate = useNavigate();

  return (
    <button type="button" onClick={() => navigate(backPath)}>
      <IoReturnUpBack size={30} color="black" />
    </button>
  );
}
