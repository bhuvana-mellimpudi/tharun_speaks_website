# Tharun Speaks — Creator Community Website

A multi-page fan and community website inspired by **Tharun Speaks**, designed to help visitors explore content and join a creator-focused community.

## 🌐 Live Website

**Live Demo:** [Tharun Speaks Website](https://tharun-speaks-website-1.onrender.com)

## ✨ Features

- **Home Page:** Introduction to the creator and featured content.
- **Content Page:** Explore content and discover videos.
- **Join Community:** A form to submit a name, email address, and favourite content category.
- **Backend Integration:** Form submissions are processed through a Node.js and Express API.
- **Database Storage:** MongoDB Atlas stores community registration details.
- **Responsive Design:** A layout designed for different screen sizes.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling and responsive layout |
| JavaScript | Client-side interactions and form submission |
| Node.js | Server-side runtime |
| Express.js | Backend API and static file serving |
| MongoDB Atlas | Cloud database |
| Git and GitHub | Version control |
| Render | Website hosting |

## 📁 Project Structure

```text
tharun_speaks_website/
├── public/
│   ├── index.html
│   ├── content.html
│   ├── join.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## ⚙️ Run Locally

### Prerequisites

- Node.js and npm
- A MongoDB Atlas account and connection string

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/bhuvana-mellimpudi/tharun_speaks_website.git
   ```

2. Enter the project directory:

   ```bash
   cd tharun_speaks_website
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory:

   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

5. Start the server:

   ```bash
   node server.js
   ```

6. Open `http://localhost:3000` in your browser.

## 🔄 How the Join Form Works

1. A visitor enters their details on the Join Community page.
2. JavaScript sends the form data to the Express API endpoint, `POST /api/join`.
3. The backend validates the required fields.
4. The submitted details are stored in the MongoDB Atlas `tharunSpeaks` database, in the `communityMembers` collection.
5. The website displays a success or error message.

## 🔐 Security

- MongoDB credentials are stored in environment variables.
- The `.env` file is excluded from version control.
- Database credentials must never be committed to GitHub.

## 🎯 Project Objective

To build and deploy a functional, multi-page creator community website demonstrating frontend development, backend API integration, database operations, version control, and cloud deployment.

---

**Built as a web development project.**
