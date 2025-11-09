# Live Sessions Application - Video Demo Documentation

## Overview
This is a MERN stack application that allows administrators to create live video sessions and share them with students. The application features a custom video player with full controls and maintains session state using unique session IDs.

---

## 🎯 Key Features

1. **Session Management**
   - Create unique live sessions with auto-generated session IDs
   - Share session URLs with students
   - Persistent session storage in MongoDB

2. **Video Player**
   - Custom-built video player with professional controls
   - Play/Pause functionality
   - Volume control with mute option
   - Progress bar with seek functionality
   - Playback speed settings (0.5x to 2x)
   - Fullscreen mode
   - Time display (current/total duration)

3. **User Types**
   - **Admin**: Creates and manages sessions
   - **Student**: Joins sessions via shared URL

---

## 🏗️ Technology Stack

### Frontend
- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Navigation
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM for MongoDB

---

## 📋 Database Schema

### Collection: `live_sessions`

| Field | Type | Description |
|-------|------|-------------|
| `_id` | ObjectId | Auto-generated primary key |
| `type` | String | User type: "admin" or "student" |
| `unique_id` | String | Unique session identifier (UUID) |
| `userurl` | String | Shareable session URL |
| `createdAt` | Date | Timestamp of creation |
| `updatedAt` | Date | Last update timestamp |

---

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- MongoDB running on localhost:27017
- npm or yarn package manager

### Step 1: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 2: Configure Backend Environment
Create a `.env` file in the `backend` directory:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017
FRONTEND_URL=http://localhost:5173
```

### Step 3: Install Frontend Dependencies
```bash
cd frontend
npm install
```

### Step 4: Start the Application

**Terminal 1 - Backend Server:**
```bash
cd backend
npm run dev
```
Server runs on: `http://localhost:5000`

**Terminal 2 - Frontend Server:**
```bash
cd frontend
npm run dev
```
Frontend runs on: `http://localhost:5173`

---

## 🎬 Demo Walkthrough

### Part 1: Admin Creates a Session

1. **Open the Application**
   - Navigate to `http://localhost:5173` in your browser
   - You'll see the home page with a "START SESSION" button

2. **Create a New Session**
   - Click the "START SESSION" button
   - The application will:
     - Generate a unique session ID (UUID)
     - Create a database entry with:
       - `type`: "admin"
       - `unique_id`: Random UUID
       - `userurl`: `http://localhost:5173/session/{unique_id}`
     - Display the video player immediately

3. **Session Information Display**
   - After creation, you'll see:
     - Session ID
     - Shareable session URL
     - Video player with all controls

### Part 2: Video Player Features

**Demonstrate each control:**

1. **Play/Pause Button**
   - Click to start/pause video playback
   - Icon changes based on state

2. **Volume Control**
   - Adjust volume slider (0-100%)
   - Mute button toggles audio on/off
   - Volume icon changes when muted

3. **Progress Bar**
   - Shows current playback position
   - Click anywhere to seek to that position
   - Displays current time and total duration

4. **Settings Menu**
   - Click "Settings" button
   - Select playback speed:
     - 0.5x (slow motion)
     - 0.75x
     - 1x (normal)
     - 1.25x
     - 1.5x
     - 2x (fast)

5. **Fullscreen Mode**
   - Click fullscreen icon
   - Video expands to full screen
   - Press ESC to exit

### Part 3: Student Joins Session

1. **Copy Session URL**
   - From the admin page, copy the session URL
   - Example: `http://localhost:5173/session/abc123-def456-ghi789`

2. **Open in New Browser/Incognito**
   - Open the URL in a new browser window or incognito mode
   - This simulates a student joining the session

3. **Student View**
   - Same video player interface appears
   - Session is fetched using the `unique_id` from the URL
   - Both admin and student see the same video
   - Session remains active with the same `unique_id`

---

## 🔌 API Endpoints

### 1. Create Session
**POST** `/api/sessions/create`

**Request:** None (empty body)

**Response:**
```json
{
  "success": true,
  "session": {
    "id": "507f1f77bcf86cd799439011",
    "type": "admin",
    "unique_id": "550e8400-e29b-41d4-a716-446655440000",
    "userurl": "http://localhost:5173/session/550e8400-e29b-41d4-a716-446655440000"
  }
}
```

### 2. Get Session by ID
**GET** `/api/sessions/:uniqueId`

**Response:**
```json
{
  "success": true,
  "session": {
    "id": "507f1f77bcf86cd799439011",
    "type": "admin",
    "unique_id": "550e8400-e29b-41d4-a716-446655440000",
    "userurl": "http://localhost:5173/session/550e8400-e29b-41d4-a716-446655440000"
  }
}
```

### 3. Get All Sessions
**GET** `/api/sessions`

**Response:**
```json
{
  "success": true,
  "sessions": [
    {
      "id": "507f1f77bcf86cd799439011",
      "type": "admin",
      "unique_id": "550e8400-e29b-41d4-a716-446655440000",
      "userurl": "http://localhost:5173/session/550e8400-e29b-41d4-a716-446655440000"
    }
  ]
}
```

---

## 📁 Project Structure

```
project-5/
├── backend/
│   ├── models/
│   │   └── LiveSession.js          # MongoDB schema
│   ├── routes/
│   │   └── sessionRoutes.js        # API endpoints
│   ├── server.js                   # Express server
│   ├── package.json
│   └── .env                        # Environment variables
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── VideoPlayer.jsx     # Video player component
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Home page (admin)
│   │   │   └── Session.jsx          # Session page (student)
│   │   ├── App.jsx                 # Main app component
│   │   ├── main.jsx                # Entry point
│   │   └── index.css               # Global styles
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
└── README.md
```

---

## 🎥 Video Demo Script

### Introduction (30 seconds)
"Today I'll demonstrate a Live Sessions application built with the MERN stack. This application allows administrators to create video sessions and share them with students, with a custom video player featuring full controls."

### Setup (1 minute)
"Let me show you the setup. The application consists of a React frontend and an Express backend connected to MongoDB. Both servers are running - the backend on port 5000 and frontend on port 5173."

### Creating a Session (1 minute)
"Now I'll create a new session. When I click 'START SESSION', the application generates a unique session ID, saves it to the database with type 'admin', and creates a shareable URL. The video player appears immediately."

### Video Player Features (2 minutes)
"Let me demonstrate the video player controls:
- Play/Pause functionality
- Volume control with mute
- Progress bar with seek capability
- Settings menu for playback speed
- Fullscreen mode"

### Student Joining (1 minute)
"Now I'll simulate a student joining. I'll open the session URL in a new browser window. As you can see, the same video player loads, and the session remains active using the same unique ID from the database."

### Database Verification (30 seconds)
"Let me verify the database entry. As you can see, the session is stored with all required fields: type, unique_id, and userurl."

### Conclusion (30 seconds)
"This application demonstrates a complete MERN stack implementation with session management, custom video controls, and real-time session sharing capabilities."

---

## 🔍 Key Technical Points to Highlight

1. **Database Integration**
   - MongoDB schema with Mongoose ODM
   - Auto-generated unique IDs using UUID
   - Timestamps for session tracking

2. **RESTful API**
   - Clean API design with Express routes
   - Error handling and validation
   - CORS enabled for frontend communication

3. **React Components**
   - Reusable VideoPlayer component
   - React Router for navigation
   - State management with React hooks

4. **Custom Video Controls**
   - Native HTML5 video element
   - Custom control overlay
   - Full control over playback

5. **Session Persistence**
   - Sessions stored in database
   - URL-based session access
   - Same session ID for admin and students

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running: `mongod` or check MongoDB service
- Verify connection string in `.env` file
- Check MongoDB logs for errors

### Port Already in Use
- Backend: Change `PORT` in `.env` file
- Frontend: Modify `vite.config.js` server port

### CORS Errors
- Verify `FRONTEND_URL` in backend `.env`
- Check CORS middleware in `server.js`

### Video Not Loading
- Check video source URL in `VideoPlayer.jsx`
- Verify network connectivity
- Check browser console for errors

---

## 📝 Notes for Demo

1. **Have MongoDB running** before starting the demo
2. **Test the flow** before recording:
   - Create session
   - Copy URL
   - Open in new window
3. **Show database** using MongoDB Compass or CLI
4. **Highlight the UI** - modern design with Tailwind CSS
5. **Emphasize** the session persistence feature

---

## 🎯 Demo Checklist

- [ ] MongoDB is running
- [ ] Backend server is running (port 5000)
- [ ] Frontend server is running (port 5173)
- [ ] Test session creation
- [ ] Test video player controls
- [ ] Test student joining via URL
- [ ] Verify database entries
- [ ] Check browser console for errors

---

## 📞 Support

For issues or questions:
- Check the README.md for detailed setup
- Review API endpoints documentation
- Check browser console and server logs
- Verify MongoDB connection

---

**Good luck with your video demo! 🎬**

