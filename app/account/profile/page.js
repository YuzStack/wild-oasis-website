import SelectCountry from '@/components/account/profile/SelectCountry';
import UpdateProfileForm from '@/components/account/profile/UpdateProfileForm';

export const metadata = {
  title: 'Update Profile',
};

export default function Page() {
  // CHANGE
  const countryFlag =
    'https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg';
  const nationality = 'Nigeria';

  return (
    <div>
      <h2 className='mb-4 text-2xl font-semibold text-accent-400'>
        Update your guest profile
      </h2>

      <p className='mb-8 text-lg text-primary-200'>
        Providing the following information will make your check-in process
        faster and smoother. See you soon!
      </p>

      <UpdateProfileForm>
        <SelectCountry
          name='nationality'
          id='nationality'
          className='w-full rounded-sm bg-primary-200 px-5 py-3 text-primary-800 shadow-sm'
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
