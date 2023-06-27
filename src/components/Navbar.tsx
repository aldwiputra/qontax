import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

function Navbar() {
  return (
    <nav className={`${inter.className} border-gray-200 bg-gray-950 border-b border-b-gray-800/75`}>
      <div className='max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4 py-6 '>
        <a href='https://flowbite.com/' className='flex items-center'>
          <svg className='w-10' viewBox='0 0 249 211' fill='none' xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M195.721 141.263C204.56 119.53 205.215 93.7558 198.261 71.3488C191.306 48.9417 176.797 29.6392 157.206 16.7303C137.615 3.82145 114.154 -1.8952 90.8211 0.554449C67.4878 3.0041 45.7257 13.4685 29.2428 30.1646C12.76 46.8607 2.57619 68.7555 0.426663 92.1184C-1.72286 115.481 4.29487 138.867 17.4545 158.29C30.6142 177.714 50.1015 191.973 72.5961 198.639C95.0908 205.305 119.201 203.965 140.818 194.848L125.014 157.375C112.066 162.836 97.6248 163.638 84.1515 159.646C70.6783 155.653 59.0062 147.112 51.1242 135.478C43.2421 123.845 39.6378 109.838 40.9253 95.8445C42.2127 81.8512 48.3124 68.7372 58.1849 58.737C68.0574 48.7367 81.0919 42.469 95.0675 41.0018C109.043 39.5346 123.095 42.9586 134.829 50.6904C146.563 58.4223 155.254 69.9836 159.419 83.4044C163.585 96.8253 159.114 123.606 153.82 136.623C153.82 136.623 161.217 135.264 174.02 136.077C182.619 136.623 195.721 141.263 195.721 141.263Z'
              fill='#CA8A04'
            />
            <path
              d='M249 200.092C236.674 179.356 217.359 163.693 194.523 155.916C171.688 148.139 146.828 148.756 124.408 157.658L139.415 195.457C152.844 190.126 166.923 187.107 177.432 189.034C187.942 190.96 194.493 193.811 199.27 210.598L249 200.092Z'
              fill='#CA8A04'
            />
          </svg>
        </a>
        <form>
          <label
            htmlFor='default-search'
            className='mb-2 text-sm font-medium text-gray-900 sr-only text-white'>
            Search
          </label>
          <div className='relative'>
            <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
              <svg
                aria-hidden='true'
                className='w-5 h-5 text-gray-500 text-gray-400'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'></path>
              </svg>
            </div>
            <input
              type='search'
              id='default-search'
              className='block w-full p-3 pl-10 text-sm lg:min-w-[20rem] border rounded-lg  outline-none bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
              placeholder='Search'
              required
            />
            {/* <button
              type='submit'
              className='text-white absolute right-2 top-1/2 -translate-y-1/2  focus:ring-4 focus:outline-none font-medium rounded-lg text-xs px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800'>
              Search
            </button> */}
          </div>
        </form>
        <div className='flex md:order-2'>
          <Link
            href='/login'
            className='text-white focus:ring-2 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-700 hover:bg-blue-800 focus:ring-blue-500'>
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
