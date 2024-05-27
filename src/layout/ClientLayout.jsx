import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';

const ClientLayout = () => {
  return (
    <div>
      {/* <h1>this is navbar....</h1> */}
      <Navbar />
      <Outlet />
    </div>
  );
};

export default ClientLayout;
