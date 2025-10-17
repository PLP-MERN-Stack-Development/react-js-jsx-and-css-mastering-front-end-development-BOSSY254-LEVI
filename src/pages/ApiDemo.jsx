import React, { useState } from 'react';
import { useApi } from '../hooks/useApi';
import Card, { CardHeader, CardBody } from '../components/UI/Card';
import Button from '../components/UI/Button';
import Loader from '../components/UI/Loader';

const ApiDemo = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { data: posts, loading, error, refetch } = useApi('https://jsonplaceholder.typicode.com/posts');

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="max-w-6xl mx-auto py-8">
        <Card>
          <CardBody>
            <div className="text-center py-12">
              <Loader size="lg" className="mb-4" />
              <p className="text-gray-600 dark:text-gray-400">Loading posts from API...</p>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-6xl mx-auto py-8">
        <Card>
          <CardBody>
            <div className="text-center py-8">
              <div className="text-red-600 dark:text-red-400 mb-4">
                <p className="text-lg font-semibold">Error Loading Data</p>
                <p className="text-sm mt-2">{error}</p>
              </div>
              <Button 
                variant="primary" 
                onClick={refetch}
                className="mt-4"
              >
                Try Again
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto py-8">
      <Card>
        <CardHeader>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                API Integration Demo
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Fetching data from JSONPlaceholder API
              </p>
            </div>
            <Button 
              variant="secondary" 
              onClick={refetch}
              disabled={loading}
            >
              Refresh Data
            </Button>
          </div>
        </CardHeader>
        <CardBody className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Search posts by title or content..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {filteredPosts.slice(0, 6).map(post => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardBody>
                  <h3 className="font-semibold text-lg mb-2 text-gray-900 dark:text-white line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-3">
                    {post.body}
                  </p>
                  <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400">
                    <span>Post ID: {post.id}</span>
                    <span>User ID: {post.userId}</span>
                  </div>
                </CardBody>
              </Card>
            ))}
          </div>

          {filteredPosts.length === 0 && searchTerm && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>No posts found matching "{searchTerm}"</p>
              <Button 
                variant="outline" 
                onClick={() => setSearchTerm('')}
                className="mt-2"
              >
                Clear Search
              </Button>
            </div>
          )}

          {filteredPosts.length === 0 && !searchTerm && (
            <div className="text-center py-8 text-gray-500 dark:text-gray-400">
              <p>No posts available</p>
            </div>
          )}

          <div className="flex justify-between items-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700 pt-4">
            <span>
              Showing {Math.min(filteredPosts.length, 6)} of {filteredPosts.length} posts
            </span>
            {filteredPosts.length > 6 && (
              <span className="text-blue-600 dark:text-blue-400">
                +{filteredPosts.length - 6} more posts
              </span>
            )}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ApiDemo;