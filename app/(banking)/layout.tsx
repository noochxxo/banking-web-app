import Sidebar from '@/components/Sidebar';
import TopBar from '@/components/TopBar';
import { getCurrentUser } from '@/lib/actions/user.actions';
import { redirect } from 'next/navigation';

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const currentUser = await getCurrentUser();

  if (!currentUser) return redirect('/sign-in');

  return (
    <main className='flex h-screen w-full'>
      <Sidebar />

      <div className='flex size-full flex-col'>
        <div className='dashboard-layout'>
          <div>mobile navigation</div>
        </div>
        <TopBar />
        {children}
      </div>
    </main>
  );
}
