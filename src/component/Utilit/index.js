
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
export const getJobs2 = () => {
    let jobs2 = []
    const storedJob = localStorage.getItem('jobs2')
    if (storedJob) {
        jobs2 = JSON.parse(storedJob)
    }

    return jobs2
}

export const saveJobWihest = (job) => {
    let jobs2 = getJobs2()
    const isExist = jobs2.find(b => b.id === job.id)
    if (isExist) {
        return toast.error('Already Bookmarked')
    }

    jobs2.push(job)
    localStorage.setItem('jobs2', JSON.stringify(jobs2))
    toast.success('Blog Bookmark sucessfully')
}
 




