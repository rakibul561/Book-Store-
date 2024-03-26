import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const Books = () => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {

        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    console.log(jobs);
    return (
        <div>
            <div>
                <h1 className="text-6xl  text-center font-bold">Books: {jobs.length}</h1>
            </div>
            <div>
                {
                    jobs.map(job=> <Card key={job.id} job={job} > </Card>)
                }
            </div>
        </div>
    );
};

export default Books;