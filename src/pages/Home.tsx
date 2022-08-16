import { Toaster } from 'react-hot-toast';
import { CoffeesList } from '../components/CoffeesList';
import { Intro } from '../components/Intro';

export function Home() {
  return (
    <>
      <Toaster />
      <Intro />
      <CoffeesList />
    </>
  );
}
