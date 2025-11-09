import express from 'express';
import LiveSession from '../models/LiveSession.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Create a new session
router.post('/create', async (req, res) => {
  try {
    const uniqueId = uuidv4();
    


    // Prioritize request origin (from frontend), then env variable, then localhost
    let baseUrl = 'http://localhost:5173';
    
    // Get origin from request headers (most reliable for production)
    if (req.headers.origin) {
      baseUrl = req.headers.origin.replace(/\/$/, '');
    } else if (req.headers.referer) {
      // Extract origin from referer
      try {
        const url = new URL(req.headers.referer);
        baseUrl = url.origin;
      } catch (e) {
        // Fallback to env variable if referer parsing fails
        baseUrl = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
      }
    } else {
      // Use environment variable as fallback
      baseUrl = (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
    }
    
    const userUrl = `${baseUrl}/session/${uniqueId}`;

    const session = new LiveSession({
      type: 'admin',
      unique_id: uniqueId,
      userurl: userUrl
    });

    await session.save();

    res.status(201).json({
      success: true,
      session: {
        id: session._id,
        type: session.type,
        unique_id: session.unique_id,
        userurl: session.userurl
      }
    });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating session',
      error: error.message
    });
  }
});

// Get session by unique_id
router.get('/:uniqueId', async (req, res) => {
  try {
    const { uniqueId } = req.params;
    const session = await LiveSession.findOne({ unique_id: uniqueId });

    if (!session) {
      return res.status(404).json({
        success: false,
        message: 'Session not found'
      });
    }

    res.status(200).json({
      success: true,
      session: {
        id: session._id,
        type: session.type,
        unique_id: session.unique_id,
        userurl: session.userurl
      }
    });
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching session',
      error: error.message
    });
  }
});

// Get all sessions
router.get('/', async (req, res) => {
  try {
    const sessions = await LiveSession.find();
    res.status(200).json({
      success: true,
      sessions
    });
  } catch (error) {
    console.error('Error fetching sessions:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching sessions',
      error: error.message
    });
  }
});

export default router;


