import { FaFacebook } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import qZone1 from "../assets/images/qZone1.png"
import qZone2 from "../assets/images/qZone2.png"
import qZone3 from "../assets/images/qZone3.png"
const RightSiteNavbar = () => {
    return (
        <div className="space-y-8 mx-5">
            <div className="space-y-4">
                <h1 className="text-xl font-semibold">Login With</h1>
                <button className="btn btn-wide border-2 border-blue-400"><FaGoogle></FaGoogle> Login with Google</button>
                <button className="btn btn-wide border-2 border-black"><FaGithub></FaGithub> Login with GitHub</button>
            </div>
            <div>
                <h1 className="text-xl font-semibold">Find Us On</h1>
                <div className='mt-5'>

                    <a className='flex items-center gap-2 border-2 rounded-t-lg p-4' href="https://www.facebook.com/mhshihab2604">
                        <FaFacebook></FaFacebook>
                        <span>Facebook</span>
                    </a>
                    <a className='flex items-center gap-2 border-x-2 p-4' href="https://www.facebook.com/mhshihab2604">
                        <FaTwitterSquare></FaTwitterSquare>
                        <span>Twitter</span>
                    </a>
                    <a className='flex items-center gap-2 border-2 rounded-b-lg p-4' href="https://www.facebook.com/mhshihab2604">
                        <FaInstagramSquare></FaInstagramSquare>
                        <span>Instagram</span>
                    </a>
                </div>
                
            </div>
            <div className="space-y-5">
                <h1 className="text-xl font-semibold">Q-Zone</h1>
                <img className="border-2 p-2 border-dashed w-72" src={qZone1} alt="" />
                <img className="border-2 p-2 border-dashed w-72" src={qZone2} alt="" />
                <img className="border-2 p-2 border-dashed w-72" src={qZone3} alt="" />
            </div>
            
        </div>
    );
};

export default RightSiteNavbar;