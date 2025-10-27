import { getAllPosts, getPostBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';

// Generate static params for all garden notes at build time
export async function generateStaticParams() {
  const notes = await getAllPosts('garden');
  
  return notes.map((note) => ({
    slug: note.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const note = await getPostBySlug(params.slug, 'garden');
  
  if (!note) {
    return {
      title: 'Note Not Found',
    };
  }
  
  return {
    title: `${note.title} | Digital Garden`,
    description: note.excerpt || note.title,
  };
}

export default async function GardenNote({ params }: { params: { slug: string } }) {
  const note = await getPostBySlug(params.slug, 'garden');
  
  if (!note) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12 border-b-2 border-light-text dark:border-dark-text pb-8">
        <div className="flex items-center gap-4 mb-4">
          {note.category && (
            <span className="inline-block px-3 py-1 bg-brainDumpGray text-light-text dark:text-dark-text font-body font-semibold text-sm">
              {note.category}
            </span>
          )}
        </div>
        <h1 className="font-display font-bold text-5xl mb-4 text-light-text dark:text-dark-text">
          {note.title}
        </h1>
        {note.date && (
          <time className="text-light-text-secondary dark:text-dark-text-secondary font-body text-sm">
            Last updated: {new Date(note.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </time>
        )}
      </header>
      
      {/* Content */}
      <div 
        className="prose prose-lg max-w-none
          prose-headings:font-display prose-headings:font-semibold prose-headings:text-light-text dark:prose-headings:text-dark-text
          prose-p:font-body prose-p:text-light-text dark:prose-p:text-dark-text prose-p:leading-relaxed
          prose-a:text-mutedRust prose-a:no-underline hover:prose-a:underline
          prose-strong:text-light-text dark:prose-strong:text-dark-text prose-strong:font-semibold
          prose-code:bg-brainDumpGray prose-code:px-1 prose-code:py-0.5
          prose-pre:bg-deepSlate prose-pre:text-concreteWhite"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
      
      {/* Back Link */}
        <div className="mt-16 pt-8 border-t-2 border-light-text dark:border-dark-text">
        <a 
          href="/garden"
          className="inline-flex items-center gap-2 font-body font-semibold text-light-text dark:text-dark-text hover:text-mutedRust transition-colors"
        >
          ← Back to Digital Garden
        </a>
      </div>
    </article>
  );
}
