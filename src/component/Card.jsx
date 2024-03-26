/* eslint-disable react/prop-types */

import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

const Card = ({ job }) => {

    // console.log(job);

    return (
        <div>
            <Link
                to={job && `/books/${job.id}`} className="card  bg-base-100  shadow-xl ">
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
                        <div className="flex text-xl justify-between">
                            <p>{job?.category}</p>
                            <p className="flex items-center gap-2">
                                <span>{job?.rating}</span>
                                <CiStar />
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default Card;