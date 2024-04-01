import { FaEye } from "react-icons/fa";
const News = ({news}) => {
    const {name, author_image,author_name,image,date,description,views,ratings} = news;
    return (
        <div>
            <div
                className="flex border-2 flex-col w-full h-full p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
                <div className="flex justify-between items-center bg-[#F3F3F3] p-2">
                    <div className="flex space-x-4">
                        <img
                            alt=""
                            src={author_image}
                            className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"/>
                        <div className="flex flex-col space-y-1">
                            <a rel="noopener noreferrer" href="#" className="text-sm font-semibold">{author_name}</a>
                            <span className="text-xs dark:text-gray-600">{date}</span>
                        </div>
                    </div>
                    <div className="space-x-2">
                        <button aria-label="Share this post" type="button" className="p-2 text-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current dark:text-violet-600">
                                <path
                                    d="M404,344a75.9,75.9,0,0,0-60.208,29.7L179.869,280.664a75.693,75.693,0,0,0,0-49.328L343.792,138.3a75.937,75.937,0,1,0-13.776-28.976L163.3,203.946a76,76,0,1,0,0,104.108l166.717,94.623A75.991,75.991,0,1,0,404,344Zm0-296a44,44,0,1,1-44,44A44.049,44.049,0,0,1,404,48ZM108,300a44,44,0,1,1,44-44A44.049,44.049,0,0,1,108,300ZM404,464a44,44,0,1,1,44-44A44.049,44.049,0,0,1,404,464Z"></path>
                            </svg>
                        </button>
                        <button aria-label="Bookmark this post" type="button" className="p-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current dark:text-violet-600">
                                <path
                                    d="M424,496H388.75L256.008,381.19,123.467,496H88V16H424ZM120,48V456.667l135.992-117.8L392,456.5V48Z"></path>
                            </svg>
                        </button>
                    </div>
                    
                </div>
                <div>
                    <img
                        src={image}
                        alt=""
                        className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"/>
                    <h2 className="mb-1 text-xl font-semibold">{name}</h2>
                    <p className="text-sm dark:text-gray-600">{description}</p>
                    <button className="text-[#FF8C47]">Read more</button>
                </div>
                <div className="flex flex-wrap justify-between">
                    <div className="rating rating-md gap-2">
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" checked />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <input type="radio" name="rating-7" className="mask mask-star-2 bg-orange-400" />
                        <div>
                            {ratings}
                        </div>
                    </div>
                    <div className="text-sm dark:text-gray-600">
                        <button type="button" className="flex items-center p-1 space-x-1.5">
                            <FaEye></FaEye>
                            <span>{views}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;