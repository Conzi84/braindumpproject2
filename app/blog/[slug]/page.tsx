// app/blog/[slug]/page.tsx
import { getAllPosts, getPostBySlug } from '@/lib/markdown';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug, 'blog');
  if (!post) {
    return { title: 'Post Not Found' };
  }
  return {
    title: `${post.title} | Brain Dump`,
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

      {/* Back Link — oben */}
      <div className="mb-10">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-semibold text-black hover:text-muted-rust transition-colors text-sm"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Header */}
      <header className="mb-12 border-b-2 border-black pb-8">
        <h1 className="font-bold text-5xl mb-4 text-black">
          {post.title}
        </h1>
        {post.date && (
          <time className="text-sm">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
        )}
      </header>

      {/* Content */}
      <div
        className="prose prose-lg max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Back Link — unten */}
      <div className="mt-16 pt-8 border-t-2 border-black">
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 font-semibold text-black hover:text-muted-rust transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>

    </article>
  );
}