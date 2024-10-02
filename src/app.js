const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to the BitJobs server!');
});


const getAllJobsRoutes = require('./routes/getAllJobs');
console.log(getAllJobsRoutes);
app.use('/api/jobs', getAllJobsRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
