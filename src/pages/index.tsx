import { Inter } from 'next/font/google';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import { authOptions } from './api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import Head from 'next/head';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

// export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   if (!session) {
//     return {
//       redirect: {
//         permanent: false,
//         destination: 'http://localhost:3000/login',
//       },
//     };
//   }

//   return {
//     props: {
//       some: 'hoyeah',
//     },
//   };
// };

export default function Home() {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  });

  return (
    <>
      <Head>
        <title>Home | Qontax</title>
      </Head>
      <Layout>
        <section className={`flex justify-center items-center ${inter.className} `}>
          <div className='text-center'>
            <h1>Home</h1>
          </div>
        </section>
      </Layout>
    </>
  );
}
