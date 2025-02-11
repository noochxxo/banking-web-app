import React from 'react';
import Image from 'next/image';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='flex min-h-screen'>
      <section className='auth-section'>
        <div className='flex max-h-[800px] max-w-[430px] flex-col space-y-12'>
          
            <Image
            src='/assets/logo/logo.png'
            alt='logo'
            width={400}
            height={100}
            priority
            className='object-contain'
          />
          

          <div className='space-y-5 text-white'>
            <h1 className='text-[34px] leading-[42px] font-bold'>Manage your banking, your way</h1>
            <p className='text-[18px] leading-[24px] font-normal'>
              Quick transactions and an easy all in one place for your banks
            </p>
          </div>
          <Image
            src='/assets/signup.png'
            alt='Files'
            width={342}
            height={342}
            priority
            className='transition-all hover:rotate-2 hover:scale-105'
          />
        </div>
      </section>

      <section className='flex flex-1 flex-col items-center bg-white p-4 py-10 lg:justify-center lg:p-10 lg:py-0'>
        <div className='mb-16 lg:hidden'>
          <Image
            src='/assets/logo/logo.png'
            alt='logo'
            width={224}
            height={82}
            priority
            className='h-auto w-[200px] lg:w-[250px]'
          />
        </div>

          {children}
        
        
      </section>
    </div>
  );
};

export default Layout;