# M-Rom Frontend

A modern React frontend application for water purification services built with Vite, TypeScript, and Tailwind CSS.

## Features

- Modern React 18 with TypeScript
- Vite for fast development and building
- Tailwind CSS for styling
- Radix UI components
- React Router for navigation
- Form handling with React Hook Form
- Toast notifications
- Responsive design

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd mrom_frontend
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:8080](http://localhost:8080) to view the application in your browser.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build the project in development mode
- `npm run lint` - Run ESLint to check for code issues
- `npm run preview` - Preview the production build locally

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/         # Page components
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
└── assets/        # Static assets
```

## Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **React Router** - Client-side routing
- **React Hook Form** - Form handling
- **React Query** - Data fetching and caching
- **Lucide React** - Icon library

## Backend Integration

This frontend is prepared to connect to a backend API. The authentication and data fetching logic can be easily integrated with your backend services.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
