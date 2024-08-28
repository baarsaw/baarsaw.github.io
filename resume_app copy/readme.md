# My Portfolio Website

This is a basic portfolio website built using React for the frontend and Node.js with Express for the backend. The website includes a home page with a resume, picture, and project gallery, three project detail pages, and a contact page that sends an email with a contact form.

## Project Structure

app/
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── assets/
│   │       ├── profile.jpg
│   │       ├── project1.jpg
│   │       ├── project2.jpg
│   │       ├── project3.jpg
│   │
│   └── src/
│       ├── pages/
│       │   ├── HomePage.js
│       │   ├── Project1.js
│       │   ├── Project2.js
│       │   ├── Project3.js
│       │   └── ContactPage.js
│       │
│       ├── components/
│       │   ├── Navbar.js
│       │   ├── Gallery.js
│       │   └── ContactForm.js
│       │
│       ├── App.js
│       ├── index.js
│       └── App.css
│
├── backend/
│   ├── index.js
│   ├── routes/
│   │   ├── api.js
│   │   └── contact.js
│   └── config/
│       └── mailer.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md

## Prerequisites

- Node.js (v14 or later)
- npm or yarn package manager

## Setup

### 1. Clone the repository

```bash
git clone https://github.com/your-repository.git
cd app
2. Install dependencies
Navigate to both the frontend and backend directories and install the necessary dependencies:

bash
Copy code
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
3. Set up environment variables
Create a .env file in both the frontend and backend directories with the following contents:

For frontend/.env:

plaintext
Copy code
REACT_APP_BACKEND_URL=http://localhost:5000/api
For backend/.env:

plaintext
Copy code
PORT=5000
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-email-password
4. Running the Application
Start the Backend Server
In the backend directory, start the Express server:

bash
Copy code
cd backend
npm start
The server will run on http://localhost:5000.

Start the Frontend Development Server
In the frontend directory, start the React development server:

bash
Copy code
cd frontend
npm start
The React app will run on http://localhost:3000.

5. Building the App for Production
To build the frontend for production, run the following in the frontend directory:

bash
Copy code
npm run build
This will create a build folder inside the frontend directory. The backend is already configured to serve these static files.

6. Deployment
For deployment, you can use services like Heroku, Vercel, or any cloud provider. Ensure that both frontend and backend services are correctly set up to handle requests in a production environment.

7. Contact Form Email Setup
The contact form on the contact page uses nodemailer to send emails. Ensure you replace the EMAIL_USER and EMAIL_PASS in the backend/.env file with your actual email credentials.

8. Usage
Navigate to http://localhost:3000 to see the home page.
Use the navigation links to explore the projects and contact page.
On the contact page, fill out the form and attach any file to test the email functionality.
License
This project is licensed under the MIT License.

arduino
Copy code

This `README.md` file should guide you through setting up, running, 