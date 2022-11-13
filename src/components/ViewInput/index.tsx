export default function ViewInput({ text }: {text: string}) {
  return (
    <div className="flex w-full bg-[#D9D9D9] text-secondary font-bold px-6 py-2 rounded-lg text-lg">
      {text}
    </div>
  );
}
