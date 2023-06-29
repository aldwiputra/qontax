import Layout from '@/components/Layout';
import TwitterHandle from '@/components/TwitterHandle';
import { prisma } from '@/libs/db';
import { Contact, User } from '@prisma/client';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { useSession } from 'next-auth/react';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { useState } from 'react';
import { useRouter } from 'next/router';

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

  return {
    props: {
      data: contact,
    },
  };
};

type ContactProps = {
  data: Contact;
};

function EditContact({ data }: ContactProps) {
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const session = useSession();
  const router = useRouter();

  async function deleteContact() {
    setLoadingSubmit(false);
    try {
      await axios.put(`/api/contacts/${data.id}`);

      setLoadingSubmit(false);
      router.push('/');
    } catch (err) {
      setLoadingSubmit(false);
      console.log(err);
    }
  }

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
                    <div className='flex mx-auto gap-2'>
                      <Link
                        href={`/contacts/${data.id}/edit`}
                        className='focus:ring-2 focus:outline-none font-medium rounded-md text-xs p-2 text-center inline-flex justify-center items-center text-emerald-600/75 bg-emerald-600/20 hover:bg-emerald-600/30 focus:ring-emerald-800'>
                        <svg
                          className='w-5 h-5'
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='currentColor'
                          viewBox='0 0 20 18'>
                          <path d='M12.687 14.408a3.01 3.01 0 0 1-1.533.821l-3.566.713a3 3 0 0 1-3.53-3.53l.713-3.566a3.01 3.01 0 0 1 .821-1.533L10.905 2H2.167A2.169 2.169 0 0 0 0 4.167v11.666A2.169 2.169 0 0 0 2.167 18h11.666A2.169 2.169 0 0 0 16 15.833V11.1l-3.313 3.308Zm5.53-9.065.546-.546a2.518 2.518 0 0 0 0-3.56 2.576 2.576 0 0 0-3.559 0l-.547.547 3.56 3.56Z' />
                          <path d='M13.243 3.2 7.359 9.081a.5.5 0 0 0-.136.256L6.51 12.9a.5.5 0 0 0 .59.59l3.566-.713a.5.5 0 0 0 .255-.136L16.8 6.757 13.243 3.2Z' />
                        </svg>
                      </Link>
                      <button
                        onClick={deleteContact}
                        className='focus:ring-2 focus:outline-none font-medium rounded-md text-xs p-2 text-center inline-flex justify-center items-center text-red-600/60 bg-red-600/20 hover:bg-red-600/30 focus:ring-red-900'>
                        {loadingSubmit ? (
                          <svg
                            aria-hidden='true'
                            role='status'
                            className='w-5 h-5 animate-spin text-gray-600'
                            viewBox='0 0 100 101'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'>
                            <path
                              d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                              fill='currentColor'
                            />
                            <path
                              className='fill-white'
                              d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                            />
                          </svg>
                        ) : (
                          <svg
                            className='w-5 h-5'
                            aria-hidden='true'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 18 20'>
                            <path
                              stroke='currentColor'
                              strokeLinecap='round'
                              strokeLinejoin='round'
                              strokeWidth={1.5}
                              d='M1 5h16M7 8v8m4-8v8M7 1h4a1 1 0 0 1 1 1v3H6V2a1 1 0 0 1 1-1ZM3 5h12v13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5Z'
                            />
                          </svg>
                        )}
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

export default EditContact;
