
export async function convertTextToSpeech(text, voice = 'Brian') {
  if (!text || text.trim().length === 0) {
    alert('Please enter some text to convert.');
    return null;
  }

  const encodedText = encodeURIComponent(text);
  const url = `https://api.streamelements.com/kappa/v2/speech?voice=${voice}&text=${encodedText}`;

  try {
    const response = await fetch(url);
    const contentType = response.headers.get('Content-Type');

    if (!response.ok || !contentType.includes('audio')) {
      const errorText = await response.text();
      console.error('TTS API error:', errorText);
      alert('Text-to-speech failed: ' + errorText);
      return null;
    }

    const audioBlob = await response.blob();
    return URL.createObjectURL(audioBlob);
  } catch (error) {
    console.error('Fetch error:', error);
    alert('Network or API error occurred.');
    return null;
  }
}
