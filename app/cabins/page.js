import CabinList from '@/components/cabins/CabinList';
import Filter from '@/components/Filter';
import Spinner from '@/components/Spinner';
import { Suspense } from 'react';

export const revalidate = 3_600; // This is no more effective since the page now depend on a query string, therefore the page will now be strictly dynamically rendered.

export const metadata = {
  title: 'Cabins',
};

export default function CabinsPage({ searchParams }) {
  const filter = searchParams?.capacity ?? 'all';

  return (
    <div>
      <h1 className='mb-5 text-4xl font-medium text-accent-400'>
        Our Luxury Cabins
      </h1>
      <p className='mb-10 text-lg text-primary-200'>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>

      <div class='mb-8 flex justify-end'>
        <Filter />
      </div>

      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </div>
  );
}
