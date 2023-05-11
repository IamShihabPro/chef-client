import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import {
  BoltIcon,
  Bars3BottomRightIcon,
  XMarkIcon,
} from '@heroicons/react/24/solid'
import { AuthContext } from '../../Providers/AuthProviders'

import Bae from '../../assets/Bae.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const {user, logOut} = useContext(AuthContext)



  const handleLogOut = ()=>{
    logOut()
    .then(()=>{

    })
    .catch(err=>{
      console.error(err)
    })
  }


  return (
    <div className='bg-gray-100 px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8'>
      <div className='relative flex items-center justify-between '>
        {/* Logo Section */}
        <Link to='/' className='inline-flex items-center'>

          <img className='w-14' src={Bae} alt="" />
          <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
            SaltBae
          </span>
        </Link>

        {/* Nav Items Section */}
        <ul className='items-center hidden space-x-8 lg:flex'>
          <li>
            <NavLink
              to='/'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/chefs'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Chefs
            </NavLink>
          </li>


          <li>
            <NavLink
              to='/blog'
              className={({ isActive }) => (isActive ? 'active' : 'default')}
            >
              Blogs
            </NavLink>
          </li>
          
        
          {
            user ? <> <span> <img className='w-10 rounded-full' src={user.photoURL} alt="" /> </span> <span>{user.email}</span>  <button onClick={handleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign out</button> </>  : 
            <NavLink
            to='/login'
            className={({ isActive }) => (isActive ? 'active' : 'default')}
          >
            Login
          </NavLink>
          }
       
        </ul>
        {/* Mobile Navbar Section */}
        <div className='lg:hidden'>
          {/* Dropdown Open Button */}
          <button
            aria-label='Open Menu'
            title='Open Menu'
            onClick={() => setIsMenuOpen(true)}
          >
            <Bars3BottomRightIcon className='w-5 text-gray-600' />
          </button>
          {isMenuOpen && (
            <div className='absolute top-0 left-0 w-full z-10'>
              <div className='p-5 bg-white border rounded shadow-sm'>
                {/* Logo & Button section */}
                <div className='flex items-center justify-between mb-4'>
                  <div>

                   

                    <Link to='/' className='inline-flex items-center'>

                      <img className='w-10' src={Bae} alt="" />
                      <span className='ml-2 text-xl font-bold tracking-wide text-gray-800'>
                        SaltBae
                      </span>
                    </Link>

                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className='w-5 text-gray-600' />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav>
                  <ul className='space-y-4'>
                    <li>
                      <Link to='/' className='default'>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to='/chefs'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Chefs
                      </Link>
                    </li>
                    
                    <li>
                      <Link
                        to='/blog'
                        className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                      >
                        Blogs
                      </Link>
                    </li>

                    {/* <li>
                      <Link
                        to='/register'
                        className={({ isActive }) => (isActive ? 'active' : 'default')}
                      >
                        Register
                      </Link>
                    </li> */}
                    {
                      user ? <><span>{user.email}</span>  <button onClick={handleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign out</button> </>  : 
                      <Link
                      to='/login'
                      className={({ isActive }) => (isActive ? 'active' : 'default')}
                    >
                      Login
                    </Link>
                    }


                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header