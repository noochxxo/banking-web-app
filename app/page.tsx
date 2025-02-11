import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { getCurrentUser } from "@/lib/actions/user.actions";
import { redirect } from "next/navigation";

export default async function Home() {
  const currentUser = await getCurrentUser();
  
    if (currentUser) return redirect('/dashboard');
  return (
    <div className="min-h-screen gradient-green-tb">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image
              src="/assets/logo/logo.png"
              alt="logo"
              width={400}
              height={100}
              className="object-contain"
            />
          </Link>

          <Link href="/sign-in" className="hidden md:block">
            <Button className="bg-candyGrapeFizz-600 hover:bg-candyGrapeFizz-500 text-salsifyGrass-300 hover:text-salsifyGrass-200 transition-all duration-300 transform hover:scale-105 font-semibold tracking-wider">
              Sign In
            </Button>
          </Link>
        </div>
      </nav>

      <main className="container mx-auto md:px-24 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-candyGrapeFizz-100 leading-tight">
              Banking Made
              <span className="block text-salsifyGrass-200 animate-bounce-slow">
                Simple & Fun
              </span>
            </h1>

            <p className="text-lg md:text-xl text-salsifyGrass-100 max-w-lg mx-auto lg:mx-0">
              Experience modern banking with Purple Bank. We make managing your
              money as easy as counting to three.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link href="/sign-up">
                <Button
                  size="lg"
                  className="bg-salsifyGrass-400 hover:bg-salsifyGrass-300 text-candyGrapeFizz-600 font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Open Account
                </Button>
              </Link>

              <Link href="/sign-in" className="md:hidden">
                <Button
                  size="lg"
                  className="text-salsifyGrass-200 bg-candyGrapeFizz-500 border border-salsifyGrass-200 hover:bg-candyGrapeFizz-400 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
          <Image
            src="/assets/signup.png"
            alt="Files"
            width={342}
            height={342}
            priority
            className="mx-auto transition-all hover:rotate-2 hover:scale-105"
          />
        </div>
      </main>
    </div>
  );
}
