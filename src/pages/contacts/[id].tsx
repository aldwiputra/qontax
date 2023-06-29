import Layout from '@/components/Layout';
import TwitterHandle from '@/components/TwitterHandle';
import { prisma } from '@/libs/db';
import { Contact, User } from '@prisma/client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useSession } from 'next-auth/react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const contact = await prisma.contact.findFirst({
    where: {
      id: params?.id as string,
    },
  });

  console.log(contact);
  return {
    props: {
      data: contact,
    },
  };
};

type ContactProps = {
  data: Contact;
};

function Contact({ data }: ContactProps) {
  const session = useSession();

  return (
    <>
      <Head>
        <title>Contact | Qontax</title>
      </Head>
      <Layout>
        <section className={`${inter.className} py-8`}>
          <div className='relative max-w-screen-xl mx-auto px-8 py-6 '>
            <div className='max-w-lg mx-auto space-y-10'>
              <div className='w-fit text-gray-400 flex gap-3 items-center'>
                <div className='w-8 h-8 md:w-10 md:h-10 p-2 md:p-2.5 rounded-lg border border-gray-300/10 bg-gray-800'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h1 className={`${jakarta.className} text-2xl sm:text-4xl font-bold`}>Contact</h1>
              </div>
              <div className='flex gap-8 items-start border border-gray-800 p-8 rounded-lg'>
                <div className='flex flex-col gap-6'>
                  <div className='relative aspect-square max-w-[6rem]'>
                    {
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        className='relative z-10 rounded-full outline outline-2 outline-offset-4 outline-blue-700 w-full object-cover object-center h-full'
                        src={data.imgUrl}
                        alt={`Photo of ${data.firstName}`}
                        onError={(e) => (e.currentTarget.src = '/avatar.svg')}
                      />
                    }
                  </div>

                  {session?.data?.user.id === data.userId && (
                    <div className='space-y-2'>
                      <Link
                        href={`/contacts/${data.id}/edit`}
                        className='text-white w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-xs py-2 text-center inline-flex justify-center items-center bg-emerald-600/75 hover:bg-emerald-800 focus:ring-emerald-800'>
                        <svg
                          className='w-3 h-3 mr-2 -ml-1'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 18'>
                          <path d='M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z' />
                          <path d='M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z' />
                        </svg>
                        Edit
                      </Link>
                      <button className='text-white w-full focus:ring-4 focus:outline-none font-medium rounded-lg text-xs py-2 text-center inline-flex justify-center items-center bg-red-700/60 hover:bg-red-800 focus:ring-red-900'>
                        <svg
                          className='w-3 h-3 mr-2 -ml-1'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 18 20'>
                          <path
                            stroke='currentColor'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            stroke-width='2'
                            d='M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z'
                          />
                        </svg>
                        Delete
                      </button>
                    </div>
                  )}
                </div>

                <div className='space-y-4'>
                  <div className='space-y-1.5'>
                    <h3 className='text-xl font-semibold leading-none'>
                      {data.firstName} {data.lastName}
                    </h3>
                    <p className=' text-gray-500'>{data.occupation}</p>
                  </div>
                  <TwitterHandle twitter={data.twitter} middle={false} />
                  <div>
                    <h6 className='font-medium text-lg mb-1'>Bio</h6>
                    <p className='text-sm text-gray-400'>{data.bio}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Contact;
