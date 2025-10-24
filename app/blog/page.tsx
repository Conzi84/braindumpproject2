// app/blog/page.tsx
import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export default async function BlogPage() {
  const posts = await getAllPosts('blog');

  return (
    <div className="min-h-screen bg-light-bg dark:bg-light-bg dark:bg-dark-bg">
      {/* Header */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-start mb-12">
          <div>
            <h1 className="text-6xl font-bold font-montserrat text-light-text dark:text-dark-text mb-4">
              Blog
            </h1>
            <p className="text-xl text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-light max-w-2xl">
              Insights on AI workflows, tools, and productivity techniques that transform how I work.
            </p>
          </div>
          <button className="px-6 py-3 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text font-semibold hover:bg-light-text dark:hover:bg-dark-text hover:text-light-bg dark:hover:text-dark-bg transition-colors">
            ALL POSTS →
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-full text-center py-16">
              <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary text-lg">
                No posts yet. Check back soon.
              </p>
            </div>
          ) : (
            posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-light-surface dark:bg-dark-surface rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                {/* Illustration Placeholder */}
                <div className="h-48 bg-gradient-to-br from-note-orange via-note-pink to-note-yellow flex items-center justify-center">
                  <div className="w-24 h-24 bg-light-bg dark:bg-dark-bg rounded-full flex items-center justify-center">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-bold font-montserrat text-light-text dark:text-dark-text mb-3 group-hover:text-light-accent dark:group-hover:text-light-accent dark:text-dark-accent transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary font-open-sans text-sm leading-relaxed line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <time className="text-xs text-light-text dark:text-light-text-secondary dark:text-dark-text-secondary">
                      {post.date}
                    </time>
                    <span className="text-xs text-light-accent dark:text-dark-accent font-semibold">
                      Read more →
                    </span>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
