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
      <header className="mb-12 border-b-2 border-stark-black pb-8">
        <div className="flex items-center gap-4 mb-4">
          {note.category && (
            <span className="inline-block px-3 py-1 bg-brain-dump-gray text-stark-black font-open-sans font-semibold text-sm">
              {note.category}
            </span>
          )}
        </div>
        <h1 className="text-5xl font-bold mb-4">
          {note.title}
        </h1>
        {note.date && (
          <time className="text-deep-slate text-sm">
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
          prose-headings:font-montserrat prose-headings:font-semibold
          prose-p:font-open-sans prose-p:leading-relaxed
          prose-a:text-muted-rust prose-a:no-underline hover:prose-a:underline
          prose-strong:font-semibold
          prose-code:bg-brain-dump-gray prose-code:px-1 prose-code:py-0.5
          prose-pre:bg-deep-slate prose-pre:text-concrete-white"
        dangerouslySetInnerHTML={{ __html: note.content }}
      />
      
      {/* Back Link */}
      <div className="mt-16 pt-8 border-t-2 border-stark-black">
        <a 
          href="/garden"
          className="inline-flex items-center gap-2 font-semibold hover:text-muted-rust transition-colors"
        >
          ← Back to Digital Garden
        </a>
      </div>
    </article>
  );
}
