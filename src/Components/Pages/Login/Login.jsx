import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth/useAuth";
import toast from "react-hot-toast";
import SocialLogin from "./SocialLogin";


const Login = () => {
    const {logInUser} = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        // login user 
        logInUser(email, password)
        .then(result =>{
            toast.success('User successfully logged in');
           navigate(location?.state ? location.state : '/');
            
        })
        .catch(err =>{
            toast.error('Your credentials do not match');
        })

    }
    return (
        <div>
            <div className="hero max-h-screen bg-base-200 mt-10 rounded-xl">
                <div className="hero-content flex justify-between lg:gap-28">
                    <div className="">
                        <img className="rounded-md w-[600px] h-[650px]" src="https://i.ibb.co/GCTqbBM/20944201.jpg" alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <p className="font-bold">Please login</p>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input type="submit" className='btn bg-purple-400 p-2 rounded-lg' value ="Login" />
                            </div>
                        </form>
                        <SocialLogin></SocialLogin>
                        <p className="mb-6 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                            New in here?
                            <Link
                                className="font-medium text-pink-500 transition-colors hover:text-blue-700"
                                to="/registration"
                            >
                                Register Now
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;