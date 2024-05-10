import Link from "next/link";
import ControlThemeButton from "./themeController";

export default function Navbar() {
  return (
    <div className="navbar bg-navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="/">Homepage</Link>
            </li>
            <li>
              <Link href="/userpages">User Pages</Link>
            </li>
            <li style={{color: "red"}}>
              <Link href="/logout">Logout</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <Link href="/" className=" text-xl">Bloggie</Link>
      </div>
      <div className="navbar-end">
      <ControlThemeButton/>
      </div>
    </div>
  );
}
