import moment from 'moment';
import myImage from "../assets/name.png"
const Header = () => {
    return (
      <div>
        <div className="text-center space-y-3">
          <img className='mx-auto' src={myImage} alt="" />
          <p className="text-[#706F6F]">Journalism Without Fear or Favour</p>
          <p className="text-[#706F6F] font-medium text-lg">{moment().format("dddd, MMMM Do YYYY")}</p>
        </div>
      </div>
    );
};

export default Header;