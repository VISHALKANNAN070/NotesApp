# 📝 MERN Notes App

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)

A full-stack MERN application that allows users to securely log in and manage personal notes. This project demonstrates a complete `CRUD` implementation with user authentication via Google OAuth 2.0.

> This application serves as a practical example of building a modern, full-stack web application with secure authentication and a responsive user interface.



***

## 🚀 Features

* 🔐 **Secure Google Authentication**: Utilizes *OAuth 2.0* with [Passport.js](http.www.passportjs.org/) for a safe and easy login experience.
* 🗒️ **Full CRUD Functionality**: Users can **C**reate, **R**ead, **U**pdate, and **D**elete their personal notes.
* ☁️ **Persistent Storage**: All notes are securely stored in a MongoDB database.
* 📱 **Responsive Design**: A clean, modern, and user-friendly interface that works on any device size.
* 🌍 **RESTful API**: A well-structured backend API built with Node.js and Express.js to handle all data operations.

***

## 🛠️ Tech Stack

* **Frontend**: [React.js](https://react.dev/), [React Router](https://reactrouter.com/), [Axios](https://axios-http.com/)
* **Backend**: [Node.js](https://nodejs.org/), [Express.js](https://expressjs.com/)
* **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) ODM
* **Authentication**: Google OAuth 2.0 (using `passport-google-oauth20`)

***

## ⚙️ Getting Started

Follow these instructions to get a local copy of the project up and running for development and testing purposes.

### Prerequisites

You must have [Node.js](https://nodejs.org/) and `npm` installed on your machine. You will also need a MongoDB database instance (either local or from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)).

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/notes-app.git](https://github.com/your-username/notes-app.git)
    cd notes-app
    ```

2.  **Install server dependencies:**
    Navigate to the `server` directory and run `npm install`.
    ```bash
    cd server
    npm install
    ```

3.  **Install client dependencies:**
    Navigate to the `client` directory and run `npm install`.
    ```bash
    cd ../client
    npm install
    ```

4.  **Set up Environment Variables:**
    Create a new file named `.env` in the `server/config` directory. You'll need to get your Google credentials from the [Google Cloud Console](https://console.cloud.google.com/).

    > ***Important:*** *Never commit your `.env` file to version control! Make sure it is listed in your `.gitignore` file.*

    Add the following variables to your `server/config/.env` file:
    ```env
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    GOOGLE_CLIENT_ID=your_google_client_id
    GOOGLE_CLIENT_SECRET=your_google_client_secret
    SESSION_SECRET=a_very_secret_key_for_sessions
    ```

5.  **Run the application:**
    From the root directory, you can run both the client and server concurrently using the `dev` script defined in the root `package.json`.
    ```bash
    # From the root directory
    npm run dev
    ```
    The application will be available at `http://localhost:3000`.

***

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/notes-app/issues).

1.  **Fork** the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  **Commit** your changes (`git commit -m 'Add some AmazingFeature'`).
4.  **Push** to the branch (`git push origin feature/AmazingFeature`).
5.  Open a **Pull Request**.

***

## 📄 License

This project is distributed under the MIT License. See the `LICENSE` file for more information.
