import { useEffect, useState } from "react";
import { getJobs } from "../component/Utilit";
import Card from "../component/Card";
import { Link, Outlet } from "react-router-dom";





const Book = () => {
    const [tabIndex, setTabIndex] = useState(0)
    // const [books, setBooks] = useState([])

    // useEffect(() => {
    //     const storedBooks = getJobs()
    //     setBooks(storedBooks)
    // }, [])


    return (
        <div>
            <div>
                <h1 className="text-center text-4xl font-bold bg-base-200 p-4 rounded-xl">Books</h1>
            </div>
            <div>
                <div className="flex items-center mt-14 -mx-4 overflow-x-auto overflow-y-hidden sm: flex-nowrap">
                    <Link
                        to=''
                        onClick={() => setTabIndex(0)}
                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>


                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                        </svg>
                        <span>Read Books</span>
                    </Link>
                    <Link

                        to={`author`}
                        onClick={() => setTabIndex(1)}

                        className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? 'border border-b-0' : 'border-b'} dark:border-gray-600 dark:text-gray-600`}>

                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                        </svg>
                        <span>Wishlist Books</span>
                    </Link>

                </div>
                <Outlet></Outlet>
            </div>
            {/* <div className="grid mt-12 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(job => <Card key={job.id} job={job} > </Card>)
                }
            </div> */}
        </div >
    );
};

export default Book;    