
import BankSignUpForm from "@/components/BankSignUpForm";
import UserDetails from "@/components/UserDetails";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";


async function page() {
  const currentUser = await getCurrentUser();
   if (!currentUser) return redirect('/sign-in');

  // Remove dwolla from customer, switching to stripe
  return (
    <>
    
      {!currentUser.dwollaCustomerId ? (
        <BankSignUpForm userId={currentUser.$id as string}/>
      ): <UserDetails {...currentUser} />}
    </>
  )
}

export default page