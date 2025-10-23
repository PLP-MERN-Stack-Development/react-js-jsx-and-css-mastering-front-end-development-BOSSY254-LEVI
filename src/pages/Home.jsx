import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, CheckCircle, Globe, Zap } from 'lucide-react';
import Button from '../components/UI/Button';
import Card, { CardBody } from '../components/UI/Card';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <section className="text-center py-20 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-3xl opacity-50"></div>
        
        {/* Content */}
        <div className="relative">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 font-medium text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to the future of task management
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 animate-slide-up">
            Welcome to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">PLP Task Manager</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto animate-fade-in">
            A modern React application for managing your tasks efficiently with beautiful UI and powerful features.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
            <Link to="/tasks">
              <Button variant="primary" size="lg" className="group">
                Get Started
                <Zap className="w-5 h-5 ml-2 group-hover:animate-pulse" />
              </Button>
            </Link>
            <Link to="/api-demo">
              <Button variant="secondary" size="lg" className="group">
                Explore API
                <Globe className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-16">
        <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardBody className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Task Management
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Create, organize, and track your tasks with our intuitive task manager.
            </p>
            <Link to="/tasks">
              <Button variant="outline" className="w-full group hover:bg-blue-50 dark:hover:bg-blue-900/30">
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  Try It Out →
                </span>
              </Button>
            </Link>
          </CardBody>
        </Card>
        
        <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardBody className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
              <Globe className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              API Integration
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Explore real API data fetching with search and pagination features.
            </p>
            <Link to="/api-demo">
              <Button variant="outline" className="w-full group hover:bg-indigo-50 dark:hover:bg-indigo-900/30">
                <span className="group-hover:translate-x-1 transition-transform inline-block">
                  View Demo →
                </span>
              </Button>
            </Link>
          </CardBody>
        </Card>
        
        <Card className="transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
          <CardBody className="text-center p-8">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Zap className="w-8 h-8 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Responsive Design
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Works perfectly on all devices - desktop, tablet, and mobile.
            </p>
            <Button variant="outline" className="w-full group hover:bg-purple-50 dark:hover:bg-purple-900/30" disabled>
              <span className="group-hover:translate-x-1 transition-transform inline-block">
                Built-in →
              </span>
            </Button>
          </CardBody>
        </Card>
      </section>
    </div>
  );
};

export default Home;