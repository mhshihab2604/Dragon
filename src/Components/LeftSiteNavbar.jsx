import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSiteNavbar = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch("categories.json")
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    return (
        <div className="space-y-5">
           <h1 className="text-xl lg:ml-0 ml-4 font-semibold">All Categories</h1>
           {
            categories.map(category => <Link className="block ml-4 w-40 hover:bg-[#E7E7E7] p-2 rounded text-[#706F6F] hover:text-black" key={category.id}>{category.name}</Link>)
           }
        </div>
    );
};

export default LeftSiteNavbar;