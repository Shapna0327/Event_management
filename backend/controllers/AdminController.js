// controllers/adminController.js
const adminModel = require('../models/AdminModel'); // Adjust the path if necessary

// Admin login function
exports.login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const admin = await adminModel.getAdminByUsername(username);

        if (!admin) {
            return res.status(404).json({ message: 'Admin not found' });
        }

        // Directly compare passwords without bcrypt
        if (password !== admin.password) {
            return res.status(401).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', admin });
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Server error' });
    }
};
