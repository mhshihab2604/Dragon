import { useEffect, useState } from "react";
import News from './News';

const Newses = () => {
    const [newses, setNewses] = useState([]);

    useEffect(() => {
        fetch("card.json")
            .then(res => res.json())
            .then(data => setNewses(data));
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10 mx-2">
                {newses.map(news => <News key={news.news_id} news={news}></News>)}
            </div>
        </div>
    );
};

export default Newses;