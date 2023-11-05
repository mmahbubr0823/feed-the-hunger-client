import toast from "react-hot-toast";
import useAuth from "../../Hooks/useAuth/useAuth";
import { Link, NavLink } from "react-router-dom";
import { CgProfile } from 'react-icons/cg';


const Navbar = () => {
    const { user, logOut } = useAuth();

    const handleLogOut = () => {
        logOut()
            .then(result => {
                toast.success('User successfully logged out')

            })
            .catch(err => {
                toast.error('Something went wrong')
            })
    }

    const links = <>

        <li className="lg:mr-0"><NavLink to="/">Home</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/addedProducts">Available Foods</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/myCart">Add Food</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/myCart">Manage Foods</NavLink></li>
        <li className="lg:mr-0"><NavLink to="/myCart">My Food Request</NavLink></li>
        <li className="lg:mr-0 mb-2 lg:mb-0"><NavLink to="/registration">Register</NavLink></li>
        {
            user ?
                <div>
                    <button onClick={handleLogOut} className="px-2 py-1 rounded-md lg:bg-[#f56d6d]">Log out</button>
                </div>
                :
                <div>
                    <Link className="px-2 py-1 rounded-md lg:bg-[#f56d6d]" to="/login">Login</Link>
                </div>
        }
    </>
    return (
        <div>
            <div className="navbar lg:flex justify-between items-center bg-base-100 my-8">
                <div className="lg:navbar-start block">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <a className=" normal-case lg:text-xl xl:text-4xl font-semibold">Feed The <span className="text-[#fa4a4a]">Hunger</span></a>
                </div>
                <div className="flex items-center lg:navbar-center">
                    <div className="mr-">
                        <ul className="menu hidden lg:flex justify-between items-center menu-horizontal px-1">
                            {
                                links
                            }


                        </ul>
                    </div>
                    {
                        user &&
                            <div className="">
                                <div className="md:flex items-center gap-5">

                                    <div className="">
                                        <h1 className="hidden lg:block">{user.displayName}</h1>
                                        <img className="w-[40px] rounded-full ml-10 mb-3" src={user.photoURL} alt="" />
                                    </div>
                                </div>
                            </div>
                            
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;