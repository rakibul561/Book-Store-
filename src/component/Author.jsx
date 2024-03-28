import { useEffect, useState } from "react";
// import Card from "./Card";
import { getJobs } from "./Utilit";
// import CardItem from "./CardItem";
import CardWhiest from "./CardWhiest";

const Author = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const storedBooks = getJobs()
        setBooks(storedBooks)
    }, [])

    return (
        <div>
            <h1> this is a content</h1>
            <div className="grid w-[1000px] h-[800px] mt-12 gap-8 ">
                {
                    books.map(job => <CardWhiest key={job.id} job={job} > </CardWhiest>)
                }
            </div>
        </div>
    );
};

export default Author;