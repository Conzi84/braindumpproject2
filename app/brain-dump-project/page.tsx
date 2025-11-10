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
            This is where I document my thoughts, ideas, and learnings in public.
          </p>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
              What is the Brain Dump Project?
            </h2>
            <p>
              The Brain Dump Project is my way of building in public—capturing raw thoughts, 
              turning chaos into structured knowledge, and sharing the journey of continuous learning.
            </p>
            <p>
              From Obsidian notes to public documentation, from AI workflows to risk management 
              insights, everything starts with a brain dump.
            </p>
          </div>

          <div className="bg-light-surface dark:bg-dark-surface p-8 rounded-lg space-y-4">
            <h2 className="text-2xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
              How It Works
            </h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Capture raw thoughts and ideas</li>
              <li>Organize and connect them in Obsidian</li>
              <li>Refine and publish to this site</li>
              <li>Build in public, iterate constantly</li>
            </ul>
          </div>

          <div className="bg-note-yellow dark:bg-note-yellow-dark p-8 rounded-lg text-black dark:text-white">
            <h2 className="text-2xl font-bold font-ibm-plex-mono mb-4">
              The Philosophy
            </h2>
            <p className="font-ibm-plex-sans leading-relaxed">
              No waiting for perfection. Just capture, connect, and share. Every idea starts as a brain dump, 
              and over time, these fragments evolve into frameworks, insights, or full project plans.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}





