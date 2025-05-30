import { IoSearch } from "react-icons/io5";


export const NavBar = () => {
    return(
        <div className="relative w-full">
             <div className="navbar fixed bg-transparent backdrop-blur-md">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>

        {/* for mobile devices */}

      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Shop</a></li>
        {/* <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li> */}
        <li><a>Blog</a></li>
        <li><a>Hot Deal</a></li>
        
      </ul>
    </div>

        {/* for desktop devices */}

    <a className="btn btn-ghost text-xl">ShopCart</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Shop</a></li>

      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li> */}

      <li><a>Blog</a></li>
      <li><a>Hot Deal</a></li>
     
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn"><IoSearch /></a>
    <a className="btn">Login</a>
  </div>
</div>
        </div>
    )
}