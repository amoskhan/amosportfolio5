import Image from 'next/image';
import {FC, memo, useCallback, useState} from 'react';

import {blogPosts, SectionId} from '../../data/data';
import {BlogPost} from '../../data/dataDef';
import Section from '../Layout/Section';
import BlogModal from './BlogModal';

const Blog: FC = memo(() => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const handleOpenModal = useCallback((post: BlogPost) => {
    setSelectedPost(post);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedPost(null);
  }, []);

  return (
    <Section className="bg-neutral-900 py-16 md:py-24" sectionId={SectionId.Blog}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-y-12">
          {/* Header */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Latest Updates</h2>
            <div className="mt-2 h-1 w-20 bg-blue-500 rounded-full mx-auto" />
            <p className="mt-4 text-neutral-400 max-w-2xl mx-auto">
              My professional journey: Insights, experiences, and key milestones from my career.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 w-full">
            {[...blogPosts]
              .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
              .map((post, idx) => (
                <div
                  className="group flex flex-col rounded-2xl bg-neutral-800 overflow-hidden shadow-lg border border-neutral-700/50 hover:border-blue-500/50 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 cursor-pointer"
                  key={idx}
                  onClick={() => handleOpenModal(post)}>
                  {/* Image Container */}
                  {post.image && (
                    <div className="relative h-56 w-full overflow-hidden">
                      <Image
                        alt={post.title}
                        className="transition-transform duration-500 group-hover:scale-105"
                        layout="fill"
                        objectFit="cover"
                        src={post.image}
                      />
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                    </div>
                  )}

                  {/* Content */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-400">
                        {new Date(post.date).toLocaleDateString('en-US', {month: 'short', year: 'numeric'})}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-neutral-400 text-sm leading-relaxed mb-6 line-clamp-3">{post.content}</p>

                    <div className="mt-auto flex items-center gap-x-2 pt-4 border-t border-neutral-700">
                      <span className="text-xs font-medium text-neutral-500">
                        By <span className="text-neutral-300">{post.author}</span>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <BlogModal isOpen={!!selectedPost} onClose={handleCloseModal} post={selectedPost} />
    </Section>
  );
});

Blog.displayName = 'Blog';
export default Blog;
