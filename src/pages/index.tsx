import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import Head from 'next/head';
import Layout from '@/components/Layout';
import ContactCard from '@/components/ContactCard';
import Link from 'next/link';
import { prisma } from '@/libs/db';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const contacts = await prisma.contact.findMany();

  return {
    props: {
      data: contacts,
    },
  };
};

export type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  occupation: string;
  twitter: string;
  bio: string;
  imgUrl: string;
};

type HomeProps = {
  data: Contact[];
};

export default function Home({ data }: HomeProps) {
  const session = useSession();

  useEffect(() => {
    console.log(data);
  });

  return (
    <>
      <Head>
        <title>Home | Qontax</title>
      </Head>
      <Layout>
        <section className={`${inter.className} py-8`}>
          <div className='relative max-w-screen-xl mx-auto px-8 py-6 '>
            <div className='max-w-4xl mx-auto'>
              <div className=' text-gray-400 flex gap-3 items-center'>
                <div className='w-8 h-8 md:w-10 md:h-10 p-2 md:p-2.5 rounded-lg border border-gray-300/10  bg-gray-800'>
                  <svg
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 18'>
                    <path d='M9 1.334C7.06.594 1.646-.84.293.653a1.158 1.158 0 0 0-.293.77v13.973c0 .193.046.383.134.55.088.167.214.306.366.403a.932.932 0 0 0 .5.147c.176 0 .348-.05.5-.147 1.059-.32 6.265.851 7.5 1.65V1.334ZM19.707.653C18.353-.84 12.94.593 11 1.333V18c1.234-.799 6.436-1.968 7.5-1.65a.931.931 0 0 0 .5.147.931.931 0 0 0 .5-.148c.152-.096.279-.235.366-.403.088-.167.134-.357.134-.55V1.423a1.158 1.158 0 0 0-.293-.77Z' />
                  </svg>
                </div>
                <h1 className={`${jakarta.className} text-2xl sm:text-4xl font-bold`}>
                  Contact List
                </h1>
              </div>
              <ul className='mt-8 grid auto-fit gap-4 '>
                {data.map((contact) => {
                  return <ContactCard key={contact.id} data={contact} />;
                })}
                <Link
                  href='/contacts/new'
                  className='rounded-lg flex items-center justify-center border-2 py-16 border-dashed border-gray-400 text-gray-400 hover:bg-gray-400/10'>
                  <div className='flex flex-col gap-2 items-center'>
                    <div className=' border border-gray-400 font-medium rounded-full text-sm p-2.5 text-center inline-flex items-center'>
                      <svg
                        className='w-4 h-4 text-gray-800 dark:text-white'
                        aria-hidden='true'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 18 18'>
                        <path
                          stroke='currentColor'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='1'
                          d='M9 1v16M1 9h16'
                        />
                      </svg>
                      <span className='sr-only'>Icon description</span>
                    </div>
                    <span className='font-medium'>Create new contact</span>
                  </div>
                </Link>
              </ul>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
