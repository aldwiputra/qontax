import { Inter } from 'next/font/google';
import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const session = useSession();

  useEffect(() => {
    console.log(session);
  });

  return (
    <div className={` min-h-screen flex justify-center items-center ${inter.className} `}>
      <div className='text-center'>
        <h1>Home</h1>
        {session.status === 'authenticated' && (
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
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
    </div>
  );
}
