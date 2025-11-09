import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

function Session() {
  const { uniqueId } = useParams();
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      try {
        const response = await axios.get(`${API_URL}/sessions/${uniqueId}`);
        
        if (response.data.success) {
          setSession(response.data.session);
        } else {
          setError('Session not found');
        }
      } catch (err) {
        console.error('Error fetching session:', err);
        setError('Failed to load session');
      } finally {
        setLoading(false);
      }
    };

    if (uniqueId) {
      fetchSession();
    }
  }, [uniqueId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl">Loading session...</div>
      </div>
    );
  }

  if (error || !session) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-xl text-red-600">{error || 'Session not found'}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-4 p-4 bg-white rounded-lg shadow">
          <h2 className="text-xl font-semibold">
            {session.type === 'admin' ? 'Admin Session' : 'Student Session'}
          </h2>
          <p className="text-sm text-gray-600">Session ID: {session.unique_id}</p>
        </div>
        <VideoPlayer sessionId={session.unique_id} userType={session.type || 'student'} />
      </div>
    </div>
  );
}

export default Session;


