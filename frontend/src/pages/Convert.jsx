import { useState } from 'react';
import { convertTextToSpeech } from '../utils/voicerssAPI';

export default function Convert() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('Brian');
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleConvert = async () => {
    if (!text.trim()) return;
    setLoading(true);
    const url = await convertTextToSpeech(text, voice);
    setAudioUrl(url);
    setLoading(false);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'speech.mp3';
    link.click();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 py-12 text-gray-900 dark:text-gray-100">
        <h2 className="text-3xl font-bold mb-6 text-center">Text to Speech Converter</h2>

        <div className="space-y-6 bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transition-all">
          <textarea
            className="w-full p-4 border dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            rows="5"
            placeholder="Type or paste text here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />

          <select
            className="w-full p-3 border dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 focus:outline-none"
            value={voice}
            onChange={(e) => setVoice(e.target.value)}
          >
            <option value="Brian">Brian (UK Male)</option>
            <option value="Emma">Emma (UK Female)</option>
            <option value="Ivy">Ivy (US Female)</option>
            <option value="Justin">Justin (US Male)</option>
            <option value="Kendra">Kendra (US Female)</option>
            <option value="Kimberly">Kimberly (US Female)</option>
            <option value="Joey">Joey (US Male)</option>
            <option value="Salli">Salli (US Female)</option>
          </select>

          <button
            className={`w-full bg-gradient-to-r from-green-600 to-emerald-500 hover:opacity-90 text-white font-medium py-3 rounded-md transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            onClick={handleConvert}
            disabled={loading}
          >
            {loading ? 'Converting...' : 'Convert to Speech'}
          </button>

          {audioUrl && (
            <div className="mt-6 space-y-4 text-center animate-fade-in">
              <audio controls src={audioUrl} className="w-full" />
              <button
                onClick={handleDownload}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition"
              >
                Download MP3
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
