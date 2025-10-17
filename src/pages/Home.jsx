import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../components/UI/Button';
import Card, { CardBody } from '../components/UI/Card';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <section className="text-center py-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Welcome to <span className="text-blue-600">PLP Task Manager</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
          A modern React application for managing your tasks efficiently with beautiful UI and powerful features.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/tasks">
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Link>
          <Link to="/api-demo">
            <Button variant="secondary" size="lg">
              Explore API
            </Button>
          </Link>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-8 py-12">
        <Card>
          <CardBody className="text-center">
            <h3 className="text-xl font-semibold mb-4">Task Management</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Create, organize, and track your tasks with our intuitive task manager.
            </p>
            <Link to="/tasks">
              <Button variant="outline" className="w-full">
                Try It Out
              </Button>
            </Link>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="text-center">
            <h3 className="text-xl font-semibold mb-4">API Integration</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Explore real API data fetching with search and pagination features.
            </p>
            <Link to="/api-demo">
              <Button variant="outline" className="w-full">
                View Demo
              </Button>
            </Link>
          </CardBody>
        </Card>
        
        <Card>
          <CardBody className="text-center">
            <h3 className="text-xl font-semibold mb-4">Responsive Design</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Works perfectly on all devices - desktop, tablet, and mobile.
            </p>
            <Button variant="outline" className="w-full" disabled>
              Built-in
            </Button>
          </CardBody>
        </Card>
      </section>
    </div>
  );
};

export default Home;