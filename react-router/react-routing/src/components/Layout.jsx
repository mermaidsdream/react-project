import { NavLink, Outlet } from 'react-router-dom';

const setActive = ({isActive}) => isActive ? 'active-link' : '';
const currentYear = new Date().getFullYear();

const Layout = () => {
  return (
    <>
      <header>
        <NavLink to='/' className={setActive}>Home</NavLink>
        <NavLink to='/about' className={setActive}>About</NavLink>
        <NavLink to='/posts' className={setActive}>Blog</NavLink>
      </header>
      
      <main className='container'>
         <Outlet />
      </main>
      
      <footer className='footer-container'>&copy; ReactRouter {currentYear}</footer>
    </>
  )
}

export {Layout};
