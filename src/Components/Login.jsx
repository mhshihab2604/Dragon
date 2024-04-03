import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider";

const Login = () => {
    const {loginUser} = useContext(AuthContext) 
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        loginUser(email, password)
    }
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-[#403F3F]">Login your account</h1>
                </div>
                <hr/>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                className="input input-bordered"
                                required="required"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Password</span>
                            </label>
                            <input
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="input input-bordered"
                                required="required"/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn text-xl font-semibold text-white bg-[#403F3F]">Login</button>
                        </div>
                        <div>
                            <h1 className="font-semibold">Do not Have An Account ? <Link to="/register" className="text-[#F75B5F]">Register</Link> </h1>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default Login;