import Nome from '../../assets/nome.svg';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';

export default function Home() {
  return (
    <div className="flex mx-auto items-center justify-center flex-col pt-[11.25rem]">
      <img src={Nome} alt="" />
      <div className="flex flex-row gap-10 mt-11">
        <PrimaryButton title="Admin" />
        <SecondaryButton title="Player" />
      </div>
    </div>
  );
}
