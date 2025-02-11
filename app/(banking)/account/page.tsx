
import BankSignUpForm from "@/components/BankSignUpForm";
import UserDetails from "@/components/UserDetails";
import { getCurrentUser } from "@/lib/actions/user.actions";


async function page() {
  const currentUser = await getCurrentUser();


  return (
    <>
      {!currentUser.dwollaCustomerId ? (
        <BankSignUpForm userId={currentUser.$id as string}/>
      ): <UserDetails {...currentUser} />}
    </>
  )
}

export default page