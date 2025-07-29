import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 transition-colors duration-500">

      <motion.section
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-green-100 to-white dark:from-gray-900 dark:to-gray-950 py-16 px-6 text-center"
      >
        <h1 className="text-4xl font-extrabold text-green-700 dark:text-green-400 mb-4">
          Welcome to Audify
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Convert your text to high-quality, AI-generated voice instantly. Powered by VoiceRSS and ElevenLabs.
        </p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="py-14 px-6 bg-white dark:bg-gray-900"
      >
        <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: '🎤 Realistic Voices',
              desc: 'Choose from a wide range of voices from different regions and genders.',
            },
            {
              title: '⚡ Fast Conversion',
              desc: 'Instantly convert your text into downloadable MP3 files.',
            },
            {
              title: '🎯 Simple & Clean UI',
              desc: 'Built with a smooth and modern design to ensure great usability.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-green-50 dark:bg-gray-800 p-6 rounded-lg shadow dark:shadow-none"
            >
              <h2 className="text-xl font-semibold mb-2 text-green-700 dark:text-green-300">{item.title}</h2>
              <p className="text-gray-600 dark:text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="py-16 px-6 bg-green-100 dark:bg-gray-800"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-green-800 dark:text-green-300">
            How It Works
          </h2>
          <ol className="text-left space-y-3 text-gray-700 dark:text-gray-300 list-decimal list-inside">
            <li>Enter the text you want to convert on the <strong>Convert</strong> page.</li>
            <li>Select a voice that fits your style.</li>
            <li>Click convert, listen to the result, and download your MP3.</li>
          </ol>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center text-sm mt-auto">
        <p>© {new Date().getFullYear()} Audify. Built with ❤️ using React & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
