import { motion as m } from 'framer-motion';

import Nome from '../../assets/Nome.svg';
import PrimaryButton from '../../components/PrimaryButton';
import SecondaryButton from '../../components/SecondaryButton';
import { EnterTransition } from '../../styles/EnterTransition';

export default function Home() {
  return (
    <m.div
      className="flex mx-auto items-center justify-center flex-col pt-[11.25rem]"
      {...EnterTransition}
    >
      <img src={Nome} alt="" />
      <div className="flex flex-col md:flex-row gap-10 mt-11">
        <PrimaryButton title="Admin" />
        <SecondaryButton title="Player" />
      </div>
    </m.div>
  );
}
