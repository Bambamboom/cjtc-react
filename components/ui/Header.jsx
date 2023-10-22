import Link from 'next/link'
import Image from 'next/image'
import { Button } from './button'
import {   Cloud,
  Boxes,
  Home,
  LogOut,
  Menu,
  Settings,
  User, } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Header() {
  return (
    <div className='fixed right-12 top-12'>
      <nav className='flex flex-col'>
      <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className='p-4 transition rounded-lg border-2 bg-lightgray hover:bg-white focus:translate-y-1 border-drkblue'><Menu className='text-drkblue' variant="outline"></Menu></button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="mr-2 mt-2 w-56">
        <DropdownMenuLabel className='text-lg'>Menu</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className='hover:underline underline-offset-4'>
            <Home className="mr-6 h-6 w-6"/>
            <Link href={'./Page'}>
              Home
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:underline underline-offset-4'>
            <Boxes className="mr-6 h-6 w-6" />
            <Link href={'./Picker'}>
              Skill Picker
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:underline underline-offset-4'>
            <Settings className="mr-6 h-6 w-6" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem className='hover:underline underline-offset-4'>
            <User className="mr-6 h-6 w-6" />
            <span>Profile</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='hover:underline underline-offset-4'>
          <LogOut className="mr-6 h-6 w-6" />
          <span>Log out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
      </nav>
    </div>
  )
}
