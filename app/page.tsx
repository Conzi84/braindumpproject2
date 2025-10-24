// app/page.tsx
import Link from 'next/link';

import { getAllPosts } from '@/lib/markdown';

export default async function HomePage() {
  // Get latest posts for previews
  const blogPosts = await getAllPosts('blog');
  const gardenNotes = await getAllPosts('garden');

  return (
            <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Two-Column Personal Introduction */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Personal Facts */}
          <div className="space-y-8">
                    <h1 className="text-5xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text mb-8">
                      I'm <span className="text-highlight-red">Constanze</span>
                    </h1>
            
            <div className="space-y-6">
              <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
                <h3 className="text-xl font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text mb-3">
                  Veterinary Medicine & PhD
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed">
                  Studied veterinary medicine, earned my PhD, and learned that research is about asking the right questions and being comfortable with uncertainty.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
                <h3 className="text-xl font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text mb-3">
                  Zoo Leadership (10 Years)
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed">
                  Led a zoo for a decade, learning that management is about people, not just processes. Every day brought new challenges in animal welfare, visitor experience, and conservation.
                </p>
              </div>

              <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
                <h3 className="text-xl font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text mb-3">
                  AI & Risk Management
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed">
                  Now managing AI and Risk at a local company, applying systematic thinking from veterinary medicine and leadership skills from zoo management.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Quote & Personal */}
          <div className="space-y-8">
            <div className="bg-note-yellow p-8 rounded-lg text-black">
              <blockquote className="text-2xl font-light font-ibm-plex-sans italic leading-relaxed mb-4">
                "I tend to gather <span className="font-semibold">shiny objects</span> or the next interesting thing. Here I am building and writing in public."
              </blockquote>
              <cite className="text-sm font-medium font-ibm-plex-mono">
                — Constanze
              </cite>
            </div>

            <div className="space-y-6">
            <h3 className="text-2xl font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text">
              Building in Public
            </h3>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed">
              I tend to gather <span className="text-highlight-yellow font-semibold">shiny objects</span>—the next interesting thing that catches my attention. This curiosity has led me from veterinary medicine to zoo management to AI and risk.
            </p>
            <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed">
              Here, I'm <span className="text-highlight-green font-semibold">building and writing in public</span>, documenting my journey of continuous learning and adaptation.
            </p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
            Latest Blog Posts
          </h2>
          <Link
            href="/blog"
            className="px-6 py-3 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text font-ibm-plex-mono font-semibold hover:bg-light-text dark:hover:bg-dark-text hover:text-light-bg dark:hover:text-dark-bg transition-colors"
          >
            View All Posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="h-32 bg-gradient-to-br from-note-orange via-note-pink to-note-yellow flex items-center justify-center">
                <span className="text-3xl">📝</span>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text mb-2 group-hover:text-light-accent dark:group-hover:text-dark-accent transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans text-sm leading-relaxed line-clamp-2">
                  {post.excerpt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Garden Section Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
            Digital Garden
          </h2>
          <Link
            href="/garden"
            className="px-6 py-3 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text font-ibm-plex-mono font-semibold hover:bg-light-text dark:hover:bg-dark-text hover:text-light-bg dark:hover:text-dark-bg transition-colors"
          >
            Explore Garden →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {gardenNotes.slice(0, 4).map((note, index) => {
            const noteColorClasses = [
              'bg-note-orange', 'bg-note-pink', 'bg-note-yellow', 
              'bg-note-green', 'bg-note-blue', 'bg-note-purple'
            ];
            return (
              <Link
                key={note.slug}
                href={`/garden/${note.slug}`}
                className={`group p-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-rotate-1 hover:scale-105 ${noteColorClasses[index % noteColorClasses.length]} text-black`}
              >
                <h3 className="text-sm font-semibold font-ibm-plex-mono mb-2 line-clamp-2">
                  {note.title}
                </h3>
                <p className="text-xs font-ibm-plex-sans line-clamp-3 leading-relaxed">
                  {note.excerpt}
                </p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Resources & Work Preview */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Resources Preview */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
                Resources
              </h2>
              <Link
                href="/resources"
                className="text-light-accent dark:text-dark-accent font-ibm-plex-mono font-semibold hover:underline"
              >
                View All →
              </Link>
            </div>
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text mb-3">
                AI & Risk Management Tools
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed mb-4">
                Frameworks, methodologies, and insights from my journey across veterinary medicine, 
                zoo leadership, and AI risk management.
              </p>
              <ul className="text-sm text-light-text-secondary dark:text-dark-text-secondary space-y-1">
                <li>• Risk Assessment Frameworks</li>
                <li>• AI Ethics Guidelines</li>
                <li>• Leadership Resources</li>
              </ul>
            </div>
          </div>

          {/* Work Preview */}
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold font-ibm-plex-mono text-light-text dark:text-dark-text">
                Work & Portfolio
              </h2>
              <Link
                href="/work"
                className="text-light-accent dark:text-dark-accent font-ibm-plex-mono font-semibold hover:underline"
              >
                View Portfolio →
              </Link>
            </div>
            <div className="bg-light-surface dark:bg-dark-surface p-6 rounded-lg">
              <h3 className="text-xl font-semibold font-ibm-plex-mono text-light-text dark:text-dark-text mb-3">
                Current: AI & Risk Management
              </h3>
              <p className="text-light-text-secondary dark:text-dark-text-secondary font-ibm-plex-sans leading-relaxed mb-4">
                Applying systematic thinking from veterinary medicine and leadership skills 
                from zoo management to navigate AI and risk in business contexts.
              </p>
              <ul className="text-sm text-light-text-secondary dark:text-dark-text-secondary space-y-1">
                <li>• Zoo Leadership (10 Years)</li>
                <li>• Veterinary Medicine Foundation</li>
                <li>• AI Risk Framework Development</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
