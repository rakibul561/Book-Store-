import { Link, NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <Link
                            to='/'
                            className="border rounded-lg border-[#23BE0A]">
                            Home
                        </Link>

                        <Link
                            to='/link'
                            className="font-bold"
                        >
                            Linksted Books
                        </Link>

                        <Link
                            to='/bookmarks'
                            className="font-bold"

                        >
                            Pages to Read</Link>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">Book Vibe</a>
            </div>
            <div className="navbar-center hidden  lg:flex">
                <ul className="menu menu-horizontal space-x-4 font-semibold px-1">
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold p-2 rounded-lg ' : 'font-bold'
                        }
                    >
                        Home
                    </NavLink>

                    <NavLink
                        to='/books'
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold p-2 rounded-lg ' : 'font-bold'
                        }
                    >
                        Linksted Books
                    </NavLink>

                    <NavLink
                        to='/bookmarks'
                        className={({ isActive }) =>
                            isActive ? 'text-[#23BE0A] border border-[#23BE0A] font-bold p-2 rounded-lg ' : 'font-bold'
                        }
                    >
                        Pages to Read
                    </NavLink>


                </ul>
            </div>
            <div className="navbar-end gap-4">
                <button className="btn bg-[#23BE0A] text-white">Sing In</button>
                <button className="btn btn-info text-white">Sing Up</button>
            </div>
        </div>
    );
};

export default Nav;