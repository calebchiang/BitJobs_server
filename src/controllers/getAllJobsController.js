// Returns all jobs in database
exports.fetchAllJobs = async (req, res) => {
    try {
        // MOCK DATA: waiting for database deployment
        const jobs = [
            { id: 1, title: "Software Engineer", location: "New York", company: "TechCorp", salary: "100k-120k" },
            { id: 2, title: "Data Scientist", location: "San Francisco", company: "DataTech", salary: "110k-130k" },
            { id: 3, title: "Product Manager", location: "Seattle", company: "ProductPro", salary: "90k-115k" },
            { id: 4, title: "Web Developer", location: "Austin", company: "WebWorld", salary: "80k-100k" }
        ];

        res.status(200).json(jobs);
    } catch (error) {
        res.status(500).json({ message: "Failed to fetch job listings", error: error.toString() });
    }
};