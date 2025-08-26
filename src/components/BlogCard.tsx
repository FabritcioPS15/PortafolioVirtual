import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Tag, Eye, Heart } from 'lucide-react';
import { BlogPost } from '../data/blog';

interface BlogCardProps {
  post: BlogPost;
  index: number;
  onClick: () => void;
}

const BlogCard: React.FC<BlogCardProps> = ({ post, index, onClick }) => {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ delay: index * 0.1, duration: 0.3 }}
      className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400/50 transition-all duration-300 group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden">
        <motion.img
          src={post.image}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
        
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-gradient-to-r from-blue-600/80 to-purple-600/80 text-white text-xs rounded-full backdrop-blur-sm capitalize">
            {post.category}
          </span>
        </div>

        <div className="absolute bottom-4 right-4 flex items-center space-x-3 text-white text-sm">
          <div className="flex items-center space-x-1">
            <Eye size={14} />
            <span>{post.views}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Heart size={14} />
            <span>{post.likes}</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar size={14} />
            <span>{new Date(post.date).toLocaleDateString('es-ES')}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock size={14} />
            <span>{post.readTime} min</span>
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
          {post.title}
        </h3>

        <p className="text-gray-400 text-sm mb-4 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded flex items-center space-x-1"
            >
              <Tag size={10} />
              <span>{tag}</span>
            </span>
          ))}
        </div>

        <div className="flex items-center space-x-2">
          <User size={16} className="text-gray-400" />
          <span className="text-gray-400 text-sm">{post.author}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;