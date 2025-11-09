# Live Sessions Application

A MERN stack application for creating and managing live video sessions with admin and student access.

## Features

- Create live sessions with unique session IDs
- Video player with full controls (Play, Pause, Volume, Fullscreen, Settings)
- Admin and Student access modes
- MongoDB database for session management
- React Vite frontend with Tailwind CSS

## Tech Stack

- **Frontend**: React, Vite, Tailwind CSS, React Router
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Database**: MongoDB

## Project Structure

```
project-5/
├── backend/
│   ├── models/
│   │   └── LiveSession.js
│   ├── routes/
│   │   └── sessionRoutes.js
│   ├── server.js
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── VideoPlayer.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   └── Session.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
└── README.md
```

## Database Schema

### live_sessions Collection

- `id` - Auto Increment Primary Key (MongoDB ObjectId)
- `type` - VARCHAR (admin/student)
- `unique_id` - VARCHAR (unique session ID)
- `userurl` - TEXT (session access URL)
- `createdAt` - Timestamp
- `updatedAt` - Timestamp

## Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the backend directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/live_sessions_db
FRONTEND_URL=http://localhost:5173
```

4. Start the backend server:
```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the frontend directory (optional):
```
VITE_API_URL=http://localhost:5000/api
```

4. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

1. **Start a Session (Admin)**:
   - Open `http://localhost:5173` in your browser
   - Click the "START SESSION" button
   - A new session will be created and a video player will appear
   - Copy the session URL to share with students

2. **Join a Session (Student)**:
   - Open the session URL provided by the admin
   - The same video player will appear
   - The session remains active using the same unique_id

## API Endpoints

### Create Session
- **POST** `/api/sessions/create`
- Creates a new admin session
- Returns: Session object with unique_id and userurl

### Get Session
- **GET** `/api/sessions/:uniqueId`
- Retrieves a session by unique_id
- Returns: Session object

### Get All Sessions
- **GET** `/api/sessions`
- Retrieves all sessions
- Returns: Array of session objects

## Video Player Features

- Play/Pause controls
- Volume control with mute toggle
- Progress bar with seek functionality
- Playback speed settings (0.5x, 0.75x, 1x, 1.25x, 1.5x, 2x)
- Fullscreen mode
- Time display (current time / total duration)

## Notes

- The video player currently uses a sample video URL. Replace it with your own video source in `VideoPlayer.jsx`
- Make sure MongoDB is running before starting the backend server
- For production, update the `FRONTEND_URL` in the backend `.env` file


