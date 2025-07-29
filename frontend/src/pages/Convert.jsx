import { useState } from 'react';
import { convertTextToSpeech } from '../utils/voicerssAPI';

export default function Convert() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('Brian');
  const [audioUrl, setAudioUrl] = useState(null);

  const handleConvert = async () => {
    const url = await convertTextToSpeech(text, voice);
    setAudioUrl(url);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = audioUrl;
    link.download = 'speech.mp3';
    link.click();
  };

  return (
    <div className="p-6 space-y-4 max-w-xl mx-auto">
      <textarea
        className="w-full p-3 border rounded"
        rows="4"
        placeholder="Enter text here"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <select
        className="w-full p-3 border rounded"
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
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded"
        onClick={handleConvert}
      >
        Convert to Speech
      </button>

      {audioUrl && (
        <div className="mt-4 space-y-2">
          <audio controls src={audioUrl} className="w-full" />
          <button
            onClick={handleDownload}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded"
          >
            Download MP3
          </button>
        </div>
      )}
    </div>
  );
}
