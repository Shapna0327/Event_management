-- Step 1: Create the database
CREATE DATABASE EventManager;

-- Step 2: Use the database
USE EventManager;

-- Step 3: Create the admin table
CREATE TABLE admin (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);

-- Step 4: Insert the admin username and password
-- Ensure that the password is hashed for security reasons
INSERT INTO admin (username, password)
VALUES ('admin', 'admin');

