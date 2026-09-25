import {ArrowRightIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo, useCallback, useMemo, useState} from 'react';

import {blogPosts, SectionId} from '../../data/data';
import {BlogPost} from '../../data/dataDef';
import Section from '../Layout/Section';
import SectionHeading from '../Layout/SectionHeading';
import BlogModal, {getParagraphs} from './BlogModal';

const formatMonth = (date: string) => new Date(date).toLocaleDateString('en-SG', {month: 'short', year: 'numeric'});

const Blog: FC = memo(() => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const sortedPosts = useMemo(
    () => [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    [],
  );

  const handleCloseModal = useCallback(() => {
    setSelectedPost(null);
  }, []);

  return (
    <Section className="bg-neutral-50 dark:bg-neutral-900" sectionId={SectionId.Blog}>
      <div className="flex flex-col gap-y-12">
        <SectionHeading
          description="Milestones, reflections and lessons from my journey in sports science, research and education."
          eyebrow="Updates"
          title="Latest updates"
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedPosts.map(post => (
            <article
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-neutral-800 dark:bg-neutral-950"
              key={post.id}>
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                <Image
                  alt=""
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  fill
                  placeholder="blur"
                  sizes="(min-width: 1024px) 330px, (min-width: 768px) 50vw, 100vw"
                  src={post.image}
                />
              </div>
              <div className="flex flex-1 flex-col gap-y-3 p-5">
                <time
                  className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400"
                  dateTime={post.date}>
                  {formatMonth(post.date)}
                </time>
                <h3 className="line-clamp-2 font-display text-lg font-bold text-neutral-900 transition-colors duration-300 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {/* Stretched button makes the whole card clickable while staying a single, keyboard-accessible control */}
                  <button
                    className="text-left after:absolute after:inset-0 after:content-[''] focus:outline-none focus-visible:after:rounded-2xl focus-visible:after:ring-2 focus-visible:after:ring-blue-500"
                    onClick={() => setSelectedPost(post)}
                    type="button">
                    {post.title}
                  </button>
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                  {getParagraphs(post.content).join(' ')}
                </p>
                <span className="mt-auto inline-flex items-center gap-x-1 pt-2 text-sm font-semibold text-blue-600 dark:text-blue-400">
                  Read more
                  <ArrowRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <BlogModal isOpen={!!selectedPost} onClose={handleCloseModal} post={selectedPost} />
    </Section>
  );
});

Blog.displayName = 'Blog';
export default Blog;
