import { useLoaderData, useParams } from "react-router-dom";


const Book = () => {

    const jobs = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id)
    const job = jobs.find(job => job.id === idInt)
    console.log(job);

    return (
        <div className="flex justify-between mx-[135px] my-[80px] ">
            <div className="w-[48%] h-auto bg-base-300 p-10 rounded-lg  items-center">
                <img className="w-[50%]" src={job.image} alt="" />
            </div>
            <div className="w-[48%] space-y-4">
                <h2 className="text-4xl font-bold">{job.bookName}</h2>
                <p className="text-xl font-medium">By{job.author}</p>
                <hr />
                <p>{job.category}</p>
                <hr />
                <p>
                    <span className="text-2xl  font-bold"> Review: </span>
                    {job.review}
                </p>
                <div className="flex space-x-10">
                    <h2 className="font-bold">Tags:</h2>
                    <h2 className="bg-green-200 p-1 rounded-sm">Young Adult</h2>
                    <h2 className="bg-green-200 p-1 rounded-sm">Identity</h2>
                </div>
                <hr />
                <p className="gap-40 flex ">
                    number of pages <span className="font-bold">{job.totalPages}</span>
                </p>
                <p className="gap-56 flex">
                    publisher <span className="font-bold">{job.publisher}</span>
                </p>
                <p className="gap-40 flex">
                    year of publishing <span className="font-bold">{job.yearOfPublishing}</span>
                </p>
                <p className="gap-64 flex">
                    rating <span className="font-bold">{job.rating}</span>
                </p>
                <div className=" flex gap-5">
                    <button className=" border h-10 w-[150px] rounded-lg">read</button>
                    <button className="bg-[#59C6D2] border h-10 w-[150px] rounded-lg">
                        Wishlist
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Book;