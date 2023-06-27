import { Contact } from '@/pages';
import Image from 'next/image';
import Link from 'next/link';

type ContactProps = {
  data: Contact;
};

function ContactCard({ data }: ContactProps) {
  return (
    <li>
      <Link
        href={`/contacts/${data.id}`}
        className='block w-fit min-w-[15rem] text-center rounded-lg px-4 py-6 border border-gray-700 shadow bg-slate-800 hover:bg-gray-700 hover-border-gray-600'>
        <div className='space-y-2'>
          <div className='mx-auto relative aspect-square max-w-[4rem]'>
            <img
              className='relative z-10 rounded-full w-full object-cover object-top h-full'
              src={data.imgUrl}
              alt={`Photo of ${data.firstName}`}
            />

            <svg
              className='absolute inset-0 scale-125 animate-pulse z-0 w-full h-full text-gray-700'
              aria-hidden='true'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fill-rule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clip-rule='evenodd'></path>
            </svg>
          </div>
          <h4>{`${data.firstName} ${data.lastName}`}</h4>
        </div>
      </Link>
    </li>
  );
}

export default ContactCard;
