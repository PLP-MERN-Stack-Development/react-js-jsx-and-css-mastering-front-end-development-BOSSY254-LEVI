# PLP Task Manager

A modern, responsive React application for efficient task management, built with JSX and Tailwind CSS. This application demonstrates advanced front-end development concepts including component architecture, state management, custom hooks, API integration, and responsive design.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3.5-38B2AC.svg)
![React Router](https://img.shields.io/badge/React_Router-6.20.0-CA4245.svg)

## 🚀 Live Demo

Experience the PLP Task Manager in action!  
**[🌐 View Live Application](https://week-3-react.netlify.app/)**

## 📋 Table of Contents

- [🚀 Live Demo](#-live-demo)
- [📸 Application Screenshots](#-application-screenshots)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [📋 Prerequisites](#-prerequisites)
- [🚀 Installation & Setup](#-installation--setup)
- [📖 Usage](#-usage)
- [📁 Project Structure](#-project-structure)
- [🔌 API Integration](#-api-integration)
- [🎨 Customization](#-customization)
- [🧪 Development](#-development)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [🙏 Acknowledgments](#-acknowledgments)
- [📞 Support](#-support)

## 📸 Application Screenshots

### 🏠 Welcome Page
![Welcome Page](screenshots%20of%20the%20app/homePage.jpg)
The welcoming landing page of PLP Task Manager featuring a clean, modern design with a hero section that introduces the application's core purpose. Users can quickly navigate to either the task management interface or explore the API integration demo.

### 📋 Task Management Dashboard
![Task Management Dashboard](screenshots%20of%20the%20app/taskManagerDashboard.jpg)
The main task management interface showing a comprehensive overview of all tasks. The dashboard displays total task count with breakdowns (active vs completed), provides filtering options, and allows users to add new tasks while maintaining a clean, organized view of their to-do items.

### ✅ Active Tasks View
![Active Tasks View](screenshots%20of%20the%20app/activeTasks.jpg)
Filtered view showing only active (incomplete) tasks. This focused interface helps users concentrate on pending items with clear visual indicators for task status and easy access to completion and deletion actions.

### ✅ Completed Tasks View
![Completed Tasks View](screenshots%20of%20the%20app/completedTasks.jpg)
Filtered view displaying only completed tasks. This section allows users to review their accomplished items, providing a sense of progress and achievement while maintaining the same clean, organized interface.

### 🔌 API Integration Demo
![API Integration Demo](screenshots%20of%20the%20app/APIDemo.jpg)
The API demonstration page showcasing real data fetching from JSONPlaceholder API. Features include search functionality to filter posts by title or content, pagination controls, and clean display of API responses with post details and user information.

### 🔍 Search Functionality
![Search Functionality](screenshots%20of%20the%20app/searchFunctionality.jpg)
Demonstration of the search feature within the API demo, showing filtered results based on user queries. The interface provides real-time search with result counts and maintains the same clean card-based layout for consistency.

## ✨ Features

- **Task Management**: Create, edit, complete, and delete tasks with persistent storage
- **Advanced Filtering**: Filter tasks by status (All, Active, Completed)
- **API Integration**: Fetch and display data from external APIs with search and pagination
- **Theme Support**: Light/Dark mode toggle with system preference detection
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Custom Hooks**: Reusable hooks for local storage, API calls, and infinite scrolling
- **Modern UI**: Beautiful interface with smooth animations and transitions
- **Performance**: Optimized with Vite for fast development and builds

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with JSX
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom animations
- **Routing**: React Router DOM v6
- **Icons**: Lucide React
- **State Management**: React Hooks (useState, useEffect, useContext)
- **Data Persistence**: Local Storage API
- **API Integration**: Fetch API with custom hooks
- **Utilities**: Lodash for debouncing

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)
- **Git**: For cloning the repository

You can check your versions by running:
```bash
node --version
npm --version
```

## 🚀 Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/react-js-jsx-and-css-mastering-front-end-development-BOSSY254-LEVI.git
cd react-js-jsx-and-css-mastering-front-end-development-BOSSY254-LEVI
```

### 2. Install Dependencies
```bash
npm install
```

This will install all the required dependencies listed in `package.json`.

### 3. Start Development Server
```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### 4. Build for Production
```bash
npm run build
```

The built files will be in the `dist` directory.

### 5. Preview Production Build
```bash
npm run preview
```

## 📖 Usage

### Navigation
- **Home (/)**: Welcome page with feature overview
- **Tasks (/tasks)**: Task management interface
- **API Demo (/api-demo)**: External API integration demonstration

### Task Management
1. Navigate to the Tasks page
2. Add new tasks using the input field
3. Click the checkbox to mark tasks as complete
4. Use the filter buttons to view All, Active, or Completed tasks
5. Click the delete button to remove tasks

### API Demo
1. Navigate to the API Demo page
2. Browse posts fetched from JSONPlaceholder API
3. Use the search bar to filter posts by title or content
4. Scroll down to load more posts automatically (infinite scroll)
5. Click "Refresh Data" to reload the API data

### Theme Toggle
- Click the theme toggle button in the navbar to switch between light and dark modes
- Your preference is automatically saved and restored on page reload

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout/          # Layout components (Navbar, Footer, Layout)
│   ├── TaskManager/     # Task-related components
│   │   ├── TaskForm.jsx     # Task creation form
│   │   ├── TaskList.jsx     # Task display list
│   │   ├── TaskFilter.jsx   # Task filtering controls
│   │   └── TaskManager.jsx  # Main task manager component
│   └── UI/              # Base UI components
│       ├── Button.jsx       # Reusable button component
│       ├── Card.jsx         # Card container component
│       └── Loader.jsx       # Loading spinner component
├── contexts/            # React context providers
│   └── ThemeContext.jsx     # Theme management context
├── hooks/               # Custom React hooks
│   ├── useApi.js            # Basic API hook
│   ├── useApiWithPagination.js  # API with pagination
│   ├── useInfiniteScroll.js     # Infinite scroll hook
│   └── useLocalStorage.js       # Local storage persistence
├── pages/               # Route components
│   ├── Home.jsx             # Landing page
│   ├── Tasks.jsx            # Task management page
│   └── ApiDemo.jsx          # API demonstration page
├── App.jsx              # Main application component
├── index.css            # Global styles and Tailwind imports
└── main.jsx             # Application entry point
```

## 🔌 API Integration

The application integrates with the following external API:

### JSONPlaceholder API
- **Base URL**: `https://jsonplaceholder.typicode.com/posts`
- **Purpose**: Demonstrates API fetching, search, and pagination
- **Features**:
  - Fetch posts with pagination
  - Search posts by title and body
  - Infinite scrolling
  - Error handling and loading states

## 🎨 Customization

### Theme Configuration
Themes are configured in `src/contexts/ThemeContext.jsx`. The app supports:
- Light mode
- Dark mode
- System preference detection

### Styling
- Tailwind CSS is configured in `tailwind.config.js`
- Custom animations and utilities can be added to `src/index.css`
- PostCSS configuration in `postcss.config.js`

### Component Variants
UI components support multiple variants:
- Button: `primary`, `secondary`, `danger`, `outline`
- Card: Standard card with header/body sections

## 🧪 Development

### Available Scripts
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Code Quality
- Uses ESLint for code linting (configured in Vite)
- Follows React best practices
- Implements proper error boundaries

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Vercel will automatically detect Vite and configure the build settings
3. Deploy with zero configuration

### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build command: `npm run build`
4. Set publish directory: `dist`

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run `npm run deploy`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines
- Follow the existing code style
- Write meaningful commit messages
- Test your changes thoroughly
- Update documentation as needed

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces
- [Vite](https://vitejs.dev/) - Next generation frontend tooling
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - Fake Online REST API
- [Lucide React](https://lucide.dev/) - Beautiful & consistent icon toolkit

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy coding! 🎉**
