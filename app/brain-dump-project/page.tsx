import Link from 'next/link';

export default function BrainDumpProjectPage() {
  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text mb-8 transition-colors font-ibm-plex-mono"
        >
          ← Back
        </Link>

        <h1 className="text-6xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text mb-6">
          Brain Dump Project
        </h1>

        <div className="space-y-6 text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed">
          <p className="text-xl">
            The Brain Dump Project is more than a collection of notes — it’s a mental offloading system for high performers who live in constant motion.
          </p>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
              What is the Brain Dump Project?
            </h2>
            <p>
              It began as my personal evening ritual: a way to empty my mind, release the noise, and translate the flow of thoughts into structured clarity.
            </p>
            <p>
              The Brain Dump Project is my experiment in building in public — capturing raw voice reflections, turning chaos into structured knowledge, and sharing the journey of continuous learning.
            </p>
            <p>
              From Obsidian notes to AI-driven insights, from daily sprint planning to emotional tracking — everything begins with a brain dump.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
              How It Works
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Speak — end the day with a raw voice dump, unfiltered and honest.</li>
              <li>Capture — transcribe and connect your notes in Obsidian.</li>
              <li>Reflect — let AI read mood, focus, and productivity signals.</li>
              <li>Reset — wake up to a plan that aligns with your energy and goals.</li>
            </ul>
          </div>

          <div className="bg-note-yellow dark:bg-note-yellow-dark p-8 rounded-lg text-black dark:text-white">
            <h2 className="text-2xl font-bold font-ibm-plex-mono mb-4">
              The Philosophy
            </h2>
            <p className="font-ibm-plex-sans leading-relaxed">
              The philosophy behind the Brain Dump Project is simple: letting go to move forward.
              By speaking thoughts out loud at the end of the day, I release mental pressure and create space for recovery, creativity, and deep sleep.
            </p>
            <p>
              The transcribed reflections integrate with my Daily Sprint Note — an AI-assisted planner that understands when I’m in <span className="font-semibold">full power mode</span> and when it’s time for <span className="font-semibold">recovery</span>.
              This feedback loop between mind, data, and rhythm keeps performance sustainable and grounded.
            </p>
            <p>
              Because sometimes, the smartest thing you can do for tomorrow’s performance — is to let today go.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
