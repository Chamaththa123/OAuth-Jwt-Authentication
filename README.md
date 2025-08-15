# Fullstack Google OAuth

A full-stack authentication system using **Google OAuth 2.0** with **React.js** frontend, **Node.js/Express** backend, and **MySQL** database.  
Users can log in with their Google account, and the system stores user details and issues JWT tokens for session management.

---

## Features

- Login with Google account
- Store user info in MySQL database
- Generate JWT token for authentication
- Store token and user details in browser `localStorage`
- Display user info (name, email, profile picture) in dashboard
- Logout functionality
- Protected dashboard route (redirects to login if not authenticated)

---

## Technologies

- **Frontend**: React.js, @react-oauth/google, Axios, React Router
- **Backend**: Node.js, Express.js, MySQL, JWT, Google OAuth2
- **Database**: MySQL
- **Environment Variables**: `.env` for sensitive credentials

