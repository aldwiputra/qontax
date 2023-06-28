import Layout from '@/components/Layout';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'] });

function NewContact() {
  return (
    <>
      <Head>
        <title>Create Contact | Qontax</title>
      </Head>
      <Layout>
        <section className={`${inter.className} py-8`}>
          <div className='relative max-w-screen-xl mx-auto px-8 py-6 '>
            <div className='max-w-lg mx-auto space-y-10'>
              <div className='w-fit text-gray-400 flex gap-3 items-center'>
                <div className='w-8 h-8 md:w-10 md:h-10 p-2 md:p-2.5 rounded-lg border border-gray-300/10  bg-gray-800'>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15zm-6.75-10.5a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25v2.25a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V10.5z'
                      clipRule='evenodd'
                    />
                  </svg>
                </div>
                <h1 className={`${jakarta.className} text-2xl sm:text-4xl font-bold`}>Create Contact</h1>
              </div>

              <form autoComplete='off'>
                <div className='grid gap-4 sm:grid-cols-2 sm:gap-6'>
                  <div className='w-full'>
                    <label htmlFor='firstName' className='block mb-2 text-sm font-medium text-gray-300'>
                      Firstname
                    </label>
                    <input
                      type='text'
                      name='firstName'
                      id='firstName'
                      className='border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white '
                      placeholder='John'
                    />
                  </div>
                  <div className='w-full'>
                    <label htmlFor='lastName' className='block mb-2 text-sm font-medium  text-gray-300'>
                      Lastname
                    </label>
                    <input
                      type='text'
                      name='lastName'
                      id='lastName'
                      className=' border text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white '
                      placeholder='Doe'
                    />
                  </div>

                  <div className='sm:col-span-2'>
                    <label htmlFor='imageUrl' className='block mb-2 text-sm font-medium  text-gray-300'>
                      Image URL
                    </label>
                    <input
                      type='text'
                      name='imageUrl'
                      id='imageUrl'
                      className=' border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white '
                      placeholder='https://images.unsplash.com/profile'
                    />
                  </div>

                  <div className='full'>
                    <label
                      htmlFor='occupation'
                      className='block mb-2 text-sm font-medium  text-gray-300'>
                      Occupation
                    </label>
                    <input
                      type='text'
                      name='occupation'
                      id='occupation'
                      className=' border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white '
                      placeholder='Web Developer'
                    />
                  </div>

                  <div className='full'>
                    <label htmlFor='twitter' className='block mb-2 text-sm font-medium  text-gray-300'>
                      Twitter
                    </label>
                    <input
                      type='text'
                      name='twitter'
                      id='twitter'
                      className=' border  text-sm rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 bg-gray-800 border-gray-600 placeholder-gray-400 text-white '
                      placeholder='johndoe'
                    />
                  </div>

                  <div className='sm:col-span-2'>
                    <label htmlFor='bio' className='block mb-2 text-sm font-medium  text-gray-300'>
                      Bio
                    </label>
                    <textarea
                      id='bio'
                      rows={4}
                      className='block p-2.5 w-full text-sm resize-none rounded-lg border sm:ring-blue-500 focus:outline-none focus:ring-2  focus:border-blue-500 bg-gray-800 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 '
                      placeholder='Your bio here'></textarea>
                  </div>
                </div>
                <button
                  type='submit'
                  className='inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-600  hover:bg-blue-800'>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default NewContact;
