# Quick Demo Guide - Live Sessions Application

## 🚀 Quick Start Commands

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

**URLs:**
- Frontend: http://localhost:5173
- Backend API: http://localhost:5000/api

---

## 📋 Demo Flow (5 minutes)

### 1. Show Home Page (30 sec)
- Open http://localhost:5173
- Explain: "This is the admin interface with a START SESSION button"

### 2. Create Session (1 min)
- Click "START SESSION"
- Show: Session ID, URL generated
- Explain: "Session saved to MongoDB with unique_id"

### 3. Video Player Features (2 min)
- **Play/Pause**: Click button
- **Volume**: Adjust slider, show mute
- **Progress**: Click to seek, show time display
- **Settings**: Open menu, change playback speed
- **Fullscreen**: Enter/exit fullscreen

### 4. Student Joins (1 min)
- Copy session URL
- Open in new browser/incognito
- Show: Same video player loads
- Explain: "Same unique_id, session persists"

### 5. Database Check (30 sec)
- Show MongoDB collection
- Point out: type, unique_id, userurl fields

---

## 🎯 Key Points to Mention

✅ **MERN Stack**: MongoDB, Express, React, Node.js  
✅ **Custom Video Player**: Full controls built from scratch  
✅ **Session Management**: Unique IDs, persistent storage  
✅ **Real-time Sharing**: URL-based access  
✅ **Modern UI**: Tailwind CSS styling  

---

## 🔑 Technical Highlights

1. **Database**: MongoDB with Mongoose schema
2. **API**: RESTful endpoints (POST, GET)
3. **Frontend**: React with Vite, React Router
4. **Styling**: Tailwind CSS
5. **Video**: HTML5 video with custom controls

---

## 📝 Demo Script (Short Version)

**Opening:**
"Live Sessions app - MERN stack for video session management"

**Creating Session:**
"Clicking START SESSION creates a database entry with unique ID and shareable URL"

**Video Controls:**
"Custom player with play, pause, volume, seek, speed, and fullscreen controls"

**Student Access:**
"Students access via URL, same session, same unique_id in database"

**Closing:**
"Complete MERN implementation with session persistence and custom video controls"

---

## ⚠️ Before Demo Checklist

- [ ] MongoDB running
- [ ] Backend server running (port 5000)
- [ ] Frontend server running (port 5173)
- [ ] Test session creation works
- [ ] Test video player controls
- [ ] Have MongoDB Compass/CLI ready to show database

---

**Keep this guide handy during your demo! 📱**

