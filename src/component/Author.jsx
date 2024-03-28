import { useEffect, useState } from "react";
// import Card from "./Card";
import { getJobs2 } from "./Utilit";
// import CardItem from "./CardItem";
import CardWhiest from "./CardWhiest";

const Author = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const storedBooks = getJobs2()
        setBooks(storedBooks)
    }, [])

    return (
        <div>
            <div className="grid w-[1000px] h-[800px] mt-12 gap-8 ">
                {
                    books.map(job => <CardWhiest key={job.id} job={job} > </CardWhiest>)
                }
            </div>
        </div>
    );
};

export default Author;