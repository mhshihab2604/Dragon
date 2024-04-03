import { useContext, useState } from "react";
import { AuthContext } from "./AuthProvider";

const Register = () => {
    const {registerUser} = useContext(AuthContext)
    const [error, setError] = useState("")
    const handleRegister = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        if(password.length < 6 ){
            setError("Password must be 6 characters")
            return
        }
        if(password !== confirmPassword){
            setError("Password didn't match")
            return
        }
        if(!/\d{2,}$/.test(password)){
            setError("Password must end with at least 2 number")
            return
        }
        setError("")
        console.log(name, email, password,confirmPassword);
        registerUser(email, password)
    }
    return (
         <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-[#403F3F]">Register your account</h1>
                </div>
                <hr />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Name</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                className="input input-bordered"
                                required="required"/>
                        </div>
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
                                name="password"
                                placeholder="Password"
                                className="input input-bordered"
                                required="required"/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-xl font-semibold text-[#403F3F]">Confirm Password</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="confirmPassword"
                                className="input input-bordered"
                                required="required"/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            error && <small className="text-red-500">{error}</small>
                        }
                        <div className="form-control mt-6">
                            <button className="btn text-xl font-semibold text-white bg-[#403F3F]">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        
        

    );
};

export default Register;