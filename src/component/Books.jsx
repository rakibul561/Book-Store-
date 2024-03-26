// import { useEffect } from "react";
// import { useState } from "react";
import Card from "./Card";

const Books = ({ books }) => {


    // useEffect(() => {

    //     fetch('jobs.json')
    //         .then(res => res.json())
    //         .then(data => setJobs(data))
    // }, [])
    // console.log();
    return (
        <div>
            <div>
                <h1 className="text-6xl mt-4  text-center font-bold">Books</h1>
            </div>
            <div className="grid mt-12 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {
                    books.map(job => <Card key={job.id} job={job} > </Card>)
                }
            </div>
        </div>
    );
};

export default Books;