import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useFclContext } from "@/context/FclContext";
import logo from "../../../public/images/logo.png";
import Image from "next/image";

const Navbar = () => {
  const { data: session } = useSession();
  const { connect, currentUser, logout } = useFclContext();

  const handleSignIn = () => {
    signIn();
  };

  const handleSignOut = () => {
    signOut();
  };

  return (
    <div className="navbar bg-base-100 fixed">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link className="btn btn-ghost text-xl" href="/prediction">
                Predictions
              </Link>
            </li>
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl hidden sm:inline-flex" href="/">
          <Image src={logo} alt="logo" width="50" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link className="btn btn-ghost text-xl" href="/prediction">
              Predictions
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {session ? (
          <>
            {currentUser?.addr ? (
              <button
                className="btn btn-outline btn-primary mr-3"
                onClick={logout}
              >
                {currentUser?.addr}
              </button>
            ) : (
              <button className="btn btn-outline btn-primary" onClick={connect}>
                Connect flow wallet
              </button>
            )}

            <button className="btn btn-ghost" onClick={handleSignOut}>
              Logout
            </button>
          </>
        ) : (
          <button className="btn btn-primary" onClick={handleSignIn}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
