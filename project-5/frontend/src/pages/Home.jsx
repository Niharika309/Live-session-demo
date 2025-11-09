import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import VideoPlayer from '../components/VideoPlayer';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

function Home() {
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleStartSession = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(`${API_URL}/sessions/create`);
      
      if (response.data.success) {
        setSession(response.data.session);
        // Optionally navigate to the session page
        // navigate(`/session/${response.data.session.unique_id}`);
      }
    } catch (err) {
      console.error('Error creating session:', err);
      setError('Failed to create session. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {!session ? (
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-800 mb-8">
              Live Sessions
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Start a new live session to begin streaming
            </p>
            
            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <button
              onClick={handleStartSession}
              disabled={loading}
              className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-200 transform hover:scale-105 disabled:transform-none"
            >
              {loading ? 'Creating Session...' : 'START SESSION'}
            </button>

            {session && (
              <div className="mt-8 p-6 bg-white rounded-lg shadow-lg">
                <h2 className="text-xl font-semibold mb-4">Session Created!</h2>
                <div className="text-left space-y-2 mb-4">
                  <p><strong>Session ID:</strong> {session.unique_id}</p>
                  <p><strong>Session URL:</strong></p>
                  <a
                    href={session.userurl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 hover:underline break-all"
                  >
                    {session.userurl}
                  </a>
                </div>
                <p className="text-sm text-gray-600">
                  Share this URL with students to join the session
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="mb-4 p-4 bg-white rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-2">Active Session</h2>
              <p className="text-sm text-gray-600 mb-2">
                <strong>Session URL:</strong>{' '}
                <a
                  href={session.userurl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline"
                >
                  {session.userurl}
                </a>
              </p>
              <button
                onClick={() => setSession(null)}
                className="mt-2 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded text-sm"
              >
                End Session
              </button>
            </div>
            <VideoPlayer sessionId={session.unique_id} userType="admin" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;


