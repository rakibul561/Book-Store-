
import toast from "react-hot-toast"
export const getJobs = () => {
    let jobs = []
    const storedJob = localStorage.getItem('jobs')
    if (storedJob) {
        jobs = JSON.parse(storedJob)
    }

    return jobs
}


//    save
export const saveJob = (job) => {
    let jobs = getJobs()
    const isExist = jobs.find(b => b.id === job.id)
    if (isExist) {
        return toast.error('Already Bookmarked')
    }

    jobs.push(job)
    localStorage.setItem('jobs', JSON.stringify(jobs))
    toast.success('Blog Bookmark sucessfully')
}

export const saveJobWihest = (job) => {
    let jobs = getJobs()
    const isExist = jobs.find(b => b.id === job.id)
    if (isExist) {
        return toast.error('Already Bookmarked')
    }

    jobs.push(job)
    localStorage.setItem('jobs', JSON.stringify(jobs))
    toast.success('Blog Bookmark sucessfully')
}
 




