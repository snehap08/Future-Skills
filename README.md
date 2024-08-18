# Help Center API Assignment

## Assignment Description

**Title:** Build a Help Center API

**Objective:**  
The objective of this assignment is to create a RESTful API that allows users to manage "Help Center" cards. These cards represent different sections of a help center, such as "Branches," "Manage Your Account," "Manage Billing," etc. The API allows users to create, retrieve, and manage these cards.

## Features Implemented

1. **Project Setup:**
   - Set up a Node.js project using Express.js.
   - Created a basic server with an endpoint to check if the server is running (`GET /ping`).

2. **Card Model:**
   - Designed a Mongoose model for a card with the following fields:
     - `id` (string): A unique identifier for the card.
     - `title` (string): The title of the card (e.g., "Branches").
     - `description` (string): A brief description of what the card represents.

3. **API Endpoints:**
   - **Create a card:**  
     - `POST /cards`: Accepts the card details (title, description) in the request body and creates a new card in the help center.
   - **Get all cards:**  
     - `GET /cards`: Returns a list of all cards in the help center.
   - **Get a specific card:**  
     - `GET /cards/:title`: Returns the details of a specific card by its title.

4. **Error Handling:**
   - Implemented error handling for cases such as trying to access a non-existent card, validation errors, and server errors.

## Local Setup Instructions

Follow these steps to set up and run the project on your local machine:

### Prerequisites

- Node.js (v14 or later)
- npm (v6 or later)
- MongoDB (running locally or available via a connection string)

### Cloning the Repository

Clone the repository from GitHub using the following command:

- `git clone https://github.com/snehap08/Future-Skills.git`

 ### Setting up the Frontend

Navigate to the frontend directory:

- `cd frontend`

Install the required packages:

- `npm install`

Start the frontend server:

- `npm run dev`

**The frontend server will run on http://localhost:5173.**

 ### Setting up the Backend

Navigate to the backend directory:

- `cd backend`

Install the required packages:

- `npm install`

Start the frontend server:

- `node app.js`

**The backend server will run on http://localhost:3000.**


## Running the Application

Once both the frontend and backend servers are running, you can access the application by visiting http://localhost:5173 in your browser.


## Demo

You can see the project demo in the following video:

https://drive.google.com/drive/folders/19KPrpS6DI_6QtZh3CUOomZ-huGjbo3Kl?usp=sharing
