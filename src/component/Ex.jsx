mport { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AllBooksData } from "../data/Data";

const BookDetails = () => {
    const [bookDetails, setBookDetails] = useState("");
    const { id } = useParams();
    const {
        author,
        bookName,
        category,
        img,
        rating,
        review,
        totalPages,
        publisher,
        yearOfPublishing,
    } = bookDetails;
    useEffect(() => {
        const filterData = AllBooksData?.find((book) => book?.bookId === id);
        setBookDetails(filterData);
    }, [id]);
    console.log(bookDetails);
    return (
        <div className="flex justify-between mx-[135px] my-[80px] ">
            <div className="w-[48%] h-auto bg-base-300 p-10 rounded-lg  items-center">
                <img className="w-[50%]" src={img} alt="" />
            </div>
            <div className="w-[48%] space-y-4">
                <h2 className="text-4xl font-extrabold">{bookName}</h2>
                <p className="text-xl font-medium">By{author}</p>
                <hr />
                <p>{category}</p>
                <hr />
                <p>
                    <span>Review:</span>
                    {review}
                </p>

                <hr />
                <p className="gap-40 flex">
                    number of pages <span>{totalPages}</span>
                </p>
                <p className="gap-56 flex">
                    publisher <span>{publisher}</span>
                </p>
                <p className="gap-40 flex">
                    year of publishing <span>{yearOfPublishing}</span>
                </p>
                <p className="gap-64 flex">
                    rating <span>{rating}</span>
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

export default BookDetails;