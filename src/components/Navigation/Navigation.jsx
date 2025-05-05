import * as Avatar from '@radix-ui/react-avatar';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LogOut, User, Briefcase } from 'lucide-react';
import logo from '../../assets/logo.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img className='logo' src={logo} alt="Logo" />
        <div className="navbar-title">JobConnect</div>
      </div>

      <DropdownMenu.Root>
        <DropdownMenu.Trigger asChild>
          <Avatar.Root className="avatar-root cursor-pointer">
            <Avatar.Image
              src="https://github.com/shadcn.png"
              alt="Profile"
              className="avatar-img"
            />
            <Avatar.Fallback className="avatar-fallback">JC</Avatar.Fallback>
          </Avatar.Root>
        </DropdownMenu.Trigger>

        <DropdownMenu.Portal>
          <DropdownMenu.Content className="dropdown-content" sideOffset={5} align="end">
            <DropdownMenu.Item className="dropdown-item">
              <User size={16} style={{ marginRight: '8px' }} />
              Profile
            </DropdownMenu.Item>
            <DropdownMenu.Item className="dropdown-item">
              <Briefcase size={16} style={{ marginRight: '8px' }} />
              My Jobs
            </DropdownMenu.Item>
            <DropdownMenu.Separator className="dropdown-separator" />
            <DropdownMenu.Item className="dropdown-item">
              <LogOut size={16} style={{ marginRight: '8px' }} />
              Logout
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Portal>

      </DropdownMenu.Root>
    </nav>
  );
}
