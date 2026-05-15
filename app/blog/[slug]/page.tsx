import { getAllPosts, getPostBySlug } from '@/lib/markdown';
import { notFound } from 'next/navigation';

// Generate static params for all blog posts at build time
export async function generateStaticParams() {
  const posts = await getAllPosts('blog');
  
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug, 'blog');
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }
  
  return {
    title: `${post.title} | Brain Dump Blog`,
    description: post.excerpt || post.title,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug, 'blog');
  
  if (!post) {
    notFound();
  }
  
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="mb-12 border-b-2 border-stark-black pb-8">
        <div className="flex items-center gap-4 mb-4">
          {post.category && (
            <span className="inline-block px-3 py-1 bg-brain-dump-gray text-stark-black font-semibold text-sm">
              {post.category}
            </span>
          )}
        </div>
        <h1 className="text-5xl font-bold mb-4">
          {post.title}
        </h1>
        {post.date && (
          <time className="text-deep-slate text-sm">
            {new Date(post.date).toLocaleDateString('en-US', {
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
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
      
      {/* Back Link */}
      <div className="mt-16 pt-8 border-t-2 border-stark-black">
        <a 
          href="/blog"
          className="inline-flex items-center gap-2 font-semibold hover:text-muted-rust transition-colors"
        >
          ← Back to Blog
        </a>
      </div>
    </article>
  );
}