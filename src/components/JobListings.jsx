
import { useEffect, useState } from "react"
import JobListing from "./JobListing"
import Spinner from "./Spinner"

const JobListings = ({ isHome = false }) => {
    const [jobs, setJobs] = useState([])//it fill the response in the array
    const [loading, setLoading] = useState(true)
    console.log(jobs)

    useEffect(() => {
        const fetchJobs = async () => {
            const apiURL = `/api/${isHome ? '?_limit=3' : ''}`;
            try {
                const res = await fetch(apiURL)
                const data = await res.json()
                setJobs(data)
            } catch (error) {
                console.error("Jobs Data is not fetching right now...", error);
            } finally {
                setLoading(false)
            }
        }
        fetchJobs()
    }, [])
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? "Recent Jobs" : "Browse Jobs"}
                </h2>
                {loading ? (
                    <Spinner loading={loading} />
                ) :
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {jobs.map((job) => (
                            <JobListing key={job.id} job={job} />
                        ))}
                    </div>}
            </div>
        </section>
    )
}

export default JobListings