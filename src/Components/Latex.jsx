import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latex = () => {
    return (
        <div>
            <div className="flex justify-center gap-5 items-center bg-[#F3F3F3] p-2 mt-7">
                <button className="btn bg-[#D72050] text-white">Latest</button>
                <Marquee pauseOnHover={true} speed={100} className="cursor-pointer">
                   <Link to="/"><p className="font-semibold text-[#403F3F]">Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p></Link>
                </Marquee>
            </div>
        </div>
    );
};

export default Latex;