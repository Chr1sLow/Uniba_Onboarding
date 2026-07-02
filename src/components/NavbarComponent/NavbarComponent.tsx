import type { FC } from 'react';
import { Logout, NavbarComponentWrapper } from './NavbarComponent.styled';
import { useAuthStore } from '../../store/auth/auth.store';
import { useNavigate } from 'react-router-dom';

interface NavbarComponentProps {}

const NavbarComponent: FC<NavbarComponentProps> = () => {
   const navigate = useNavigate();
   const authStore = useAuthStore();

   const handleLogout = async () => {
      await authStore.logout();
      navigate('/');
   }
   
   return (
      <NavbarComponentWrapper>
         <Logout onClick={handleLogout}>Logout</Logout>
      </NavbarComponentWrapper>
   );
};

export default NavbarComponent;
