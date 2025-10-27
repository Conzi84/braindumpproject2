// app/garden/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default async function GardenPage() {
  const notes = await getAllPosts('garden');

  // Sticky note colors with proper class mapping
  const noteColorClasses = [
    'bg-note-orange dark:bg-note-orange-dark', 
    'bg-note-pink dark:bg-note-pink-dark', 
    'bg-note-yellow dark:bg-note-yellow-dark',
    'bg-note-green dark:bg-note-green-dark', 
    'bg-note-blue dark:bg-note-blue-dark', 
    'bg-note-purple dark:bg-note-purple-dark'
  ];

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-6xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
              Digital Garden
            </h1>
            <p className="text-xl text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-light max-w-2xl">
              This is where my brain leaves breadcrumbs. Notes from books, stray thoughts, podcast moments—basically, the stuff I want to remember.
            </p>
          </div>
          <button className="px-6 py-3 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text font-semibold hover:bg-light-text dark:hover:bg-dark-text hover:text-light-bg dark:hover:text-dark-bg transition-colors">
            MORE NOTES →
          </button>
        </div>

        {/* Sticky Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-6">
          {notes.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary text-lg">
                No notes yet. The garden is being planted.
              </p>
            </div>
          ) : (
            notes.map((note, index) => (
              <Link
                key={note.slug}
                href={`/garden/${note.slug}`}
                className={`group p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-rotate-1 hover:scale-105 ${noteColorClasses[index % noteColorClasses.length]} text-black dark:text-white`}
              >
                <h2 className="text-lg font-bold font-montserrat mb-3 line-clamp-2">
                  {note.title}
                </h2>
                <p className="text-sm font-open-sans mb-4 line-clamp-4 leading-relaxed">
                  {note.excerpt}
                </p>
                <div className="flex justify-between items-center">
                  {note.category && (
                    <span className="text-xs font-semibold border border-black px-2 py-1 rounded">
                      {note.category.toUpperCase()}
                    </span>
                  )}
                  <time className="text-xs font-light">
                    {note.date}
                  </time>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
