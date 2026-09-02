'use client';

import { useReservation } from '@/contexts/reservation/ReservationContext';
import { DayPicker } from '@daypicker/react';
import '@daypicker/react/style.css';
import { isWithinInterval } from 'date-fns';

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some(date =>
      isWithinInterval(date, { start: range.from, end: range.to }),
    )
  );
}

export default function DateSelector({ settings, bookedDates, cabin }) {
  const { range, setRange, resetRange } = useReservation();

  // CHANGE
  const regularPrice = 23;
  const discount = 23;
  const numNights = 23;
  const cabinPrice = 23;

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  return (
    <div className='flex flex-col justify-between'>
      <DayPicker
        className='place-self-center p-6'
        mode='range'
        selected={range}
        onSelect={setRange}
        min={minBookingLength}
        max={maxBookingLength}
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 5, 11, 31)}
        captionLayout='dropdown'
        numberOfMonths={1}
        excludeDisabled
        disabled={{ before: new Date() }}
      />

      <div className='flex h-[72px] items-center justify-between bg-accent-500 px-8 text-primary-800'>
        <div className='flex items-baseline gap-6'>
          <p className='flex items-baseline gap-2'>
            {discount > 0 ? (
              <>
                <span className='text-2xl'>${regularPrice - discount}</span>
                <span className='font-semibold text-primary-700 line-through'>
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className='text-2xl'>${regularPrice}</span>
            )}
            <span className=''>/night</span>
          </p>
          {numNights ? (
            <>
              <p className='bg-accent-600 px-3 py-2 text-2xl'>
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className='text-lg font-bold uppercase'>Total</span>{' '}
                <span className='text-2xl font-semibold'>${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>

        {range.from || range.to ? (
          <button
            className='border border-primary-800 px-4 py-2 text-sm font-semibold'
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
