
# Google Drive Clone 📂

## Overview

Welcome to the Google Drive Clone project! This is a fully functional clone of Google Drive built with React for the frontend and Firebase for authentication, database storage, and file storage. With this app, you can sign up, log in, upload files, and organize them into folders—just like the real Google Drive.

## Features ✨

- **User Authentication**: Easily sign up, log in, and log out with Firebase Authentication.
- **Real-time Database**: Store and retrieve your files in real-time using Firebase Firestore.
- **File Upload**: Upload your files securely with Firebase Storage.
- **Organize Files**: Create folders to keep your files neatly organized.
- **Responsive Design**: Enjoy a seamless experience on mobile, tablet, and desktop.
- **Dark and Light Mode**: Switch between dark and light modes.
- **Sidebar Navigation**: Navigate easily with a sidebar that includes starred items, trash, shared with me, and storage space indicators.

## Technologies Used 🛠️

- **React**: For building the user interface.
- **Firebase**: For authentication, database storage, and file storage.
- **React Router**: For navigation.
- **Tailwind CSS**: For styling.

## Prerequisites 🔧

Before you start, make sure you have the following:

- **Node.js and npm**: Installed on your machine.
- **Firebase Project**: Set up a Firebase project in the Firebase Console.

## Getting Started 🚀

Follow these steps to get the project running on your local machine:

1. **Clone the repository**:
    ```plaintext
    git clone https://github.com/yourusername/google-drive-clone.git
    cd google-drive-clone
    ```

2. **Install dependencies**:
    ```plaintext
    npm install
    ```

3. **Set up Firebase**:
    - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
    - Add a web app to your Firebase project and get the Firebase configuration object.
    - Enable Email/Password and Google authentication in the Firebase Authentication section.
    - Create Firestore and Storage rules to allow authenticated users.

4. **Add Firebase configuration**:
    - Create a `.env` file in the root directory and add your Firebase configuration:
    ```plaintext
    VITE_FIREBASE_API_KEY=your_api_key
    VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
    VITE_FIREBASE_PROJECT_ID=your_project_id
    VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
    VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    VITE_FIREBASE_APP_ID=your_app_id
    ```

5. **Start the development server**:
    ```plaintext
    npm run dev
    ```

## Screenshots 📸

### Home Page
![Home Page](screenshots/home1.jpg)

### Sign In Page
![Sign In Page](screenshots/home.jpg)

### Login with Firebase
![Login with Firebase](screenshots/login.jpg)

### Home Page
![Dark Mode](screenshots/darkmode.jpg)

### File Upload
![File Upload](screenshots/upload.jpg)

## Contributing 🤝

We welcome contributions, issues, and feature requests! Feel free to check the [issues page](https://github.com/yourusername/google-drive-clone/issues).

## Acknowledgments 🙌

- Inspired by the original [Google Drive](https://drive.google.com/).
---

Feel free to reach out if you have any questions or need further assistance! Enjoy using your Google Drive Clone! 📂🚀
