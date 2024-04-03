import Newses from "./Newses";

import Header from "./Header";
import Latex from "./Latex";
import RightSiteNavbar from "./RightSiteNavbar";
import LeftSiteNavbar from "./LeftSiteNavbar";
const Home = () => {
    return (
        <div>
            <Header></Header>
            <Latex></Latex>
            <div className="grid grid-cols-1 lg:grid-cols-3 mt-10 gap-6">
                <div>
                    <LeftSiteNavbar></LeftSiteNavbar>
                </div>
                <div>
                    <Newses></Newses>
                </div>
                <div>
                    <RightSiteNavbar></RightSiteNavbar>
                </div>
            </div>
        </div>
    );
};

export default Home;