import { redirect } from 'next/navigation';
import BankSignUpForm from "@/components/BankSignUpForm";
import { getCurrentUser } from "@/lib/actions/user.actions";


async function page() {
  const currentUser = await getCurrentUser();
  if (!currentUser) return redirect('/sign-in');
  
  console.log(currentUser)
  if (!currentUser.dwollaCustomerId)  return redirect('/account');
  return (
    <>
      <BankSignUpForm userId={currentUser.$id as string}/>
    </>
  )
}

export default page