import { Link } from 'react-router-dom';
import { CalendarIcon, ClockIcon } from '@heroicons/react/24/outline';

const BlogCard = ({ post }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img
          className="h-48 w-full object-cover"
          src={post.imageUrl}
          alt={post.title}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between bg-white p-6">
        <div className="flex-1">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <div className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              {post.readTime} min read
            </div>
          </div>
          <Link to={`/blog/${post.id}`} className="mt-2 block">
            <p className="text-xl font-semibold text-gray-900">{post.title}</p>
            <p className="mt-3 text-base text-gray-500">{post.excerpt}</p>
          </Link>
          <div className="mt-4">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-block rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 mr-2"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-6">
          <Link
            to={`/blog/${post.id}`}
            className="text-primary-600 hover:text-primary-500"
          >
            Read more →
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
