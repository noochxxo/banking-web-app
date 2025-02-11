import { Button } from './ui/button';
import { Input } from './ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu';
import { LogOut, BellIcon } from 'lucide-react';
import { signOutUser } from '@/lib/actions/user.actions';

function TopBar() {
  return (
    <section className='topbar'>
      <div className='flex w-full max-w-sm items-center space-x-2'>
        <Input type='text' placeholder='Search' className='bg-white' />
        <Button
          type='submit'
          className='bg-salsifyGrass-500 hover:bg-salsifyGrass-700'
        >
          Search
        </Button>
      </div>
      
      <div className='flex justify-between w-24'>
        <div className='h-full w-full flex items-center'>
          <BellIcon className='text-white' />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar className='cursor-pointer'>
              <AvatarImage
                src='https://github.com/noochxxo.png'
                alt='@noochxxo'
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-56'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            
            <DropdownMenuItem>
              <LogOut />
              <span onClick={signOutUser}>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        
      </div>
    </section>
  );
}

export default TopBar;
