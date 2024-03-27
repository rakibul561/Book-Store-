import { useEffect, useState } from "react";
import { getJobs } from "../component/Utilit";
import Card from "../component/Card";





const Book = () => {
    const [books, setBooks] = useState([])

    useEffect(() => {
        const storedBooks = getJobs()
        setBooks(storedBooks)
    }, [])


    return (
        <div className="grid mt-12 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {
                books.map(job => <Card key={job.id} job={job} > </Card>)
            }
        </div>
    );
};

export default Book;    