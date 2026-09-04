import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/about">About</NavLink> | 
      <NavLink to="/profile/john">Profile</NavLink>
    </nav>
  )
}

export default Navbar;
