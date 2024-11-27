// models/AdminModel.js
const pool = require('../config/db'); // Adjust the path if necessary

// Function to get admin by username
const getAdminByUsername = async (username) => {
    try {
        const [rows] = await pool.query('SELECT * FROM admin WHERE username = ?', [username]);
        if (rows.length === 0) {
            return null;
        }
        return rows[0];
    } catch (error) {
        console.error('Error fetching admin from DB:', error);
        throw error;
    }
};

module.exports = {
    getAdminByUsername,
};
