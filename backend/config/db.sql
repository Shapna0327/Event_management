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
INSERT INTO admin (username, password)
VALUES ('admin', 'admin');


CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    roll_no VARCHAR(50) NOT NULL UNIQUE,
    department VARCHAR(50) NOT NULL,
    studying_year VARCHAR(50) NOT NULL,
    section VARCHAR(50) NOT NULL,
    phone_number VARCHAR(15) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE events (
    id INT AUTO_INCREMENT PRIMARY KEY,
    from_time TIME NOT NULL,
    to_time TIME NOT NULL,
    event_date DATE NOT NULL,
    day VARCHAR(20) NOT NULL,
    venue VARCHAR(100) NOT NULL,
    event_name VARCHAR(100) NOT NULL,
    event_coordinator_name VARCHAR(100) NOT NULL,
    event_coordinator_phone VARCHAR(15) NOT NULL,
    student_coordinator_name VARCHAR(100) NOT NULL,
    student_coordinator_phone VARCHAR(15) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);




