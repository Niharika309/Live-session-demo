import express from 'express';
import LiveSession from '../models/LiveSession.js';
import { v4 as uuidv4 } from 'uuid';

const router = express.Router();

// Create a new session
router.post('/create', async (req, res) => {
  try {
    const uniqueId = uuidv4();
    const baseUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
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


