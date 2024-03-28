/* eslint-disable react/prop-types */
// import { Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars

import { Link } from "react-router-dom";

// import { CiLocationOn } from "react-icons/ci";
const CardItem = ({ job }) => {
    // console.log(job);


    return (
        <div className="flex gap-28 bg-base-200 p-8 rounded-2xl  ">
            <div>
                <img className="w-[100px] mt-8 ml-8" src={job.image} alt="" />
            </div>
            <div className="space-y-4 ">
                <h2 className="text-2xl font-bold"> {job.bookName} </h2>
                <p className="text-xl ">By: {job.author} </p>
                <div className="flex items-center gap-8">
                    <div className="font-bold space-x-4">
                        Tag:
                        {job?.tags.map((b, index) => (
                            <button
                                key={index}
                                className="border rounded-2xl px-4 bg-gray-200 text-green-500 font-bold"
                            >
                                #{b}
                            </button>
                        ))}
                    </div>
                    <div className="text-sm font-bold">
                        <p> Year of Publishing: {job.yearOfPublishing} </p>
                    </div>
                </div>

                <div className="flex gap-8">
                    <p>Publisher: {job.publisher} </p>
                    <p>Page: {job.totalPages} </p>
                </div>

                <hr />
                <div className="space-x-4 ">
                    <button className="btn text-[#328EFF] bg-[#b1c6e1] rounded-full"> Category: {job.category} </button>
                    <button className="btn text-[#FFAC33] bg-[#f2d2a6] rounded-full">Rating: {job.rating} </button>
                    <Link  to={job && `/link/${job.id}`} className="btn text-white bg-[#23BE0A] rounded-full">View Details </Link>

                </div>
            </div>
        </div>
    );
};

export default CardItem;