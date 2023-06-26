import { Inter } from 'next/font/google';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  });

  return (
    <div className={` min-h-screen flex justify-center items-center ${inter.className} `}>
      {session.status === 'unauthenticated' && (
        <button
          onClick={() => signIn('github')}
          className='bg-blue-700 px-6 py-2 rounded-md hover:bg-blue-700/90'>
          Sign In
        </button>
      )}
      {session.status === 'authenticated' && (
        <button
          onClick={() => signOut({ redirect: false })}
          className='bg-red-700 px-6 py-2 rounded-md hover:bg-red-700/90'>
          Sign Out
        </button>
      )}
      {session.status === 'loading' && (
        <button disabled={true} className='bg--700 px-6 py-2 rounded-md bg-gray-800'>
          Loading...
        </button>
      )}
    </div>
  );
}
