
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 transition-colors duration-500 flex flex-col">
      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-green-100 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-6 text-center"
      >
        <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">
          About Audify
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Learn what makes Audify a powerful and accessible voice synthesis tool built for modern users.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="py-14 px-6 bg-white dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed text-gray-800 dark:text-gray-100">
          <p>
            <strong>AudifyAI</strong> is a browser-based Text-to-Speech (TTS) app that transforms your written
            words into lifelike audio using advanced AI voice engines like <span className="font-semibold">ElevenLabs</span>.
          </p>

          <p>
            Our mission is to make voice generation fast, intuitive, and accessible for everyone — from creators
            and educators to marketers, students, and users with accessibility needs.
          </p>

          <div className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-none">
            <h2 className="text-2xl font-semibold mb-4 text-green-700 dark:text-green-300">
              Key Features
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>🎤 Realistic, natural-sounding voices</li>
              <li>⚡ Instant MP3 download after conversion</li>
              <li>🌍 Multiple accents and voice options</li>
              <li>🌙 Full dark mode and responsive UI</li>
              <li>🧠 No login, no backend — just text and voice</li>
            </ul>
          </div>

          <p>
            Whether you're narrating a video, improving accessibility, or simply exploring voice tech, AudifyAI
            provides a sleek, modern, and powerful experience — all directly in your browser.
          </p>

          <p className="italic text-sm text-gray-600 dark:text-gray-400">
            Stay tuned for new features: custom voice tuning, language variety, and history tracking are on the way!
          </p>
        </div>
      </motion.section>

     
      <footer className="bg-gray-900 text-white py-6 text-center text-sm mt-auto">
        <p>© {new Date().getFullYear()} Audify. Crafted with 💚 using React, Tailwind CSS & Framer Motion.</p>
      </footer>
    </div>
  );
}
