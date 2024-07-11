Digital Music Library
Overview
This project is a digital music library application built with a NestJS backend and a React frontend. This README provides instructions on how to set up and run the application.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js (including npm)
MongoDB (MongoDB Community Server)
Nest CLI (if running NestJS commands globally)
Setup and Installation
1. Set Up MongoDB
Create a MongoDB Database

Ensure that MongoDB is installed and running on your local machine.
Open a terminal or command prompt.
Connect to MongoDB using the MongoDB shell or a GUI tool (e.g., MongoDB Compass).
Create a new database named digital-music-library.
Using MongoDB Shell:

mongo
use digital-music-library
2. Set Up and Run the Backend
Navigate to the Backend Folder

Open a terminal or command prompt and navigate to the backend folder:

cd path/to/your/project/backend
Install Dependencies

Install the required npm packages:

npm install
Run the Backend Server

Start the NestJS backend server:

nest start
The backend server should now be running at http://localhost:3000 (or any other port specified in your configuration).

3. Set Up and Run the Frontend
Navigate to the Frontend Folder

Open a new terminal or command prompt and navigate to the frontend folder:

cd path/to/your/project/frontend
Install Dependencies

Install the required npm packages:

npm install
Run the Frontend Application

Start the React frontend application:

npm start
The frontend application should now be running at http://localhost:5000 (or any other port specified in your configuration).
