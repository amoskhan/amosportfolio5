import Image from 'next/image';
import {FC, memo, useState} from 'react';

import {blogPosts} from '../../data/data';
import Section from '../Layout/Section';

const Blog: FC = memo(() => {
  const [posts] = useState(blogPosts);
  return (
    <Section className="bg-neutral-700 pt-0 pb-0 px-4 py-16 md:py-14 lg:px-8" sectionId="blog">
      <div className="flex flex-col gap-y-4 p-0">
        <div className="flex flex-col gap-y-1 p-0">
          <h2 className="text-3xl font-bold text-white underline mt-0 mb-2">Blog</h2>
        </div>
        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {posts.map((post, idx) => (
            <li className="col-span-1 flex flex-col gap-y-2" key={idx}>
              <h3 className="text-xl font-semibold text-white">{post.title}</h3>
              <p className="text-sm text-gray-400">{post.date}</p>
              <p className="text-base text-gray-300">{post.content}</p>
              {post.image && (
                <div className="relative w-full overflow-hidden rounded-lg">
                  <Image
                    alt={post.title}
                    height={475}
                    layout="responsive"
                    objectFit="cover"
                    src={post.image}
                    width={700}
                  />
                </div>
              )}
              <p className="text-sm text-gray-400">By {post.author}</p>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
});

Blog.displayName = 'Blog';
export default Blog;
