## Insights Hub Dashboard

A responsive and interactive dashboard application called **Insights Hub**, built with Next.js and Tailwind CSS. The application provides detailed analytics and insights on website visits and customer data, featuring dynamic charts and aggregated metrics.

## Features

- **Responsive Design**: Responsive layouts using Tailwind CSS. 
- **Data Visualization**: Interactive charts and graphs using Recharts.
- **Aggregated Metrics**: Real-time data aggregation for key metrics like total visitors, bounce rate, and average session duration.
- **Dynamic Navigation**: Sidebar navigation with responsive behavior based on screen size.
- **API Integration**: Fetches data from external APIs securely without exposing API keys.
- **TypeScript Support**: Strong typing throughout the application for better reliability and maintainability.

## Demo

[Demo](https://drive.google.com/file/d/1_gcbcljJ3tnBPBY5Eu4060iHEUt0Xj6_/view?usp=sharing)

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- **Node.js**: Version 14 or above is recommended.
- **npm**: Comes with Node.js. Alternatively, you can use **yarn**.

### Installation

1. **Clone the Repository**

   ```
    git clone https://github.com/nosenti/insights-hub.git cd insights-hub
   cd insights-hub
   ```

2. **Install Dependencies**

   Using npm:

   ```
   npm install
   ```

3. **Environment Variables**

   To make it easier to use MOCKAROO_API_KEY, I pushed .env file to the repository (which is a bad practice) so that you do not have to create your own to use the application locally. In the real world context, I would have gitingored .env and told you env variables I have instead. 

### Running the Application

**Development Mode**

```
npm run dev
```

This will start the application in development mode at `http://localhost:3000`.

## Technologies Used

- **Next.js**: React framework for server-rendered applications.
- **React**: JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript for type safety.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Recharts**: Charting library built on React components.
- **Mockaroo API**: Used for generating mock data for development.
- **Lucide Icons**: Icon library for React applications.
- **ESLint & Prettier**: Code linting and formatting tools.

## 