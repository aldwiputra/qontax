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
        className='block w-full text-center rounded-lg px-8 py-6 border border-gray-700 shadow bg-gray-800 hover:bg-gray-750 shadow-custom hover:border-gray-500'>
        <div className='space-y-4'>
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
                fillRule='evenodd'
                d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z'
                clipRule='evenodd'></path>
            </svg>
          </div>
          <div className='flex flex-col gap-1'>
            <h4
              title={`${data.firstName} ${data.lastName}`}
              className='leading-tight whitespace-nowrap text-lg font-medium max-w-[80%] overflow-hidden mx-auto text-center overflow-ellipsis'>{`${data.firstName} ${data.lastName}`}</h4>
            <span className='text-sm text-slate-500  whitespace-nowrap max-w-[80%] overflow-hidden mx-auto text-center overflow-ellipsis'>
              {data.occupation}
            </span>
          </div>
          <div className='flex items-stretch mx-auto w-fit'>
            <div className='text-whitefocus:ring-4 focus:outline-none font-medium rounded-l-md text-sm p-2 text-center inline-flex items-center bg-blue-600 focus:ring-blue-800'>
              <svg
                className='w-4 h-4 text-gray-800 dark:text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 17'>
                <path
                  fillRule='evenodd'
                  d='M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='pointer-events-auto px-4 text-sm flex items-center rounded-r-lg bg-blue-900 text-blue-400 border-blue-600 hover:text-white hover:bg-blue-800'>
              <span>{data.twitter}</span>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}

export default ContactCard;
