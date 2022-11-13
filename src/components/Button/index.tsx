interface ButtonProps{
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button
      type="submit"
      className="font-bold py-3 w-full text-lg"
      // onClick={handleNavigate}
    >
      {title}
    </button>
  );
}
