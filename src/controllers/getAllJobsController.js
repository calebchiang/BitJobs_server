const { pool } = require('../db/db');

exports.fetchAllJobs = async (req, res) => {
    try {
        console.log('Starting database query...');
        
        // Query to select only company, location, and title
        const result = await pool.query('SELECT company, location, title FROM jobs');
        
        console.log('Database query completed.');
        res.status(200).json(result.rows); // Return only the selected fields
    } catch (error) {
        console.error('Database query error:', error.stack); // Log the error
        res.status(500).json({ message: 'Failed to fetch job listings', error: error.toString() });
    }
};
