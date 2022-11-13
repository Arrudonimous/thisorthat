import { useNavigate } from 'react-router-dom';

export default function Button({ route }: { route: string}) {
  const navigate = useNavigate();
  function handleNavigate() {
    return navigate(route);
  }

  return (
    <button
      type="submit"
      className="font-bold py-3 w-full text-lg"
      onClick={handleNavigate}
    >
      Entrar

    </button>
  );
}
