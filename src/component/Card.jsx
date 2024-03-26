/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const Card = ({ job }) => {

    console.log(job);

    return (
        <div>
            <Link
             to={job && `/book/${job.id}`} className="card  bg-base-100  shadow-xl ">
                <figure className="bg-base-300 p-8">
                    <img className="w-52 h-52" src={job?.image} />
                </figure>
                <div className="card-body">
                    <div className="flex justify-around">
                        {job?.tags.map((b, index) => (
                            <button
                                key={index}
                                className="border rounded-2xl px-4 bg-gray-200 text-green-500 font-bold"
                            >
                                #{b}
                            </button>
                        ))}
                    </div>
                    <h2 className="card-title">{job?.bookName}</h2>
                    <p className="border-b-2 py-2">{job?.author}</p>
                    <div>
                        <div className="flex justify-between">
                            <p>{job?.category}</p>
                            <p className="flex items-center gap-2">
                                <span>{job?.rating}</span>
                                {/* <FcRating className="text-2xl "></FcRating> */}
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;