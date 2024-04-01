const Register = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content flex-col">
                <div className="text-center">
                    <h1 className="text-3xl lg:text-4xl font-semibold text-[#403F3F]">Register your account</h1>
                </div>
                <hr />
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form className="card-body">
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
                                className="input input-bordered"
                                required="required"/>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
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